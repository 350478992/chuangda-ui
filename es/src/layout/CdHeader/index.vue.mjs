import { defineComponent as s, resolveComponent as t, openBlock as n, createBlock as r, withCtx as d, createElementVNode as e, toDisplayString as i, unref as _, createTextVNode as l, createVNode as o } from "vue";
import "./style/index.css";
import p from "@/config";
import h from "../CdUserSetting/index.vue.mjs";
const m = { class: "cd-layout-header-l" }, f = { class: "header-title" }, u = /* @__PURE__ */ e("span", { class: "header-feedback" }, "点此进行问题反馈", -1), v = { class: "cd-layout-header-r" }, x = { class: "header-operation" }, y = { class: "header-operation-search" }, C = { class: "header-operation-setting" }, g = s({ name: "CdHeader" }), w = /* @__PURE__ */ s({
  ...g,
  setup(k) {
    return (H, N) => {
      const a = t("Input"), c = t("Header");
      return n(), r(c, { class: "cd-layout-header" }, {
        default: d(() => [
          e("div", m, [
            e("span", f, i(_(p).title), 1),
            l(" | "),
            u
          ]),
          e("div", v, [
            e("div", x, [
              e("div", y, [
                o(a, {
                  suffix: "ios-search",
                  placeholder: "输入所需功能关键字，如：检验"
                })
              ]),
              e("div", C, [
                o(h)
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  w as default
};
