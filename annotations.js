/* ==========================================================================
   原型标注层 · annotations.js
   --------------------------------------------------------------------------
   给开发看的说明层，和原型本身完全解耦：
     · 不修改任何原型内容，不改 DOM 结构，不碰 app.js
     · 默认关闭：手机画布右侧有「注释」总开关，点了才出现编号圆点
     · 标注内容全部集中在下面「一、标注内容配置」里，加标注只改那一段

   怎么用：
     1. 打开原型 → 点手机下方居中的「注释」按钮
     2. 被标注的元素右侧出现一个带编号的圆点
     3. 点圆点看说明；再点「注释」按钮整体收起
     4. 换屏（tab / 返回）会自动重新定位

   想核对标注有没有挂空：控制台执行 __annReport()，会列出当前屏每条标注
   是否找到了锚点。
   ========================================================================== */
(() => {
  "use strict";

  if (window.__annLoaded) return;
  window.__annLoaded = true;

  /* ========================================================================
     一、标注内容配置  —— 以后加标注只动这一段
     ------------------------------------------------------------------------
     id      必填  唯一标识（用于去重和 __annReport 排查）
     screen  必填  挂在哪个屏，值 = .phone-block 上的 data-screen
     anchor  必填  CSS 选择器，会在该屏内部查找
     loginView 选填 仅登录页用：只在指定视图显示
                    （main = 登录 / bind = 关联手机号 / sms = 验证码登录）
     nth     选填  同一选择器匹配到多个时取第几个（0 起，默认 0）
     title   选填  弹层标题，留空则不显示标题行（正文够清楚就别写）
     body    必填  正文，支持 **加粗** 和 `代码`，用 L(...) 手动分行
     meta    选填  补充信息，如 { "接口": "...", "数据表": "..." }，不写不显示
     tags    选填  小标签，如 ["交互", "接口"]，不写不显示
     ======================================================================== */

  const L = (...lines) => lines.join("\n");

  const ANNOTATIONS = [
    /* ---------------- 首页 ---------------- */
    {
      id: "homeRentEntryLogin",
      screen: "home",
      anchor: ".home-login-card",
      body: L(
        "点击此处跳转登录页。",
        "未登录状态下无法使用各项功能：点击「月租办理」「车辆管理」「订单记录」，均会先跳转至登录页。"
      )
    },
    {
      id: "homeRentCard",
      screen: "home",
      anchor: ".rent-card",
      body: L(
        "当前生效的月租车位：车牌 / 小区、剩余天数、月租截止日期。",
        "点「**续费**」为该车位续期 —— 进入续费流程，选择续租时长后支付。"
      )
    },
    /* 三个入口在同一行。各挂一个圆点的话，三个圆点被迫垂直错开，
       连出来的三条线会互相缠绕（实测过，很乱），所以合并成一条，
       锚点落在整个网格上，弹层里逐项说明 */
    {
      id: "homeShortcuts",
      screen: "home",
      anchor: ".shortcut-grid",
      body: L(
        "· **月租办理** → 办新的月租车位：选小区 → 选车位 → 填车主资料 → 支付",
        "· **车辆管理** → 新增 / 编辑车牌与行驶证；办月租、续费时选的车来自这里",
        "· **订单记录** → 查订单状态与账单明细，含开票、退款记录"
      )
    },
    {
      id: "homeAdSlot",
      screen: "home",
      anchor: ".home-ad-slot",
      body: L(
        "广告位预留。",
        "后续用于运营位（活动 / 合作方），当前为空白占位，不承载功能。"
      )
    },

    /* ---------------- 登录 ---------------- */
    /* 只在「登录」这个视图（main）出现 —— 讲的就是这两个登录入口。
       关联手机号（bind）、验证码登录（sms）两个视图不挂任何注释 */
    {
      id: "loginDataAccount",
      screen: "login",
      loginView: "main",
      anchor: ".login-actions",
      body: L(
        "· **微信快捷登录** → **有数据**（先跳「关联手机号」页）",
        "  订单、退款、车辆、开票记录都完整",
        "",
        "· **验证码登录** → **无数据**",
        "  资料、订单、退款均为空"
      )
    }
  ];

  /* ========================================================================
     二、以下为引擎，正常不需要改
     ======================================================================== */

  const BADGE_GAP = 30;      // 圆点之间的最小垂直间距
  const EDGE_PAD = 14;       // 圆点距可视区上下边缘的留白

  const state = {
    on: false,
    sig: "",                 // 布局签名，变了才重建 DOM
    rows: [],                // 当前屏已渲染的 { item, el, badgeY, anchorY }
    openId: null,            // 当前打开弹层的 id
    missed: [],              // 锚点没找到的标注（供 __annReport 排查）
    hidden: 0                // 锚点存在但当前状态看不到的数量
  };

  let layer, svg, badgeBox, popup, toastEl, dock, toggle, toastTimer;

  /* ---------- 小工具 ---------- */

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"]/g, (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])
    );

  // 极简标记：**加粗** 和 `代码`。先转义再替换，避免注入
  const fmt = (text) =>
    esc(text)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/`(.+?)`/g, "<code>$1</code>");

  const activeScreen = () => document.body.dataset.currentTab;

  function screenItems() {
    const screen = activeScreen();
    const loginView = document.body.dataset.loginView;
    return ANNOTATIONS.filter(
      (item) => item.screen === screen && (!item.loginView || item.loginView === loginView)
    );
  }

  /* ---------- 锚点解析 ---------- */

  // 真的看得见吗？
  // 只看"有没有布局盒"是不够的 —— 原型里同一屏的多个视图常常是
  // position:absolute + opacity:0 叠在一起（登录页 main / bind / sms 就是这样），
  // 非激活视图里的元素照样有盒模型，注释就会飘到不该出现的页面上。
  function isVisible(el) {
    if (!el.getClientRects().length) return false;
    for (let node = el; node && node !== document.documentElement; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden") return false;
      if (parseFloat(style.opacity) < 0.05) return false;
    }
    return true;
  }

  function resolveAnchor(screenEl, item) {
    let matches;
    try {
      matches = screenEl.querySelectorAll(item.anchor);
    } catch (error) {
      state.missed.push({ id: item.id, reason: "选择器语法错误：" + item.anchor });
      return null;
    }
    const el = matches[item.nth || 0];
    if (!el) {
      state.missed.push({
        id: item.id,
        reason: `没找到锚点 ${item.anchor}${item.nth ? `（第 ${item.nth + 1} 个）` : ""}`
      });
      return null;
    }
    // 不可见（含"视图叠着但没激活"的情况）不算写错，多半是当前状态看不到它，
    // 单独记一笔用于提示
    if (!isVisible(el)) return { hidden: true };
    return { el };
  }

  /* ---------- 建 UI ---------- */

  function buildChrome() {
    // 工具条：手机画布正下方居中，注释 / 引导两个按钮并排放在这里
    dock = document.createElement("div");
    dock.className = "dev-dock";
    document.body.appendChild(dock);

    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "dev-btn dev-btn--ann";
    toggle.title = "在原型上显示 / 隐藏编号注释";
    // 总开关，只表达开 / 关，不显示任何计数
    toggle.innerHTML = '<span class="dev-btn__dot"></span><span>注释</span>';
    toggle.addEventListener("click", () => setMode(!state.on, true));
    dock.appendChild(toggle);

    layer = document.createElement("div");
    layer.className = "ann-layer";
    layer.hidden = true;
    layer.innerHTML = '<svg class="ann-svg" aria-hidden="true"></svg><div class="ann-badges"></div>';
    document.body.appendChild(layer);
    svg = layer.querySelector(".ann-svg");
    badgeBox = layer.querySelector(".ann-badges");

    popup = document.createElement("div");
    popup.className = "ann-popup";
    popup.hidden = true;
    layer.appendChild(popup);

    toastEl = document.createElement("div");
    toastEl.className = "ann-toast";
    toastEl.hidden = true;
    document.body.appendChild(toastEl);

    // 点空白关闭弹层
    document.addEventListener("click", (event) => {
      if (!state.on) return;
      if (event.target.closest(".ann-popup") || event.target.closest(".ann-badge")) return;
      closePopup();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePopup();
    });
  }

  /* ---------- 工具条定位 ---------- */

  // 宽屏：贴到手机画布右侧、垂直居中；窄屏放不下就回落到正下方居中
  function positionDock() {
    if (!dock) return;
    const screenEl = document.querySelector(".phone-block.is-active");
    const phone = screenEl && screenEl.querySelector(".phone");
    if (!phone) return;

    const rect = phone.getBoundingClientRect();
    const gap = 18;                                  // 和手机的间距
    const width = dock.offsetWidth || 150;
    const height = dock.offsetHeight || 34;
    const fits = rect.right + gap + width <= window.innerWidth - 12;

    if (!fits) {
      dock.classList.remove("is-side");
      dock.style.left = "";
      dock.style.top = "";
      return;
    }

    const left = Math.round(rect.right + gap);
    let top = rect.top + rect.height / 2;

    // 注释弹层也伸到手机右侧这片地，撞上就让开：优先往下挪，下面放不下就改往上
    const pop = popup && !popup.hidden ? popup.getBoundingClientRect() : null;
    if (pop && left < pop.right && left + width > pop.left) {
      const half = height / 2;
      const margin = 8;
      if (top + half > pop.top - margin && top - half < pop.bottom + margin) {
        const below = pop.bottom + margin + half;
        const above = pop.top - margin - half;
        top = below + half <= window.innerHeight - 10 ? below : above;
      }
    }

    dock.classList.add("is-side");
    dock.style.left = left + "px";
    dock.style.top = Math.round(top) + "px";
  }

  function toast(text) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  }

  /* ---------- 弹层 ---------- */

  function closePopup() {
    if (!popup) return;
    popup.hidden = true;
    state.openId = null;
    badgeBox.querySelectorAll(".ann-badge.is-open").forEach((el) => el.classList.remove("is-open"));
    scheduleDock();
  }

  function openPopup(item, index, badgeX, badgeY) {
    const metaRows = Object.entries(item.meta || {})
      .map(
        ([key, value]) =>
          `<div class="ann-popup__meta-row"><span>${esc(key)}</span><strong>${fmt(value)}</strong></div>`
      )
      .join("");

    const tagRows = (item.tags || [])
      .map((tag) => `<span class="ann-popup__tag">${esc(tag)}</span>`)
      .join("");

    popup.innerHTML =
      '<div class="ann-popup__head">' +
      `<span class="ann-popup__no">${index}</span>` +
      (item.title ? `<div class="ann-popup__title">${fmt(item.title)}</div>` : "") +
      '<button class="ann-popup__close" type="button" aria-label="关闭">×</button>' +
      "</div>" +
      `<div class="ann-popup__body">${fmt(item.body)}</div>` +
      (metaRows ? `<div class="ann-popup__meta">${metaRows}</div>` : "") +
      (tagRows ? `<div class="ann-popup__tags">${tagRows}</div>` : "");

    popup.querySelector(".ann-popup__close").addEventListener("click", closePopup);
    popup.hidden = false;
    state.openId = item.id;
    placePopup(badgeX, badgeY);
  }

  function placePopup(badgeX, badgeY) {
    const pad = 12;
    const width = popup.offsetWidth || 296;
    const height = popup.offsetHeight || 220;

    let x = badgeX + 20;
    if (x + width > window.innerWidth - pad) x = badgeX - 20 - width;   // 右侧不够就翻到左侧
    x = Math.max(pad, Math.min(x, window.innerWidth - width - pad));

    let y = badgeY - 18;
    y = Math.max(pad + 8, Math.min(y, window.innerHeight - height - pad));

    popup.style.left = `${Math.round(x)}px`;
    popup.style.top = `${Math.round(y)}px`;
    scheduleDock(); // 工具条也在右侧，弹层一开就要重算避让
  }

  /* ---------- 布局 ---------- */

  function layout() {
    if (!state.on || !layer) return;

    const screenEl = document.querySelector(".phone-block.is-active");
    const phone = screenEl && screenEl.querySelector(".phone");
    if (!screenEl || !phone) {
      clearLayer();
      return;
    }

    const content = screenEl.querySelector(".content");
    const phoneRect = phone.getBoundingClientRect();
    const contentRect = content ? content.getBoundingClientRect() : phoneRect;

    state.missed = [];
    state.hidden = 0;

    // 1) 收集能显示的锚点
    const blobs = [];
    screenItems().forEach((item) => {
      const found = resolveAnchor(screenEl, item);
      if (!found) return;
      if (found.hidden) {
        state.hidden += 1;
        return;
      }
      const el = found.el;
      const rect = el.getBoundingClientRect();

      // 裁剪范围要分开看：
      //   · 元素在 .content 滚动容器里 → 裁到滚动区，滚出去的就别标了
      //   · 元素在容器外（标题栏、底部按钮）→ 裁到手机本体，
      //     否则会被滚动区的边界判成"不可见"（底部按钮就是这么被漏掉的）
      const insideScroller = content ? content.contains(el) : false;
      const clip = insideScroller
        ? {
            top: Math.max(contentRect.top, phoneRect.top),
            bottom: Math.min(contentRect.bottom, phoneRect.bottom),
            right: Math.min(contentRect.right, phoneRect.right)
          }
        : { top: phoneRect.top, bottom: phoneRect.bottom, right: phoneRect.right };

      const top = Math.max(rect.top, clip.top);
      const bottom = Math.min(rect.bottom, clip.bottom);
      if (bottom - top < 8) return;

      blobs.push({
        item,
        el,
        cy: (top + bottom) / 2,                       // 锚点垂直中心
        anchorX: Math.min(rect.right, clip.right - 6)
      });
    });

    // 2) 签名比对，没变化就不重建 DOM（让 700ms 的兜底巡检几乎零成本）
    const sig = [
      activeScreen(),
      Math.round(phoneRect.width),
      blobs.map((blob) => `${blob.item.id}@${Math.round(blob.cy)}`).join(",")
    ].join("|");

    if (sig === state.sig) {
      if (state.openId) repositionOpenPopup();
      return;
    }
    state.sig = sig;

    // 重建前先记住开着的弹层，重建后贴回新位置。
    // 注意 clearLayer 默认会关掉弹层并把 openId 清空，所以必须先存下来
    const keepOpenId = state.openId;
    clearLayer(true);

    if (!blobs.length) {
      closePopup();
      return;
    }

    // 3) 防重叠：按锚点顺序自上而下排，底部溢出就整体上推
    blobs.sort((a, b) => a.cy - b.cy);
    const minY = phoneRect.top + EDGE_PAD;
    const maxY = phoneRect.bottom - EDGE_PAD;
    let cursor = minY - BADGE_GAP;
    blobs.forEach((blob) => {
      blob.badgeY = Math.max(blob.cy, cursor + BADGE_GAP);
      cursor = blob.badgeY;
    });
    const last = blobs[blobs.length - 1];
    if (last && last.badgeY > maxY) {
      const shift = last.badgeY - maxY;
      blobs.forEach((blob) => {
        blob.badgeY = Math.max(minY, blob.badgeY - shift);
      });
    }

    // 4) 圆点放在手机外侧；窄屏放不下时贴到手机内侧
    const sideRoom = window.innerWidth - phoneRect.right;
    const inset = sideRoom < 64;
    const badgeX = inset ? phoneRect.right - 13 : phoneRect.right + 15;

    const svgParts = [];
    const nodes = [];

    blobs.forEach((blob, index) => {
      const no = index + 1;
      blob.no = no;

      const badge = document.createElement("button");
      badge.type = "button";
      badge.className = "ann-badge" + (inset ? " ann-badge--inset" : "");
      badge.textContent = String(no);
      badge.style.left = `${Math.round(badgeX)}px`;
      badge.style.top = `${Math.round(blob.badgeY)}px`;
      badge.style.zIndex = String(100 - index);
      badge.addEventListener("click", (event) => {
        event.stopPropagation();
        if (state.openId === blob.item.id) {
          closePopup();
          return;
        }
        closePopup();
        badge.classList.add("is-open");
        openPopup(blob.item, no, badgeX, blob.badgeY);
      });
      nodes.push(badge);

      if (!inset) {
        svgParts.push(
          `<line class="ann-line" x1="${Math.round(badgeX - 11)}" y1="${Math.round(blob.badgeY)}" ` +
            `x2="${Math.round(blob.anchorX)}" y2="${Math.round(blob.cy)}" />`,
          `<circle class="ann-line--dot" cx="${Math.round(blob.anchorX)}" cy="${Math.round(blob.cy)}" r="2.2" />`
        );
      }
    });

    svg.innerHTML = svgParts.join("");
    nodes.forEach((node) => badgeBox.appendChild(node));
    state.rows = blobs;

    // 重建后把原来开着的弹层按新坐标贴回去
    if (keepOpenId) {
      const still = blobs.find((blob) => blob.item.id === keepOpenId);
      if (still) {
        state.openId = keepOpenId;
        nodes.forEach((node) => {
          if (node.textContent === String(still.no)) node.classList.add("is-open");
        });
        placePopup(badgeX, still.badgeY);
      } else {
        closePopup();
      }
    }
  }

  function repositionOpenPopup() {
    const still = state.rows.find((blob) => blob.item.id === state.openId);
    if (!still) return;
    const phone = document.querySelector(".phone-block.is-active .phone");
    if (!phone) return;
    const phoneRect = phone.getBoundingClientRect();
    const badgeX = window.innerWidth - phoneRect.right < 64 ? phoneRect.right - 13 : phoneRect.right + 15;
    placePopup(badgeX, still.badgeY);
  }

  // keepPopup=true 时只清掉圆点和连线，保留弹层状态，
  // 供 layout() 在重建后按新坐标把弹层贴回去
  function clearLayer(keepPopup) {
    if (!layer) return;
    svg.innerHTML = "";
    badgeBox.innerHTML = "";
    state.rows = [];
    if (!keepPopup) closePopup();
  }

  /* ---------- 开关 ---------- */

  // fromUser=true 时才弹提示，默认自动开启时保持安静
  function setMode(on, fromUser) {
    state.on = on;
    toggle.classList.toggle("is-on", on);
    layer.hidden = !on;
    state.sig = "";

    if (!on) {
      clearLayer();
      return;
    }

    layout();

    if (!fromUser) return;

    // 用 screenItems() 而不是只看 screen：登录页还有 main / bind / sms 三个视图
    const total = screenItems().length;
    if (!total) {
      toast("本屏暂无标注，换一屏看看");
    } else if (state.missed.length) {
      toast(`${state.missed.length} 条标注锚点没找到，控制台跑 __annReport() 查看`);
    } else if (!state.rows.length && state.hidden) {
      toast("本屏标注对应的元素在当前状态不显示，换个登录态或流程节点再看");
    }
  }

  /* ---------- 重定位触发 ---------- */

  function schedule() {
    if (!state.on) return;
    requestAnimationFrame(layout);
  }

  let dockFrame = 0;

  function scheduleDock() {
    if (dockFrame) return;
    dockFrame = requestAnimationFrame(() => {
      dockFrame = 0;
      positionDock();
    });
  }

  function bindTriggers() {
    // 切屏：app.js 的 showTab / showLoginView 是全局函数，包一层即可
    ["showTab", "showLoginView"].forEach((name) => {
      const original = window[name];
      if (typeof original !== "function") return;
      window[name] = function wrapped(...args) {
        const result = original.apply(this, args);
        state.sig = "";
        schedule();
        scheduleDock();
        return result;
      };
    });

    // 屏内滚动 / 窗口尺寸变化
    document.addEventListener("scroll", () => {
      schedule();
      scheduleDock();
    }, true);
    window.addEventListener("resize", () => {
      state.sig = "";
      schedule();
      scheduleDock();
    });

    // 兜底巡检：列表被重新渲染（如 renderOrderList）时也能跟上
    setInterval(() => {
      if (state.on) layout();
      // 引导入口的显隐跟登录态绑定，顺手同步一次（登录 / 退出后不用等别的事件）
      if (typeof window.__guideSyncBtn === "function") window.__guideSyncBtn();
      positionDock();
    }, 700);
  }

  /* ---------- 启动 ---------- */

  function start() {
    buildChrome();
    bindTriggers();
    scheduleDock(); // 等按钮渲染出来再算位置（要量宽度）
    // 默认不开：点手机右侧的「注释」按钮才出现编号圆点
  }

  // 等 app.js 跑完再初始化（loader.js 会在 app.js onload 时置 ready）
  (function whenReady() {
    const ready = document.body.dataset.ready;
    if (ready === "true") return start();
    if (ready === "error") return;
    setTimeout(whenReady, 60);
  })();

  /* ---------- 排查用 ---------- */

  window.__annReport = () => {
    const screenEl = document.querySelector(".phone-block.is-active");
    const screen = activeScreen();
    return ANNOTATIONS.map((item) => {
      const onScreen = item.screen === screen;
      let status = "不在本屏";
      if (onScreen) {
        if (!screenEl) status = "找不到当前屏容器";
        else if (screenEl.querySelectorAll(item.anchor)[item.nth || 0]) {
          status = isVisible(screenEl.querySelectorAll(item.anchor)[item.nth || 0])
            ? "✓ 已挂上"
            : "锚点存在但当前状态不可见";
        } else status = "✗ 锚点未找到";
      }
      return { id: item.id, screen: item.screen, anchor: item.anchor, status };
    });
  };

  window.__annList = () => ANNOTATIONS;

  /* ---------- 给工具条 / 引导层共用的小接口 ---------- */

  // 提示条：guide.js 想弹同样风格的提示时用它，免得各写一套
  window.__devToast = toast;
  // 整体关掉注释（引导开始时调，避免两个浮层打架）
  window.__devAnnOff = () => {
    if (state.on) setMode(false);
  };
  // 工具条位置重算（引导按钮显隐后工具条高度会变）
  window.__devSyncDock = scheduleDock;
})();
