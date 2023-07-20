import { defineComponent as s, useAttrs as d, computed as t, resolveComponent as m, openBlock as n, createBlock as c, mergeProps as C, unref as r, withCtx as f, normalizeClass as _, createCommentVNode as y, renderSlot as z, createTextVNode as v } from "vue";
import "./style/index.css";
import { CdIcon as x } from "../CdIcon/index.mjs";
const B = s({ name: "CdButton" }), g = /* @__PURE__ */ s({
  ...B,
  props: {
    type: {},
    size: {},
    icon: {},
    iconRender: {},
    iconColor: {}
  },
  setup(i) {
    const o = i, l = d(), e = t(
      () => o.type === "text" && o.iconRender || "icon"
    ), a = t(
      () => o.type === "text" ? o.iconColor || "default" : ""
    );
    return (p, $) => {
      const u = m("Button");
      return n(), c(u, C({
        class: "cd-button",
        type: o.type,
        size: o.size
      }, r(l)), {
        default: f(() => [
          o.icon ? (n(), c(r(x), {
            key: 0,
            class: _(`cd-button-${e.value === "icon" ? "icon" : "iconsvg"}`),
            icon: o.icon,
            "icon-render": e.value,
            iconColor: a.value,
            size: 14
          }, null, 8, ["class", "icon", "icon-render", "iconColor"])) : y("", !0),
          z(p.$slots, "default", {}, () => [
            v("按钮")
          ])
        ]),
        _: 3
      }, 16, ["type", "size"]);
    };
  }
});
export {
  g as default
};
