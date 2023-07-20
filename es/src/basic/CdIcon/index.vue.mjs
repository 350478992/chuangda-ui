import { defineComponent as t, computed as n, resolveComponent as l, openBlock as c, createBlock as d, createElementBlock as u, createElementVNode as a, createCommentVNode as m } from "vue";
import "./style/index.css";
import { iconColors as p, svgIcon as _ } from "./iconConfig.mjs";
const f = {
  key: 1,
  class: "cd-icon-svg",
  "aria-hidden": "true",
  style: { width: "2em", height: "2em" }
}, h = ["xlink:href"], C = t({ name: "CdIcon" }), z = /* @__PURE__ */ t({
  ...C,
  props: {
    iconRender: { default: "icon" },
    icon: {},
    iconColor: {},
    size: { default: 24 }
  },
  setup(r) {
    const e = r, i = n(() => {
      if (e.iconColor)
        return p[e.iconColor];
    }), o = n(() => e.iconRender === "icon" ? e.icon : _[e.icon]);
    return (v, k) => {
      const s = l("Icon");
      return e.iconRender === "icon" ? (c(), d(s, {
        key: 0,
        type: o.value,
        color: i.value,
        size: e.size
      }, null, 8, ["type", "color", "size"])) : e.iconRender === "svg" ? (c(), u("svg", f, [
        a("use", { "xlink:href": o.value }, null, 8, h)
      ])) : m("", !0);
    };
  }
});
export {
  z as default
};
