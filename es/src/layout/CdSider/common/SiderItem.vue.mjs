import { defineComponent as d, reactive as y, resolveComponent as n, openBlock as t, createBlock as o, withCtx as m, createCommentVNode as f, createTextVNode as c, toDisplayString as r, createElementBlock as k, Fragment as I, renderList as h } from "vue";
const g = /* @__PURE__ */ d({
  __name: "SiderItem",
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  setup(a) {
    const e = y(a.menu);
    return (x, C) => {
      const u = n("Icon"), l = n("SiderItem", !0), p = n("Submenu"), i = n("MenuItem");
      return e.children && e.children.length > 0 ? (t(), o(p, {
        key: 0,
        name: e.name
      }, {
        title: m(() => [
          e.meta.icon ? (t(), o(u, {
            key: 0,
            type: e.meta.icon
          }, null, 8, ["type"])) : f("", !0),
          c(" " + r(e.meta.title), 1)
        ]),
        default: m(() => [
          (t(!0), k(I, null, h(e.children, (_, s) => (t(), o(l, {
            menu: _,
            key: s
          }, null, 8, ["menu"]))), 128))
        ]),
        _: 1
      }, 8, ["name"])) : (t(), o(i, {
        key: 1,
        name: e.name
      }, {
        default: m(() => [
          c(r(e.meta.title), 1)
        ]),
        _: 1
      }, 8, ["name"]));
    };
  }
});
export {
  g as default
};
