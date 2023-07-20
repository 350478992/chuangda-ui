import { ref as y } from "vue";
function O(a, o) {
  const f = y({}), I = () => new Promise((e, n) => {
    new BMap.Geocoder().getPoint(
      a.detailAddress,
      function(t) {
        t ? (f.value = t, e(t)) : (window.$Modal.error({
          title: "提示",
          content: "您选择的地址没有解析到结果!",
          width: 300
        }), n({}));
      },
      a.initCity
    );
  });
  let l = null;
  const P = (e) => {
    l = new BMap.Marker(e), o.value.addOverlay(l), l.addEventListener("click", function() {
      $(e);
    }), a.isFirstShowWin && $(e);
  }, B = (e) => "<div style='margin-bottom: 3px;border-bottom: 0.5px solid #5c6b77;'>路线导航</div><div><table style='line-height: 35px; font-size: 14px'><tr><td><div style='width:16px; height: 16px; background-color: #ed4014;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%; padding-left: 16px'></div></td><td>目的地址</td><td><input style='width: 230px; height: 25px' value='" + e + "' readonly></td></tr><tr><td><div style='width:16px; height: 16px; background-color: #19be6b;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%; padding-left: 16px'></div></td><td>当前位置</td><td><input id='suggestId' style='width: 230px; height: 25px' placeholder='请输入起点'><div id='searchResultPanel' style='border:5px solid #C0C0C0;width:150px;height:auto; display:none;'></div></td></tr></table></div><div style='text-align: center'><button id='walk' style='margin: 3px 10px; height: 22px;border: none;background-color: #2d8cf0;color: white;cursor: pointer;padding: 2px 5px;'>步行导航</button><button id='tran' style='margin: 3px 10px; height: 22px;border: none;background-color: #2d8cf0;color: white;cursor: pointer;padding: 2px 5px;'>公交导航</button><button id='drive' style='margin: 3px 10px; height: 23px;border: none;background-color: #2d8cf0;color: white;cursor: pointer;padding: 2px 5px;'>驾车导航</button></div></div>", $ = (e) => {
    const n = B(a.detailAddress), i = new BMap.InfoWindow(n);
    o.value.openInfoWindow(i, e);
    const t = new BMap.Autocomplete({
      input: "suggestId",
      location: o.value
    });
    t.addEventListener("onhighlight", function(r) {
      const { value: s, index: d } = r.toitem, { value: p, index: u } = r.fromitem, { province: w, city: b, district: x, street: v, business: m } = p, { province: M, city: A, district: C, street: L, business: R } = s;
      let g = u > -1 ? `${w}${b}${x}${v}${m}` : "", k = `FromItem<br />index=${u}<br />value=${g}`;
      g = d > -1 ? `${M}${A}${C}${L}${R}` : g, k += `<br />ToItem<br />index=${d}<br />value =${g}`;
      const W = document.getElementById("searchResultPanel");
      W.innerHTML = k;
    }), t.addEventListener("onconfirm", function(r) {
      const { value: s, index: d } = r.item, { province: p, city: u, district: w, street: b, business: x } = s, v = `${p}${u}${w}${b}${x}`;
      E(v);
      const m = document.getElementById("searchResultPanel");
      m.innerHTML = `onconfirm<br />index=${d}<br />myValue=${v}`;
    }), setTimeout(() => {
      const r = document.getElementById("walk"), s = document.getElementById("drive"), d = document.getElementById("tran");
      r && r.addEventListener("click", () => h("walk", e)), s && s.addEventListener("click", () => h("drive", e)), d && d.addEventListener("click", () => h("tran", e));
    }, 200);
  }, c = y({}), E = (e) => {
    const n = new BMap.LocalSearch(o.value, {
      onSearchComplete: () => {
        c.value = n.getResults().getPoi(0).point;
      }
    });
    n.search(e);
  }, h = (e, n) => {
    if (!c.value.lat || !c.value.lng)
      window.$Modal.warning({
        title: "提示",
        content: "请先输入起点!",
        width: 300
      });
    else {
      let i = null;
      const t = { map: o.value, autoViewport: !0 };
      e === "walk" ? i = new BMap.WalkingRoute(o.value, { renderOptions: t }) : e === "drive" ? i = new BMap.DrivingRoute(o.value, { renderOptions: t }) : e === "tran" && (i = new BMap.TransitRoute(o.value, { renderOptions: t })), i.search(c.value, n), l.setAnimation(BMAP_ANIMATION_BOUNCE);
    }
  };
  return {
    pointInit: async () => {
      if (!a.detailAddress)
        return window.$Message.warning("请先输入设备所在地地址");
      const e = await I();
      P(e);
    },
    usePoint: () => f.value
  };
}
export {
  O as default
};
