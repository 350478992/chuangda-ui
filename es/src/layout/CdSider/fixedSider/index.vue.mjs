import { defineComponent as f, inject as k, ref as t, watch as x, onBeforeMount as N, resolveComponent as l, openBlock as o, createBlock as d, withCtx as _, createVNode as R, createElementVNode as y, createElementBlock as B, Fragment as C, renderList as M, unref as $, nextTick as g } from "vue";
import "./style/index.css";
import w from "../common/SiderItem.vue.mjs";
import { useRoute as E, useRouter as F } from "vue-router";
const L = { class: "inside-menu-item" }, O = f({ name: "CdFixedSider" }), z = /* @__PURE__ */ f({
  ...O,
  setup(j) {
    const a = E(), r = F(), v = k("appStore").asyncMenus || [], c = t(a.name), h = (e) => {
      r.push({
        name: e
      });
    }, m = t(["_home"]), s = t(), u = (e) => {
      const i = e.matched.filter(
        (n) => n.name !== e.name
      );
      m.value = i.map(
        (n) => n.name
      ), g(() => {
        s.value.updateOpened();
      });
    };
    return x(
      () => r.currentRoute.value,
      (e) => {
        c.value = e.name, u(e);
      }
    ), N(() => {
      u(a);
    }), (e, i) => {
      const n = l("Menu"), S = l("Sider");
      return o(), d(S, {
        class: "cd-layout-sider",
        "hide-trigger": ""
      }, {
        default: _(() => [
          R(n, {
            ref_key: "menuRef",
            ref: s,
            "active-name": c.value,
            "open-names": m.value,
            accordion: !0,
            width: "200px",
            onOnSelect: h
          }, {
            default: _(() => [
              y("div", L, [
                (o(!0), B(C, null, M($(v), (p) => (o(), d(w, {
                  key: `menu-${p.name}`,
                  menu: p
                }, null, 8, ["menu"]))), 128))
              ])
            ]),
            _: 1
          }, 8, ["active-name", "open-names"])
        ]),
        _: 1
      });
    };
  }
});
export {
  z as default
};
