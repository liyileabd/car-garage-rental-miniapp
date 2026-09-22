/* ==========================================================================
   办理流程引导层 · guide.js
   --------------------------------------------------------------------------
   用「新手引导」的形式带人走一遍完整业务流：一步一屏，跨页面往下走。
   高亮当前该操作的地方，配一段用户视角的说明，点「下一步」继续；
   关键跳转步骤支持「点了目标元素就自动前进」，不用再点按钮。

   现在有多个流程（人类 2026-09-22 要求：不能只叫「引导」，得是「xx引导」）：
   工具条上的按钮叫「流程引导」，点开是一份菜单，一条一个流程。
   加流程就往 GUIDES 里加一项，菜单会自动多一条。

   和原型完全解耦：不改 DOM 结构、不碰 app.js 内容、不改任何原型样式。
   引导内容全部集中在下面「一、流程配置」里，改文案只动那一段。

   怎么用：
     · 点手机右上角的「流程引导」→ 选一个流程才开始（默认不自动播）
     · 「下一步」推进，「上一步」回退，右上角「跳过」直接结束
     · 播放中按钮变成「结束引导」，再点一次就收起
     · 想重看：控制台执行 __guideStart("rent") / __guideStart("vehicle")
   ========================================================================== */
(() => {
  "use strict";

  if (window.__guideLoaded) return;
  window.__guideLoaded = true;

  /* ========================================================================
     一、流程配置  —— 改文案只动这一段
     ------------------------------------------------------------------------
     id     给 __guideStart() 用的短名
     name   菜单和气泡上显示的名字，写成「xx引导」
     steps  步骤数组，字段如下：

       screen   必填  这一步在哪一屏，值 = .phone-block 上的 data-screen。
                      和当前屏不一致时会自动切过去，所以流程可以跨页面。
       anchor   必填  CSS 选择器（在该屏内部查找），这一步就是高亮它。
       body     必填  说明文字，支持 **加粗**，用 L(...) 手动分行。
       waitFor  选填  CSS 选择器。用户点了它（通常就是"继续下一步"的那个按钮）
                      就自动前进，不用再去点气泡上的「下一步」。

     注 1：一步一屏，screen 和当前屏不一致时会自动切过去，所以流程能跨页面。
     注 2：某一步的锚点在当前屏找不到时，这一步会自动跳过。
     注 3：只在特定条件下才出现的屏（比如"补全办理资料"）不单独列成一步，
           写进相邻步骤的说明里，免得把人带到一屏本来不会经过的页面。
     注 4：waitFor 只挂在「点了必然往下走」的元素上（选小区、新增车辆这类）。
           「保存车辆」要校验，失败时停在原地不动更对，所以那步不挂 waitFor
           —— 切屏钩子会在真正保存成功后把引导带到下一步。
     ======================================================================== */

  const L = (...lines) => lines.join("\n");

  const GUIDES = [
    /* ---------------- 月租办理 ---------------- */
    {
      id: "rent",
      name: "月租办理引导",
      steps: [
        {
          screen: "home",
          anchor: ".shortcut[data-rent-flow-action]",
          waitFor: "[data-rent-flow-action]",
          body: L("办月租从这儿进 —— 点「**月租办理**」。")
        },
        {
          screen: "rentFlow",
          anchor: "[data-rent-garage-list]",
          body: L(
            "**第 1 步 · 选小区**",
            "在下面列表里挑一个小区，点卡片上的「选择」。",
            "（首次办理会先让你补姓名、手机号、身份证号。）"
          )
        },
        {
          screen: "rentVehicle",
          anchor: ".rent-form-card",
          body: L(
            "**第 2 步 · 车辆与租期**",
            "",
            "点「请选择车辆」挑车牌（最多 2 辆），",
            "再选开始日期和租几个月，费用会实时算出来。"
          )
        },
        {
          screen: "rentNotice",
          anchor: ".notice-footer",
          body: L(
            "**签办理告知书**",
            "",
            "3 份（月租办理 / 物业管理 / 服务告知书）左右翻页看完，",
            "勾选「我已阅读并同意」，等 5 秒倒计时结束才能继续。"
          )
        },
        {
          screen: "rentConfirm",
          anchor: ".rent-flow-bottom",
          body: L(
            "**第 3 步 · 确认支付**",
            "",
            "核对小区、车辆、起止日期和金额 ——",
            "没问题点「确认支付」，走微信支付。"
          )
        },
        {
          screen: "home",
          anchor: ".rent-card",
          body: L(
            "**支付成功回到首页**，月租卡就更新了",
            "",
            "车牌、小区、还剩多少天、什么时候到期都在这。",
            "这时还会问你「要不要开启续费提醒」。"
          )
        }
      ]
    },

    /* ---------------- 绑定车辆 ---------------- */
    {
      id: "vehicle",
      name: "绑定车辆引导",
      steps: [
        {
          screen: "home",
          anchor: ".shortcut[data-vehicle-manage-action]",
          waitFor: "[data-vehicle-manage-action]",
          body: L("绑车从这儿进 —— 点「**车辆管理**」。")
        },
        {
          screen: "vehicleManage",
          anchor: ".vehicle-add-footer",
          waitFor: "[data-open-vehicle-form]",
          body: L(
            "**第 1 步 · 看已有车辆**",
            "上面这个列表是本账号登记的全部车辆，每张卡是一辆车。",
            "点「**新增车辆**」开始绑一辆新的。"
          )
        },
        {
          screen: "vehicleForm",
          anchor: ".plate-input-shell",
          body: L(
            "**第 2 步 · 填车牌号**",
            "先点省份简称和地区字母，再用下面的车牌键盘填后续号码；",
            "普通车牌 5 位、新能源 6 位，填完点键盘上的「完成」。"
          )
        },
        {
          screen: "vehicleForm",
          anchor: "[data-open-plate-color-sheet]",
          body: L(
            "**选车牌颜色**",
            "蓝牌 / 黄牌 / 新能源 / 黑牌 / 白牌 ——",
            "要和车牌本身一致，颜色不对会影响进出场识别。"
          )
        },
        {
          screen: "vehicleForm",
          anchor: ".vehicle-choice-grid",
          body: L(
            "**车辆大小类型** 按行驶证选（小型车 / 中型车 / 大型车）。",
            "下面的外观颜色、车辆照片（最多 6 张）都是选填。"
          )
        },
        {
          screen: "vehicleForm",
          anchor: "[data-save-vehicle]",
          body: L(
            "**第 3 步 · 保存车辆**",
            "车牌已被其他账号绑定的，这里会拦下来并提示联系客服。",
            "保存成功回到车辆管理，新车排在列表最前面。"
          )
        },
        {
          screen: "vehicleManage",
          anchor: "[data-vehicle-list]",
          body: L(
            "**绑定完成**，新车已经在列表里了。",
            "这辆车一旦关联了月租且在生效期内，就不能再修改或解绑。"
          )
        }
      ]
    }
  ];

  /* ========================================================================
     二、以下为引擎，正常不需要改
     ======================================================================== */

  const TIP_W = 272;   // 气泡宽度，与 CSS 保持一致
  const GAP = 14;      // 气泡与高亮圈之间的距离
  const EDGE = 12;     // 距视口边缘的留白
  const PAD = 6;       // 高亮圈比目标元素外扩的像素

  const state = { on: false, index: 0, steps: [], navigating: false, flowId: GUIDES[0].id };

  let layer, ring, tip, btn, labelEl, waitHandler, menu, dock;

  // 当前正在播 / 上一次播的流程
  const currentGuide = () => GUIDES.find((guide) => guide.id === state.flowId) || GUIDES[0];

  /* ---------- 小工具 ---------- */

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"]/g, (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])
    );

  const fmt = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

  const activeScreen = () => document.body.dataset.currentTab;

  const screenEl = () => document.querySelector(".phone-block.is-active");

  /* ---------- 找锚点 ---------- */

  // 同一个选择器在一屏里可能命中多个（比如首页有两个办理入口），
  // 取第一个「真正看得见」的，别被隐藏的那份带偏。
  function findTarget(step) {
    const root = screenEl();
    if (!root) return null;
    let list;
    try {
      list = root.querySelectorAll(step.anchor);
    } catch (error) {
      return null;
    }
    for (const el of list) {
      if (el.getClientRects().length) return el;
    }
    return null;
  }

  /* ---------- 建 UI ---------- */

  function build() {
    layer = document.createElement("div");
    layer.className = "gd-layer";
    layer.hidden = true;

    ring = document.createElement("div");
    ring.className = "gd-ring";

    tip = document.createElement("div");
    tip.className = "gd-tip";

    layer.appendChild(ring);
    layer.appendChild(tip);
    document.body.appendChild(layer);

    // 事件委托：上一步 / 下一步 / 跳过
    tip.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.gdPrev !== undefined) go(-1);
      else if (button.dataset.gdNext !== undefined) go(1);
      else if (button.dataset.gdSkip !== undefined) stop();
    });

    document.addEventListener("keydown", (event) => {
      if (!state.on) return;
      if (event.key === "Escape") stop();
      else if (event.key === "ArrowRight" || event.key === "Enter") go(1);
      else if (event.key === "ArrowLeft") go(-1);
    });
  }

  /* ---------- 触发按钮 + 流程菜单 ---------- */

  // 挂到手机右上角外侧的工具条里，和「注释」按钮并排。
  // 按钮本身不开播 —— 点开菜单让用户挑走哪个流程
  function mountButton() {
    dock = document.querySelector(".dev-dock");
    if (!dock) {
      // 万一标注层没建出工具条，自己补一个，保证按钮一定在
      dock = document.createElement("div");
      dock.className = "dev-dock";
      document.body.appendChild(dock);
    }

    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dev-btn dev-btn--guide";
    btn.title = "选择要播放的流程引导";
    btn.innerHTML =
      '<span class="dev-btn__play"></span>' +
      '<span class="dev-btn__label">流程引导</span>' +
      '<span class="dev-btn__caret"></span>';
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // 别让下面的关菜单监听顺手关掉
      if (state.on) {
        stop();
        return;
      }
      toggleMenu();
    });
    dock.appendChild(btn);
    labelEl = btn.querySelector(".dev-btn__label");

    menu = document.createElement("div");
    menu.className = "gd-menu";
    menu.hidden = true;
    menu.addEventListener("click", (event) => {
      const item = event.target.closest("[data-gd-flow]");
      if (!item) return;
      closeMenu();
      start(item.dataset.gdFlow);
    });
    renderMenu();
    dock.appendChild(menu);

    // 点别处关菜单
    document.addEventListener("click", (event) => {
      if (menu.hidden) return;
      if (event.target.closest && event.target.closest(".gd-menu")) return;
      closeMenu();
    });
  }

  // 一条流程一行：名字 + 步数
  function renderMenu() {
    menu.innerHTML = GUIDES.map((guide) => {
      return (
        `<button class="gd-menu__item" type="button" data-gd-flow="${esc(guide.id)}">` +
        `<span class="gd-menu__name">${esc(guide.name)}</span>` +
        `<span class="gd-menu__count">${guide.steps.length} 步</span>` +
        "</button>"
      );
    }).join("");
  }

  function toggleMenu() {
    if (menu.hidden) {
      menu.hidden = false;
      btn.classList.add("is-menu");
    } else {
      closeMenu();
    }
  }

  function closeMenu() {
    if (menu) menu.hidden = true;
    if (btn) btn.classList.remove("is-menu");
  }

  // 按钮跟着播放状态走：没播叫「流程引导」，播着叫「结束引导」
  // 另外：引导演示的是「登录后的流程」，未登录（guest）时整个入口不出现 ——
  // 未登录点这些入口会被 ensureAuthenticated() 拦到登录页，流程走不下去
  function syncBtn() {
    if (!btn) return;
    const show = document.body.dataset.auth === "authed";
    if (btn.hidden !== !show) {
      btn.hidden = !show;
      if (!show) {
        if (state.on) stop();
        closeMenu();
      }
      // 按钮显隐会改变工具条宽度，位置要重算一次
      if (typeof window.__devSyncDock === "function") window.__devSyncDock();
    }
    btn.classList.toggle("is-on", state.on);
    btn.title = state.on ? "结束当前引导" : "选择要播放的流程引导";
    if (labelEl) labelEl.textContent = state.on ? "结束引导" : "流程引导";
  }

  /* ---------- 定位 ---------- */

  // 目标不在视口里就先滚过去（已经看得见就不动，避免页面乱跳）
  function ensureVisible(el) {
    const rect = el.getBoundingClientRect();
    const top = 70;
    const bottom = window.innerHeight - 70;
    if (rect.top < top || rect.bottom > bottom) {
      el.scrollIntoView({ block: "center" });
      return true;
    }
    return false;
  }

  function paint(el, step) {
    const rect = el.getBoundingClientRect();

    ring.style.left = `${Math.round(rect.left - PAD)}px`;
    ring.style.top = `${Math.round(rect.top - PAD)}px`;
    ring.style.width = `${Math.round(rect.width + PAD * 2)}px`;
    ring.style.height = `${Math.round(rect.height + PAD * 2)}px`;

    const last = state.index === state.steps.length - 1;
    tip.innerHTML =
      '<div class="gd-tip__head">' +
      `<span class="gd-tip__no">${state.index + 1}</span>` +
      `<span class="gd-tip__flow">${esc(currentGuide().name)}</span>` +
      '<button class="gd-tip__skip" type="button" data-gd-skip>跳过</button>' +
      "</div>" +
      `<div class="gd-tip__body">${fmt(step.body)}</div>` +
      '<div class="gd-tip__foot">' +
      `<span class="gd-tip__count">${state.index + 1} / ${state.steps.length}</span>` +
      '<div class="gd-tip__btns">' +
      (state.index > 0
        ? '<button class="gd-btn gd-btn--ghost" type="button" data-gd-prev>上一步</button>'
        : "") +
      `<button class="gd-btn gd-btn--primary" type="button" data-gd-next>${
        last ? "完成" : "下一步"
      }</button>` +
      "</div></div>";

    const tipH = tip.offsetHeight;
    const tipW = Math.min(TIP_W, window.innerWidth - EDGE * 2);

    // 优先放目标下方，放不下就翻到上方
    let y = rect.bottom + PAD + GAP;
    if (y + tipH > window.innerHeight - EDGE) y = rect.top - PAD - GAP - tipH;
    y = Math.max(EDGE, Math.min(y, window.innerHeight - tipH - EDGE));

    let x = rect.left;
    x = Math.max(EDGE, Math.min(x, window.innerWidth - tipW - EDGE));

    tip.style.left = `${Math.round(x)}px`;
    tip.style.top = `${Math.round(y)}px`;
  }

  /* ---------- 跨屏 ---------- */

  // 切到指定屏。切不过去返回 false（这一步就会跳过）
  function showScreen(name) {
    if (activeScreen() === name) return true;
    if (typeof window.showTab !== "function") return false;
    state.navigating = true; // 告诉切屏钩子：这次是引导自己切的，别打断
    window.showTab(name);
    state.navigating = false;
    return activeScreen() === name;
  }

  /* ---------- 点了高亮处就自动前进 ---------- */

  function unbindWaitFor() {
    if (!waitHandler) return;
    document.removeEventListener("click", waitHandler, true);
    waitHandler = null;
  }

  function bindWaitFor(step) {
    unbindWaitFor();
    if (!step.waitFor) return;
    waitHandler = (event) => {
      if (!event.target.closest || !event.target.closest(step.waitFor)) return;
      unbindWaitFor();
      const from = state.index;
      // 先让原型自己的点击处理跑完（切屏、写状态），再推进。
      // 如果切屏钩子已经把进度带到下一步了（state.index 变了），就不再重复推。
      setTimeout(() => {
        if (state.on && state.index === from) go(1);
      }, 260);
    };
    document.addEventListener("click", waitHandler, true);
  }

  /* ---------- 流程 ---------- */

  // 这一步在当前屏看不到（比如资料已全，不用补录）—— 跳过去
  function skip() {
    state.index += 1;
    if (state.index >= state.steps.length) return stop();
    render();
  }

  function render() {
    const step = state.steps[state.index];
    if (!step) return stop();

    // 这一步在别的屏 —— 先把屏切过去
    if (step.screen !== activeScreen()) {
      if (!showScreen(step.screen)) return skip();
      requestAnimationFrame(() => render());
      return;
    }

    const el = findTarget(step);
    if (!el) return skip();

    bindWaitFor(step);

    if (ensureVisible(el)) {
      // 滚动需要时间，等布局稳定再量
      setTimeout(() => paint(el, step), 280);
    } else {
      requestAnimationFrame(() => paint(el, step));
    }
  }

  function go(delta) {
    if (!state.on) return;
    const next = state.index + delta;
    if (next < 0) return;
    if (next >= state.steps.length) return stop();
    state.index = next;
    render();
  }

  function play(flowId) {
    if (state.on) return stop();
    start(flowId);
  }

  function start(flowId) {
    if (state.on) return false;
    const guide = GUIDES.find((item) => item.id === flowId) || currentGuide();
    if (!guide || !guide.steps.length) return false;

    state.flowId = guide.id;
    state.steps = guide.steps.slice();
    state.index = 0;
    state.on = true;
    closeMenu();
    layer.hidden = false;
    document.body.classList.add("gd-on"); // 引导期间把「注释」按钮让出来
    // 两个浮层不叠加：开引导时先把注释收起来
    if (typeof window.__devAnnOff === "function") window.__devAnnOff();
    syncBtn();
    render();
    return true;
  }

  function stop() {
    state.on = false;
    unbindWaitFor();
    if (layer) layer.hidden = true;
    document.body.classList.remove("gd-on");
    syncBtn();
  }

  /* ---------- 重定位触发 ---------- */

  function bind() {
    // 用户自己切屏：切到流程里的某一步就跟着跳过去，切到流程外就结束引导
    ["showTab", "showLoginView"].forEach((name) => {
      const original = window[name];
      if (typeof original !== "function") return;
      window[name] = function wrapped(...args) {
        const result = original.apply(this, args);
        if (!state.on || state.navigating) return result; // 引导自己切的屏，交给 render
        const index = state.steps.findIndex((step) => step.screen === activeScreen());
        if (index < 0) {
          stop();
        } else {
          state.index = index;
          render();
        }
        return result;
      };
    });

    window.addEventListener("resize", () => {
      if (state.on) render();
    });

    document.addEventListener("scroll", () => {
      if (state.on) {
        const step = state.steps[state.index];
        const el = step && findTarget(step);
        if (el) paint(el, step);
      }
    }, true);
  }

  /* ---------- 启动 ---------- */

  function boot() {
    build();
    mountButton();
    syncBtn(); // 按当前登录态决定引导入口出不出现（未登录时不出现）
    bind();
    // 默认不自动播放：点右上角工具条里的「流程引导」，再挑一个流程
  }

  (function whenReady() {
    const ready = document.body.dataset.ready;
    if (ready === "true") return boot();
    if (ready === "error") return;
    setTimeout(whenReady, 60);
  })();

  /* ---------- 手动重播 ---------- */

  // __guideStart("rent") / __guideStart("vehicle")；不传就播上一次那个
  window.__guideStart = (flowId) => {
    // 未登录不给播：流程第一步就会撞上登录拦截
    if (document.body.dataset.auth !== "authed") return false;
    stop();
    return start(flowId || state.flowId);
  };
  window.__guideList = () => GUIDES.map((guide) => ({
    id: guide.id,
    name: guide.name,
    steps: guide.steps.length
  }));
  window.__guideSteps = () => currentGuide().steps;
  // 给注释层用：工具条巡检时顺手同步一次入口显隐（登录态可能变了）
  window.__guideSyncBtn = syncBtn;
})();
