import { defineComponent as i, ref as s, computed as m, resolveComponent as c, openBlock as y, createBlock as g, withCtx as r, createElementVNode as h, renderSlot as S, createVNode as B, normalizeStyle as v, createTextVNode as x, toDisplayString as w } from "vue";
import "./style/index.css";
const z = i({ name: "CdMoreButton" }), N = /* @__PURE__ */ i({
  ...z,
  props: {
    vertical: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: String,
      default: "hover"
    },
    //提示框位置
    placement: {
      type: String,
      default: "right"
    },
    text: {
      type: String,
      default: "更多>>"
    },
    size: {
      type: String,
      default: "small"
    },
    btnType: {
      type: String,
      default: "default"
    },
    // 提示框 是否限制高度 进行滚动
    poptipBtnScroll: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const l = e, a = s(""), p = s(), u = m(() => [l.btnType === "text" ? "box-shadow: unset;" : ""].reduce((n, t) => t += n, "")), d = () => {
      var n, t;
      let o = ((t = (n = p.value) == null ? void 0 : n.children[0]) == null ? void 0 : t.children.length) ?? 0;
      a.value = o > 4 && l.poptipBtnScroll ? "cus-poptip-popper" : "";
    };
    return (o, n) => {
      const t = c("Button"), f = c("Poptip");
      return y(), g(f, {
        transfer: "",
        trigger: e.trigger,
        "transfer-class-name": a.value,
        placement: e.placement,
        onOnPopperShow: d
      }, {
        content: r(() => [
          h("div", {
            ref_key: "contentRef",
            ref: p
          }, [
            S(o.$slots, "default")
          ], 512)
        ]),
        default: r(() => [
          B(t, {
            type: e.btnType,
            size: e.size,
            style: v(u.value)
          }, {
            default: r(() => [
              x(w(e.text), 1)
            ]),
            _: 1
          }, 8, ["type", "size", "style"])
        ]),
        _: 3
      }, 8, ["trigger", "transfer-class-name", "placement"]);
    };
  }
});
export {
  N as default
};
