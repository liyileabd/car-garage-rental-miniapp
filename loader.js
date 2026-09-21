(() => {
  const version = "prototype-v29";
  const pageFiles = [
    "pages/login/index.html",
    "pages/home/index.html",
    "pages/rent/index.html",
    "pages/vehicles/index.html",
    "pages/orders/index.html",
    "pages/profile/index.html"
  ];

  async function loadText(path, attempt = 0) {
    try {
      const response = await fetch(path + "?v=" + version, { cache: "no-store" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.text();
    } catch (error) {
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 120 * (attempt + 1)));
        return loadText(path, attempt + 1);
      }
      throw new Error("无法加载 " + path + "：" + error.message);
    }
  }

  async function boot() {
    const [icons, ...pages] = await Promise.all([
      loadText("components/icons.html"),
      ...pageFiles.map((path) => loadText(path))
    ]);

    document.body.insertAdjacentHTML("afterbegin", icons);
    document.querySelector("#screen-pages").innerHTML = pages.join("\n");

    const script = document.createElement("script");
    script.src = "app.js?v=" + version;
    script.onload = () => {
      document.body.dataset.ready = "true";
    };
    script.onerror = () => {
      throw new Error("无法加载 app.js");
    };
    document.body.appendChild(script);
  }

  boot().catch((error) => {
    document.body.dataset.ready = "error";
    const message = document.querySelector(".load-error");
    if (message) {
      message.textContent = "页面加载失败，请刷新后重试";
    } else {
      document.querySelector("#app")?.insertAdjacentHTML(
        "beforeend",
        '<p class="load-error">页面加载失败，请刷新后重试</p>'
      );
    }
    console.error("[prototype-loader]", error);
  });
})();
