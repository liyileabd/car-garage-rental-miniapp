/* ==========================================================================
   首页新手引导层 · guide.js
   --------------------------------------------------------------------------
   用「新手引导」的形式逐块讲首页：一步高亮一个模块，配一段用户视角的说明，
   点「下一步」挨着往下走。开发走一遍就知道每个模块是什么功能、要做什么。

   和原型完全解耦：不改 DOM 结构、不碰 app.js、不改任何原型内容。
   引导内容全部集中在下面「一、引导步骤配置」里，改文案只动那一段。

   怎么用：
     · 打开原型停在首页 → 引导自动开始，从第 1 块走到最后一块
     · 「下一步」推进，「上一步」回退，右上角「跳过」直接结束
     · 想重看：控制台执行 __guideStart()
   ========================================================================== */
(() => {
  "use strict";

  if (window.__guideLoaded) return;
  window.__guideLoaded = true;

  /* ========================================================================
     一、引导步骤配置  —— 改文案只动这一段
     ------------------------------------------------------------------------
     screen  必填  在哪一屏播放，值 = .phone-block 上的 data-screen
     anchor  必填  CSS 选择器，在该屏内部查找；找不到会自动跳过这一步
     body    必填  说明文字，支持 **加粗**，用 L(...) 手动分行
     ======================================================================== */

  const L = (...lines) => lines.join("\n");

  const STEPS = [
    {
      screen: "home",
      anchor: ".hero-banner",
      body: L(
        "这是**湖里国投月租车位**的服务入口 ——",
        "安商房小区的车位月租，都在这上面线上办理。"
      )
    },
    {
      screen: "home",
      anchor: ".home-login-card",
      body: L(
        "**还没登录**时看到的是这个 —— 点「**授权登录**」，",
        "登录之后才能办月租、看订单。"
      )
    },
    {
      screen: "home",
      anchor: ".rent-card",
      body: L(
        "**我的月租**：你当前在租的车位 ——",
        "车牌、小区、还剩多少天、什么时候到期，都在这儿。",
        "",
        "快到期时点右边的「**续费**」，直接接着租。"
      )
    },
    {
      screen: "home",
      anchor: ".service-card",
      body: L(
        "三个常用入口：",
        "· **月租办理** —— 新办或续租车位",
        "· **车辆管理** —— 添加 / 删除车牌",
        "· **订单记录** —— 查每次缴费记录"
      )
    },
    {
      screen: "home",
      anchor: ".home-ad-slot",
      body: L(
        "广告位，现在空着 ——",
        "之后可以放运营活动或者通知。"
      )
    },
    {
      screen: "home",
      anchor: ".tabbar",
      body: L(
        "底部两个主页面：**首页**（当前）和**个人中心** ——",
        "资料、发票这些都在个人中心里。"
      )
    }
  ];

  /* ========================================================================
     二、以下为引擎，正常不需要改
     ======================================================================== */

  const TIP_W = 272;   // 气泡宽度，与 CSS 保持一致
  const GAP = 14;      // 气泡与高亮圈之间的距离
  const EDGE = 12;     // 距视口边缘的留白
  const PAD = 6;       // 高亮圈比目标元素外扩的像素

  const state = { on: false, index: 0, steps: [] };

  let layer, ring, tip;

  /* ---------- 小工具 ---------- */

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"]/g, (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])
    );

  const fmt = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

  const activeScreen = () => document.body.dataset.currentTab;

  const screenEl = () => document.querySelector(".phone-block.is-active");

  /* ---------- 找锚点 ---------- */

  function findTarget(step) {
    const root = screenEl();
    if (!root) return null;
    let el;
    try {
      el = root.querySelector(step.anchor);
    } catch (error) {
      return null;
    }
    return el && el.getClientRects().length ? el : null;
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
      const btn = event.target.closest("button");
      if (!btn) return;
      if (btn.dataset.gdPrev !== undefined) go(-1);
      else if (btn.dataset.gdNext !== undefined) go(1);
      else if (btn.dataset.gdSkip !== undefined) stop();
    });

    document.addEventListener("keydown", (event) => {
      if (!state.on) return;
      if (event.key === "Escape") stop();
      else if (event.key === "ArrowRight" || event.key === "Enter") go(1);
      else if (event.key === "ArrowLeft") go(-1);
    });
  }

  /* ---------- 定位 ---------- */

  // 目标不在视口里就先滚过去（已经看得见就不动，避免页面乱跳）
  function ensureVisible(el) {
    const r = el.getBoundingClientRect();
    const top = 70;
    const bottom = window.innerHeight - 70;
    if (r.top < top || r.bottom > bottom) {
      el.scrollIntoView({ block: "center" });
      return true;
    }
    return false;
  }

  function paint(el, step) {
    const r = el.getBoundingClientRect();

    ring.style.left = `${Math.round(r.left - PAD)}px`;
    ring.style.top = `${Math.round(r.top - PAD)}px`;
    ring.style.width = `${Math.round(r.width + PAD * 2)}px`;
    ring.style.height = `${Math.round(r.height + PAD * 2)}px`;

    const last = state.index === state.steps.length - 1;
    tip.innerHTML =
      '<div class="gd-tip__head">' +
      `<span class="gd-tip__no">${state.index + 1}</span>` +
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
    let y = r.bottom + PAD + GAP;
    if (y + tipH > window.innerHeight - EDGE) y = r.top - PAD - GAP - tipH;
    y = Math.max(EDGE, Math.min(y, window.innerHeight - tipH - EDGE));

    let x = r.left;
    x = Math.max(EDGE, Math.min(x, window.innerWidth - tipW - EDGE));

    tip.style.left = `${Math.round(x)}px`;
    tip.style.top = `${Math.round(y)}px`;
  }

  /* ---------- 流程 ---------- */

  function render() {
    const step = state.steps[state.index];
    if (!step) return stop();

    const el = findTarget(step);
    if (!el) {
      // 这一步在当前页面状态下看不到（未登录 / 元素被隐藏），直接跳过
      state.index += 1;
      return render();
    }

    if (ensureVisible(el)) {
      // 滚动需要时间，等布局稳定再量
      setTimeout(() => paint(el, step), 280);
    } else {
      requestAnimationFrame(() => paint(el, step));
    }
  }

  function go(delta) {
    const nextIndex = state.index + delta;
    if (!state.on) return;
    if (nextIndex < 0) return;
    if (nextIndex >= state.steps.length) return stop();
    state.index = nextIndex;
    render();
  }

  function start() {
    if (state.on) return;
    // 只保留当前屏「看得见」的模块：未登录就没有「我的月租」，
    // 登录后就没有「授权登录」卡 —— 序号跟着重新连续编号
    const steps = STEPS.filter(
      (step) => step.screen === activeScreen() && findTarget(step)
    );
    if (!steps.length) return;
    state.steps = steps;
    state.index = 0;
    state.on = true;
    layer.hidden = false;
    document.body.classList.add("gd-on"); // 引导期间藏起标注开关
    render();
  }

  function stop() {
    state.on = false;
    if (layer) layer.hidden = true;
    document.body.classList.remove("gd-on");
  }

  /* ---------- 重定位触发 ---------- */

  function bind() {
    // 切屏：切走就收起，切回首页重新播放
    ["showTab", "showLoginView"].forEach((name) => {
      const original = window[name];
      if (typeof original !== "function") return;
      window[name] = function wrapped(...args) {
        const result = original.apply(this, args);
        if (state.on) {
          const visible = STEPS.filter(
            (step) => step.screen === activeScreen() && findTarget(step)
          );
          if (!visible.length) stop();
          else {
            state.steps = visible;
            state.index = Math.min(state.index, visible.length - 1);
            render();
          }
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
    bind();
    start(); // 停在首页就直接开演
  }

  (function whenReady() {
    const ready = document.body.dataset.ready;
    if (ready === "true") return boot();
    if (ready === "error") return;
    setTimeout(whenReady, 60);
  })();

  /* ---------- 手动重播 ---------- */

  window.__guideStart = () => {
    stop();
    start();
  };
  window.__guideSteps = () => STEPS;
})();
