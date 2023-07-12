import { defineComponent as h, ref as A, onMounted as N, reactive as O, inject as b, resolveComponent as c, openBlock as y, createElementBlock as C, createVNode as a, withCtx as i, unref as n, createTextVNode as d, toDisplayString as x, createCommentVNode as T, createElementVNode as j, normalizeStyle as z } from "vue";
import { CdSelect as H } from "../../../basic/CdSelect/index.mjs";
import L from "../useMapLoad.mjs";
import R from "./usePointShow.mjs";
import $ from "./usePointMultipleShow.mjs";
import U from "./usePointDrawShow.mjs";
const W = { class: "cd-map" }, F = {
  key: 0,
  class: "cd-map-search"
}, G = h({ name: "BdMap" }), ee = /* @__PURE__ */ h({
  ...G,
  props: {
    initCity: {},
    detailAddress: {},
    zoom: {},
    mapHeight: {},
    isFirstShowWin: { type: Boolean },
    multipointMarker: { type: Boolean },
    multipointMarkerInfoShow: { type: Boolean },
    multipointMarkerList: {},
    isDrawMarker: { type: Boolean },
    cityParentCode: {},
    getDrawAreaEquips: { type: Function }
  },
  setup(_, { expose: f }) {
    const e = _, w = (Date.now() + Math.random()).toString(), m = `BMap-${parseInt(w)}`, { loadBMap: M } = L();
    let t = A();
    const k = async () => {
      await M("iALbGbliO726jRgYKfYWum3a").catch(
        (l) => Promise.reject(`地图加载失败:${l}`)
      ), t.value = new BMap.Map(m), t.value.addControl(
        // 右上角，添加默认缩放平移控件
        new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_RIGHT
        })
      ), t.value.centerAndZoom(e.initCity, e.zoom), t.value.enableScrollWheelZoom(!0), setTimeout(() => {
        e.multipointMarker ? g() : e.isDrawMarker ? u() : S();
      }, 500);
    };
    N(() => {
      k();
    });
    const { pointInit: S, usePoint: B } = R(e, t), g = $(e, t), o = O({
      cityCode: "650100",
      cityName: "乌鲁木齐市",
      address: "",
      // 详细地址
      editingState: !1,
      //是否开启图形绘制
      circleRadius: 500,
      // 圆半径
      equipList: []
      // 设备列表
    }), v = b("drawEquipSelect"), {
      onCityChange: I,
      onCitySearch: u,
      onEquipAdd: P,
      onUpdateEquipDraw: V,
      onEquipDrawSearch: D
    } = U(e, t, o, v);
    return f({ usePoint: B }), (l, r) => {
      const E = c("Icon"), q = c("Input"), s = c("Button");
      return y(), C("div", W, [
        e.isDrawMarker ? (y(), C("div", F, [
          a(q, {
            class: "cd-map-search-input",
            modelValue: o.address,
            "onUpdate:modelValue": r[1] || (r[1] = (p) => o.address = p)
          }, {
            prepend: i(() => [
              a(n(H), {
                class: "city-select",
                modelValue: o.cityCode,
                "onUpdate:modelValue": r[0] || (r[0] = (p) => o.cityCode = p),
                type: "sys_area",
                "p-val": e.cityParentCode,
                onOnChange: n(I)
              }, null, 8, ["modelValue", "p-val", "onOnChange"])
            ]),
            append: i(() => [
              a(E, {
                class: "city-search",
                type: "ios-search",
                size: "22",
                onClick: n(u)
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          a(s, {
            class: "ml10",
            type: "primary",
            onClick: n(V)
          }, {
            default: i(() => [
              d(x(o.editingState ? "关闭" : "开启") + "绘制设备 ", 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          a(s, {
            class: "ml10",
            type: "primary",
            onClick: n(D)
          }, {
            default: i(() => [
              d(" 搜索绘制设备 ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          a(s, {
            class: "ml10",
            type: "primary",
            onClick: n(P)
          }, {
            default: i(() => [
              d(" 添加绘制设备 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])) : T("", !0),
        j("div", {
          class: "cd-map-box",
          id: m,
          style: z(`height: ${l.mapHeight};`)
        }, null, 4)
      ]);
    };
  }
});
export {
  ee as default
};
