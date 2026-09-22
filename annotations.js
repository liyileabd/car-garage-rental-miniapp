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
     auth    选填  只在指定登录态显示（authed = 登录后 / guest = 未登录）。
                    首页的登录后功能注释都写 authed，未登录时不出现。
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
      auth: "guest",
      anchor: ".home-login-card",
      body: L(
        "点击此处跳转登录页。",
        "未登录状态下无法使用各项功能：点击「月租办理」「车辆管理」「订单记录」，均会先跳转至登录页。"
      )
    },
    /* 以下三条是「登录后」页面上的功能说明，都标 authed ——
       未登录时这些入口点了会被拦到登录页，讲它们是什么没有意义，
       所以未登录首页只留上面那条登录说明 */
    {
      id: "homeRentCard",
      screen: "home",
      auth: "authed",
      anchor: ".rent-card",
      body: L(
        "当前生效的月租车位信息：车牌与小区、剩余天数、月租截止日期。",
        "右上角「**续费**」按钮：为该车位续期。"
      )
    },
    /* 三个入口在同一行。各挂一个圆点的话，三个圆点被迫垂直错开，
       连出来的三条线会互相缠绕（实测过，很乱），所以合并成一条，
       锚点落在整个网格上，弹层里逐项说明 */
    {
      id: "homeShortcuts",
      screen: "home",
      auth: "authed",
      anchor: ".shortcut-grid",
      body: L(
        "· **月租办理** —— 办新的月租车位",
        "· **车辆管理** —— 维护车辆资料（车牌 / 行驶证），办月租时从这里选车",
        "· **订单记录** —— 查看全部订单的状态与账单明细"
      )
    },
    {
      id: "homeAdSlot",
      screen: "home",
      auth: "authed",
      anchor: ".home-ad-slot",
      body: L(
        "页面预留的广告位。",
        "后续用于投放运营内容（活动 / 合作方），当前为空白占位，不承载功能。"
      )
    },

    /* ---------------- 办理月租 · 选择小区 ---------------- */
    {
      id: "rentGarageList",
      screen: "rentFlow",
      auth: "authed",
      anchor: "[data-rent-garage-list]",
      body: L(
        "可办理月租的小区项目列表，点「**选择**」进入下一步。",
        "小区信息由管理后台工作人员配置。",
        "总车位数由工作人员录入；可办数由系统按已租数量自动计算，工作人员也可修改。"
      )
    },

    /* ---------------- 办理月租 · 车辆与租期 ----------------
       这一屏是表单，5 个字段自上而下排开，各自一个圆点（纵向排列不会
       出现首页那种斜线缠绕问题）。文案只讲「这块是干嘛的」，不写流程。 */
    {
      id: "rentVehiclePicker",
      screen: "rentVehicle",
      auth: "authed",
      anchor: "[data-open-rent-vehicle-picker]",
      body: L(
        "本次办理的车辆，从「**车辆管理**」已登记的车辆中选择。",
        "最多可选 2 辆，至少选择 1 辆，已选数量显示在右侧。",
        "进出场计费按办理车辆执行：先进场车辆享受月租通行，后进场车辆按临停计费。"
      )
    },
    {
      id: "rentStartDate",
      screen: "rentVehicle",
      auth: "authed",
      anchor: "[data-open-rent-date-picker]",
      body: L(
        "月租的起租日期，点此处选择。",
        "它同时是费用与截止日期的计算基准。"
      )
    },
    {
      id: "rentMonths",
      screen: "rentVehicle",
      auth: "authed",
      anchor: "[data-rent-months]",
      body: L(
        "本次租赁的月数，可直接填写，或用下方快捷选项选择。",
        "当前不设月数上限。"
      )
    },
    {
      id: "rentEndDate",
      screen: "rentVehicle",
      auth: "authed",
      anchor: "[data-rent-end-date]",
      body: L(
        "月租的到期日期。",
        "由开始日期与租赁月数自动算出，不能直接修改。"
      )
    },
    {
      id: "rentTermPrice",
      screen: "rentVehicle",
      auth: "authed",
      anchor: ".rent-term-price",
      body: L(
        "本次月租的费用，按所选小区的月租单价与租赁月数计算。",
        "随开始日期、租赁月数变化实时更新。"
      )
    },

    /* ---------------- 办理月租 · 告知书 ---------------- */
    {
      id: "rentNoticeNext",
      screen: "rentNotice",
      auth: "authed",
      anchor: "[data-rent-notice-next]",
      body: L(
        "需同时满足三项条件才能继续：翻至最后一份告知书、阅读倒计时结束、勾选同意项。",
        "未满足时按钮置灰，并按当前缺少的条件提示文案。"
      )
    },

    /* ---------------- 车辆管理 ---------------- */
    {
      id: "vehicleManageList",
      screen: "vehicleManage",
      auth: "authed",
      anchor: "[data-vehicle-list]",
      body: L(
        "本页展示当前账号下已登记的全部车辆。",
        "已办理月租与未办理月租的车辆，均在此列出。"
      )
    },
    {
      id: "vehicleBindTag",
      screen: "vehicleManage",
      auth: "authed",
      anchor: ".vehicle-bind-tag.monthly-active",
      body: L(
        "车辆月租生效期间不可解绑。",
        "该标识在车辆存在有效月租订单时显示。"
      )
    },

    /* ---------------- 通用弹窗 ---------------- */
    /* screen: "*" = 哪一屏都可能弹（办理成功 / 续费成功 / 个人中心开关都调它），
       所以不能绑定单一屏；锚点找不到时不算错，只是「还没触发」。 */
    {
      id: "rentReminderPrompt",
      screen: "*",
      auth: "authed",
      anchor: ".rent-reminder-panel",
      body: L(
        "到期提醒通过微信「**小程序订阅消息**」下发，需用户在此授权订阅。",
        "订阅只能由用户点击触发，后台无法代为授权；一次性订阅授权一次只可下发一条。",
        "提醒时间由 **PC 端管理后台**配置。"
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

  // 屏内模态弹层：它一开就盖住整页，后面那些区块已经看不清了，
  // 这时候只标弹层自己 —— 否则弹窗上会同时飘出首页的 3 个圆点。
  // 以后原型再加同类弹层，把选择器补进来即可。
  const MODAL_SELECTORS = [
    ".rent-reminder-modal",
    ".rent-overlap-dialog",
    ".vehicle-claim-dialog",
    ".account-delete-dialog"
  ];

  function screenItems() {
    const screen = activeScreen();
    const loginView = document.body.dataset.loginView;
    const auth = document.body.dataset.auth;
    return ANNOTATIONS.filter(
      (item) =>
        (!item.screen || item.screen === "*" || item.screen === screen) &&
        (!item.loginView || item.loginView === loginView) &&
        (!item.auth || item.auth === auth)
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

  // 当前屏里有没有开着的模态弹层？返回那个元素（没有就 null）
  function activeModal(screenEl) {
    if (!screenEl) return null;
    for (const selector of MODAL_SELECTORS) {
      const el = screenEl.querySelector(selector);
      if (el && isVisible(el)) return el;
    }
    return null;
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
      // screen:"*" 的锚点是"触发后才存在"的（如各类弹窗），没找到属正常，不算错
      if (item.screen !== "*") {
        state.missed.push({
          id: item.id,
          reason: `没找到锚点 ${item.anchor}${item.nth ? `（第 ${item.nth + 1} 个）` : ""}`
        });
      }
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

  /* ---------- 工具条定位 ----------
     钉在原型手机的右上角外侧：右边缘留 12px，与手机顶边对齐。
     只在"手机位置变了"时重算 —— 加载 / resize / 切屏。
     弹层开关、页面滚动一律不动它（人类要的是它别再跟着跑）。
     窄屏（手机铺满视口）时退化：贴到手机内部的右上角。
     ---------------------------------- */

  function positionDock() {
    if (!dock) return;
    const block = document.querySelector(".phone-block.is-active");
    const phone = block && block.querySelector(".phone");
    if (!phone) return;

    const rect = phone.getBoundingClientRect();
    const gap = 12;
    const width = dock.offsetWidth || 80;
    const left = Math.round(rect.right + gap);

    dock.style.right = "auto";
    if (left + width <= window.innerWidth - 8) {
      dock.style.top = Math.round(rect.top) + "px";
      dock.style.left = left + "px";
      dock.classList.remove("is-inside");
    } else {
      // 窄屏：手机铺满视口，没地方放外面了，贴到手机内部的右上角
      dock.style.top = Math.round(rect.top + gap) + "px";
      dock.style.left = Math.round(rect.right - width - gap) + "px";
      dock.classList.add("is-inside");
    }
    dock.classList.add("is-placed"); // 定位算完了，可以显示了
  }

  let dockFrame = 0;

  function scheduleDock() {
    if (dockFrame) return;
    dockFrame = requestAnimationFrame(() => {
      dockFrame = 0;
      positionDock();
    });
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

    // 有模态弹层开着（到期提醒、租期重叠确认等）→ 只标弹层里的锚点。
    // 弹层盖住整页时，后面那些区块既看不清也点不到，标了只会更乱
    const modal = activeModal(screenEl);

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
      if (modal && !modal.contains(el)) return;
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
      modal ? modal.className : "-",
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

  function bindTriggers() {
    // 切屏：app.js 的 showTab / showLoginView 是全局函数，包一层即可
    ["showTab", "showLoginView"].forEach((name) => {
      const original = window[name];
      if (typeof original !== "function") return;
      window[name] = function wrapped(...args) {
        const result = original.apply(this, args);
        state.sig = "";
        schedule();
        scheduleDock(); // 切屏后手机位置可能变（比如从首页切到全屏页）
        return result;
      };
    });

    // 屏内滚动 / 窗口尺寸变化（滚动不动工具条，只有尺寸变了才重算）
    document.addEventListener("scroll", schedule, true);
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
    }, 700);
  }

  /* ---------- 启动 ---------- */

  function start() {
    buildChrome();
    bindTriggers();
    // 等按钮渲染出来、手机量得出尺寸后再定位（要量宽高）
    scheduleDock();
    setTimeout(scheduleDock, 300);
    // 兜底：万一一直量不到手机，1.2s 后也让它显出来（回到 CSS 里的右上角）
    setTimeout(() => dock.classList.add("is-placed"), 1200);
    // 默认不开：点手机右上角的「注释」按钮才出现编号圆点
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
    const auth = document.body.dataset.auth;
    const modal = activeModal(screenEl);
    return ANNOTATIONS.map((item) => {
      const onScreen = item.screen === "*" || item.screen === screen;
      let status = "不在本屏";
      if (item.auth && item.auth !== auth) {
        status = `当前登录态（${auth}）不显示`;
      } else if (onScreen) {
        const el = screenEl && screenEl.querySelectorAll(item.anchor)[item.nth || 0];
        if (!screenEl) status = "找不到当前屏容器";
        else if (!el) status = item.screen === "*" ? "当前未出现（触发后才显示）" : "✗ 锚点未找到";
        else if (modal && !modal.contains(el)) status = "被弹层遮挡，未显示";
        else status = isVisible(el) ? "✓ 已挂上" : "锚点存在但当前状态不可见";
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
  // 工具条宽度变了（引导按钮显隐）→ 重算一次位置。guide.js 会调它。
  window.__devSyncDock = scheduleDock;
})();
