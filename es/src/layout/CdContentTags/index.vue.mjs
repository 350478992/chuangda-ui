import { defineComponent as M, inject as T, ref as d, watch as D, resolveComponent as m, openBlock as h, createElementBlock as x, createVNode as s, createElementVNode as _, normalizeStyle as A, Fragment as E, renderList as I, unref as B, createBlock as j, withCtx as u, createTextVNode as C, toDisplayString as z } from "vue";
import "./style/index.css";
import { useRoute as F, useRouter as V } from "vue-router";
const q = { class: "cd-tag-wrap" }, G = { class: "close-box" }, H = M({ name: "CdContentTags" }), U = /* @__PURE__ */ M({
  ...H,
  setup(J) {
    const N = F(), v = V(), S = T("$config"), n = T("appStore");
    let c = d(n.navTags), r = d(N.name);
    D(
      () => v.currentRoute.value,
      (o) => {
        var e;
        r.value = o.name, n.handleNavTagsAdd({ name: o.name, title: (e = o.meta) == null ? void 0 : e.title }), c.value = n.navTags;
      }
    ), D(() => n.navTags, () => {
      c.value = n.navTags;
    });
    const g = (o, e) => {
      if (o.name !== "home" && (c.value = n.handleNavTagsClose([o.name], "sigleclose"), r.value === o.name)) {
        const l = c.value[e - 1];
        r.value = l.name, v.push({
          name: l.name
        });
      }
    }, O = (o, e, l) => {
      o.detail === 2 && S.tagNavDblClickClose ? g(e, l) : v.push({
        name: e.name
      });
    }, $ = (o) => {
      const e = o === "close-all", l = e ? ["home"] : ["home", r.value];
      c.value = n.handleNavTagsClose(l, "batchcolse"), e && (r.value = "home", v.push({
        name: "home"
      }));
    }, w = d(), b = d(), k = (o) => {
      const { type: e, detail: l, wheelDelta: p } = o;
      let i = 0;
      (e === "DOMMouseScroll" || e === "mousewheel") && (i = p || -(l || 0) * 40), f(i);
    }, t = d(0), f = (o) => {
      const e = w.value.offsetWidth, l = b.value.offsetWidth;
      o > 0 ? t.value = Math.min(0, t.value + o) : e < l ? t.value < -(l - e + 8) ? t.value = t.value : t.value = Math.max(
        t.value + o - 8,
        e - l - 8
      ) : t.value = 0;
    };
    return (o, e) => {
      const l = m("Button"), p = m("Tag"), i = m("DropdownItem"), L = m("DropdownMenu"), W = m("Dropdown");
      return h(), x("div", q, [
        s(l, {
          class: "arrow-btn arrow-btn-left",
          icon: "ios-arrow-back",
          onClick: e[0] || (e[0] = (a) => f(240))
        }),
        s(l, {
          class: "arrow-btn arrow-btn-right",
          icon: "ios-arrow-forward",
          onClick: e[1] || (e[1] = (a) => f(-240))
        }),
        _("div", {
          class: "scroll-box",
          ref_key: "scrollBox",
          ref: w,
          "on:DOMMouseScroll": k,
          onMousewheel: k
        }, [
          _("div", {
            class: "scroll-body",
            ref_key: "scrollBody",
            ref: b,
            style: A({ marginLeft: t.value + "px" })
          }, [
            (h(!0), x(E, null, I(B(c), (a, y) => (h(), j(p, {
              class: "scroll-box-tag",
              type: "dot",
              closable: "",
              color: B(r) === a.name ? "primary" : "",
              key: a.name,
              onOnClose: () => g(a, y),
              onClick: (R) => O(R, a, y)
            }, {
              default: u(() => [
                C(z(a.title), 1)
              ]),
              _: 2
            }, 1032, ["color", "onOnClose", "onClick"]))), 128))
          ], 4)
        ], 544),
        _("div", G, [
          s(W, {
            transfer: "",
            onOnClick: $
          }, {
            list: u(() => [
              s(L, null, {
                default: u(() => [
                  s(i, { name: "close-all" }, {
                    default: u(() => [
                      C("关闭所有")
                    ]),
                    _: 1
                  }),
                  s(i, { name: "close-others" }, {
                    default: u(() => [
                      C("关闭其他")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: u(() => [
              s(l, {
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
