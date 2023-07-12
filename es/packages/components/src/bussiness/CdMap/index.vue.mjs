import { defineComponent as y, computed as m, ref as f, provide as C, resolveComponent as h, openBlock as i, createBlock as o, unref as _, withCtx as a, createTextVNode as c, createCommentVNode as S, createVNode as A } from "vue";
import "./style/index.css";
import { CdModal as B } from "../../basic/CdModal/index.mjs";
import D from "./BdMap/index.vue.mjs";
import V from "./GdMap/index.vue.mjs";
const v = y({ name: "CdMap" }), x = /* @__PURE__ */ y({
  ...v,
  props: {
    modelValue: Boolean,
    mapType: {
      type: String,
      default: "BAIDU"
    },
    initCity: {
      type: String,
      default: "宁波"
    },
    detailAddress: {
      type: String,
      default: "宁波市"
    },
    zoom: {
      type: Number,
      default: 15
    },
    mapHeight: {
      type: String,
      default: "450px"
    },
    isFirstShowWin: {
      type: Boolean,
      default: !0
    },
    multipointMarker: Boolean,
    multipointMarkerInfoShow: Boolean,
    multipointMarkerList: {
      type: Array,
      default: () => []
    },
    isDrawMarker: Boolean,
    cityParentCode: {
      type: String,
      default: "650000"
    },
    getDrawAreaEquips: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: [
    "update:modelValue",
    "get-map-geo",
    "draw-equip-select"
  ],
  setup(k, { emit: r }) {
    const e = k, n = m({
      get: () => e.modelValue,
      set: () => r("update:modelValue")
    }), p = () => {
      n.value = !1;
    }, M = m(
      () => !e.multipointMarker && !e.isDrawMarker
    ), l = f(), d = f(), g = () => {
      let t = [];
      l.value ? t = l.value.usePoint() : t = d.value.usePoint(), r("get-map-geo", t), p();
    };
    return C("drawEquipSelect", (t) => {
      r("draw-equip-select", t);
    }), (t, u) => {
      const s = h("Button");
      return i(), o(_(B), {
        class: "cd-unit-list",
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (w) => n.value = w),
        title: "地图",
        width: "800"
      }, {
        footer: a(() => [
          M.value ? (i(), o(s, {
            key: 0,
            type: "primary",
            onClick: g
          }, {
            default: a(() => [
              c(" 获取坐标 ")
            ]),
            _: 1
          })) : S("", !0),
          A(s, { onClick: p }, {
            default: a(() => [
              c("关闭")
            ]),
            _: 1
          })
        ]),
        default: a(() => [
          e.mapType === "BAIDU" ? (i(), o(D, {
            key: 0,
            ref_key: "bdMapRef",
            ref: l,
            initCity: e.initCity,
            detailAddress: e.detailAddress,
            zoom: e.zoom,
            mapHeight: e.mapHeight,
            isFirstShowWin: e.isFirstShowWin,
            multipointMarker: e.multipointMarker,
            multipointMarkerInfoShow: e.multipointMarkerInfoShow,
            multipointMarkerList: e.multipointMarkerList,
            isDrawMarker: e.isDrawMarker,
            cityParentCode: e.cityParentCode,
            getDrawAreaEquips: e.getDrawAreaEquips
          }, null, 8, ["initCity", "detailAddress", "zoom", "mapHeight", "isFirstShowWin", "multipointMarker", "multipointMarkerInfoShow", "multipointMarkerList", "isDrawMarker", "cityParentCode", "getDrawAreaEquips"])) : (i(), o(V, {
            key: 1,
            ref_key: "gdMapRef",
            ref: d,
            initCity: e.initCity,
            detailAddress: e.detailAddress,
            zoom: e.zoom,
            mapHeight: e.mapHeight
          }, null, 8, ["initCity", "detailAddress", "zoom", "mapHeight"]))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  x as default
};
