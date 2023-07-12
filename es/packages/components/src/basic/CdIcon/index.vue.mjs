import { defineComponent as t, computed as n, resolveComponent as s, openBlock as c, createBlock as u, createElementBlock as d, createElementVNode as a, createCommentVNode as m } from "vue";
import "./style/index.css";
import { iconColors as p, svgIcon as _ } from "./iconConfig.mjs";
const f = {
  key: 1,
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
    return (k, v) => {
      const l = s("Icon");
      return e.iconRender === "icon" ? (c(), u(l, {
        key: 0,
        type: o.value,
        color: i.value,
        size: e.size
      }, null, 8, ["type", "color", "size"])) : e.iconRender === "svg" ? (c(), d("svg", f, [
        a("use", { "xlink:href": o.value }, null, 8, h)
      ])) : m("", !0);
    };
  }
});
export {
  z as default
};
