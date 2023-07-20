import { defineComponent as x, computed as a, useAttrs as O, ref as M, onMounted as w, resolveComponent as p, openBlock as g, createBlock as N, withCtx as n, createElementVNode as h, renderSlot as c, createTextVNode as i, toDisplayString as T, createElementBlock as $, createVNode as y, createCommentVNode as z, normalizeStyle as E } from "vue";
import "./style/index.css";
const R = {
  class: "ivu-modal-header-inner",
  style: { position: "relative" }
}, j = {
  key: 0,
  class: "cd-modal-btns"
}, A = x({ name: "CdModal" }), J = /* @__PURE__ */ x({
  ...A,
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    closable: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "normal",
      validator: (s) => ["small", "normal", "large"].includes(s)
    },
    footerHide: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    fullscreen: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    styles: {
      type: Object,
      default: () => ({
        top: "50px"
      })
    },
    className: {
      type: String,
      default: ""
    },
    minHeight: {
      type: String,
      default: "250"
    },
    maxHeight: {
      type: String,
      default: ""
    }
  },
  emits: [
    "update:modelValue",
    "on-visible-change",
    "on-ok",
    "on-cancel"
  ],
  setup(s, { emit: o }) {
    const e = s, r = a({
      get: () => e.modelValue,
      set: () => o("update:modelValue")
    }), b = O(), k = a(() => {
      const t = {
        normal: "800",
        small: "520",
        large: "1200"
      };
      return b.width || t[e.size];
    }), v = a(() => `min-height:${e.minHeight}px`), V = a(
      () => e.maxHeight ? `maxheight:${e.maxHeight}px` : ""
    ), C = a(() => ({ top: "50px", ...e.styles })), H = (t) => {
      t && o("on-visible-change");
    }, u = () => {
      o("on-ok", () => {
        o("update:modelValue", !1);
      });
    }, f = () => {
      o("update:modelValue", !1), o("on-cancel");
    }, m = M(), B = () => {
      if (!e.fullscreen && !e.maxHeight) {
        const t = document.body.offsetHeight;
        let l = "";
        t < 550 ? l = "250px" : t >= 550 && t < 650 ? l = "400px" : l = "650px";
        const d = m.value;
        d.style.maxHeight = l;
      }
    };
    return w(() => {
      B();
    }), (t, l) => {
      const d = p("Button"), S = p("Modal");
      return g(), N(S, {
        class: "cd-modal",
        ref: "cdModal",
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (_) => r.value = _),
        title: e.title,
        closable: e.closable,
        "mask-closable": e.maskClosable,
        "footer-hide": e.footerHide,
        loading: e.loading,
        scrollable: e.scrollable,
        fullscreen: e.fullscreen,
        draggable: e.draggable,
        "ok-text": e.okText,
        "cancel-text": e.cancelText,
        "class-name": e.className,
        styles: C.value,
        width: k.value,
        onOnOk: u,
        onOnCancel: f,
        onOnVisibleChange: H
      }, {
        header: n(() => [
          h("div", R, [
            c(t.$slots, "header", {}, () => [
              i(T(e.title), 1)
            ])
          ])
        ]),
        footer: n(() => [
          e.footerHide ? z("", !0) : (g(), $("div", j, [
            c(t.$slots, "footer", {}, () => [
              y(d, {
                class: "cd-modal-btns-item",
                type: "primary",
                loading: s.loading,
                onClick: u
              }, {
                default: n(() => [
                  i(" 确认 ")
                ]),
                _: 1
              }, 8, ["loading"]),
              y(d, {
                class: "cd-modal-btns-item",
                onClick: f
              }, {
                default: n(() => [
                  i("取消")
                ]),
                _: 1
              })
            ])
          ]))
        ]),
        default: n(() => [
          h("div", {
            class: "cd-modal-content",
            ref_key: "cusContentRef",
            ref: m,
            style: E(`${v.value};${V.value};overflow-y: auto;overflow-x: hidden;`)
          }, [
            c(t.$slots, "default")
          ], 4)
        ]),
        _: 3
      }, 8, ["modelValue", "title", "closable", "mask-closable", "footer-hide", "loading", "scrollable", "fullscreen", "draggable", "ok-text", "cancel-text", "class-name", "styles", "width"]);
    };
  }
});
export {
  J as default
};
