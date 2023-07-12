import { defineComponent as p, ref as d, onMounted as w, openBlock as A, createElementBlock as h, createElementVNode as b, normalizeStyle as y } from "vue";
import _ from "../useMapLoad.mjs";
const P = { class: "cd-map" }, k = p({ name: "GdMap" }), z = /* @__PURE__ */ p({
  ...k,
  props: {
    initCity: String,
    detailAddress: String,
    zoom: Number,
    mapHeight: String
  },
  setup(s, { expose: l }) {
    const a = s, u = (Date.now() + Math.random()).toString(), r = `BMap-${parseInt(u)}`, { loadAMap: m } = _();
    let n = d();
    const t = d([]), f = async () => {
      t.value = await M(), await m("64b450eb5cc56e7d6480c1fac7bd19e0").catch(
        (e) => Promise.reject(`地图加载失败:${e}`)
      ), n.value = new AMap.Map(r, {
        resizeEnable: !0,
        zoom: a.zoom,
        center: t.value
      }), n.value.plugin(["AMap.ToolBar"], function() {
        const e = new AMap.ToolBar();
        n.value.addControl(e);
      });
      const o = new AMap.Marker({
        position: t.value,
        title: a.detailAddress
      });
      n.value.add(o), AMap.event.addListener(o, "click", function() {
        const e = [a.detailAddress];
        new AMap.InfoWindow({
          content: e.join("<br/>")
          //使用默认信息窗体框样式，显示信息内容
        }).open(
          n.value,
          new AMap.LngLat(t.value[0], t.value[1])
        );
      });
    };
    w(() => {
      f();
    });
    const M = () => new Promise((o) => {
      const e = new XMLHttpRequest(), c = `http://restapi.amap.com/v3/geocode/geo?key=64b450eb5cc56e7d6480c1fac7bd19e0&address=${encodeURIComponent(
        a.detailAddress
      )}`;
      e.open("GET", c, !0), e.responseType = "json", e.send(), e.onreadystatechange = function() {
        if (e.readyState == 4 && e.status == 200) {
          const i = e.response;
          if (i.status === "1") {
            const { geocodes: v } = i, g = v[0].location.split(",");
            o(g);
          } else
            return Promise.reject("地址解析失败");
        }
      };
    });
    return l({ usePoint: () => t.value }), (o, e) => (A(), h("div", P, [
      b("div", {
        class: "cd-map-box",
        id: r,
        style: y(`height: ${s.mapHeight};`)
      }, null, 4)
    ]));
  }
});
export {
  z as default
};
