import c from "@/config";
function s() {
  const i = (n) => new Promise((t, p) => {
    if (window.BMap)
      t(window.BMap);
    else {
      window.onBMapCallback = () => {
        t(window.BMap);
      };
      const a = `api.map.baidu.com/api?v=2.0&ak=${n}&callback=onBMapCallback`;
      o(a, p);
    }
  }), e = (n) => new Promise((t, p) => {
    if (window.AMap)
      t(window.AMap);
    else {
      window.initAMap = () => {
        t(window.AMap);
      };
      const a = `webapi.amap.com/maps?v=1.3&callback=initAMap&key=${n}`;
      o(a, p);
    }
  }), o = (n, t) => {
    const p = c.isHttps ? "https" : "http";
    let a = document.createElement("script");
    a.type = "text/javascript", a.async = !0, a.src = `${p}://${n}`, a.onerror = t, document.head.appendChild(a);
  };
  return {
    loadBMap: i,
    loadAMap: e
  };
}
export {
  s as default
};
