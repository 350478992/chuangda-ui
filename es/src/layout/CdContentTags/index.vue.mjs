import { defineComponent as B, inject as D, ref as d, watch as R, resolveComponent as m, openBlock as h, createElementBlock as T, createVNode as a, createElementVNode as _, normalizeStyle as A, Fragment as E, renderList as I, unref as x, createBlock as j, withCtx as c, createTextVNode as C, toDisplayString as z } from "vue";
import "./style/index.css";
import { useRoute as F, useRouter as V } from "vue-router";
const q = { class: "cd-tag-wrap" }, G = { class: "close-box" }, H = B({ name: "CdContentTags" }), U = /* @__PURE__ */ B({
  ...H,
  setup(J) {
    const M = F(), p = V(), N = D("$config"), r = D("appStore");
    let i = d(r.navTags), s = d(M.name);
    R(
      () => p.currentRoute.value,
      (o) => {
        var e;
        s.value = o.name, r.handleNavTagsAdd({ name: o.name, title: (e = o.meta) == null ? void 0 : e.title }), i.value = r.navTags;
      }
    );
    const w = (o, e) => {
      if (o.name !== "home" && (i.value = r.handleNavTagsClose([o.name], "sigleclose"), s.value === o.name)) {
        const l = i.value[e - 1];
        s.value = l.name, p.push({
          name: l.name
        });
      }
    }, S = (o, e, l) => {
      o.detail === 2 && N.tagNavDblClickClose ? w(e, l) : p.push({
        name: e.name
      });
    }, O = (o) => {
      const e = o === "close-all", l = e ? ["home"] : ["home", s.value];
      i.value = r.handleNavTagsClose(l, "batchcolse"), e && (s.value = "home", p.push({
        name: "home"
      }));
    }, g = d(), b = d(), k = (o) => {
      const { type: e, detail: l, wheelDelta: v } = o;
      let u = 0;
      (e === "DOMMouseScroll" || e === "mousewheel") && (u = v || -(l || 0) * 40), f(u);
    }, t = d(0), f = (o) => {
      const e = g.value.offsetWidth, l = b.value.offsetWidth;
      o > 0 ? t.value = Math.min(0, t.value + o) : e < l ? t.value < -(l - e + 8) ? t.value = t.value : t.value = Math.max(
        t.value + o - 8,
        e - l - 8
      ) : t.value = 0;
    };
    return (o, e) => {
      const l = m("Button"), v = m("Tag"), u = m("DropdownItem"), $ = m("DropdownMenu"), L = m("Dropdown");
      return h(), T("div", q, [
        a(l, {
          class: "arrow-btn arrow-btn-left",
          icon: "ios-arrow-back",
          onClick: e[0] || (e[0] = (n) => f(240))
        }),
        a(l, {
          class: "arrow-btn arrow-btn-right",
          icon: "ios-arrow-forward",
          onClick: e[1] || (e[1] = (n) => f(-240))
        }),
        _("div", {
          class: "scroll-box",
          ref_key: "scrollBox",
          ref: g,
          "on:DOMMouseScroll": k,
          onMousewheel: k
        }, [
          _("div", {
            class: "scroll-body",
            ref_key: "scrollBody",
            ref: b,
            style: A({ marginLeft: t.value + "px" })
          }, [
            (h(!0), T(E, null, I(x(i), (n, y) => (h(), j(v, {
              class: "scroll-box-tag",
              type: "dot",
              closable: "",
              color: x(s) === n.name ? "primary" : "",
              key: n.name,
              onOnClose: () => w(n, y),
              onClick: (W) => S(W, n, y)
            }, {
              default: c(() => [
                C(z(n.title), 1)
              ]),
              _: 2
            }, 1032, ["color", "onOnClose", "onClick"]))), 128))
          ], 4)
        ], 544),
        _("div", G, [
          a(L, {
            transfer: "",
            onOnClick: O
          }, {
            list: c(() => [
              a($, null, {
                default: c(() => [
                  a(u, { name: "close-all" }, {
                    default: c(() => [
                      C("关闭所有")
                    ]),
                    _: 1
                  }),
                  a(u, { name: "close-others" }, {
                    default: c(() => [
                      C("关闭其他")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: c(() => [
              a(l, {
                class: "close-box-btn",
                icon: "ios-close-circle-outline"
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  U as default
};
