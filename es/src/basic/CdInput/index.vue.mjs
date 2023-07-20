import { defineComponent as V, useAttrs as C, useSlots as b, computed as x, resolveComponent as r, openBlock as i, createBlock as m, mergeProps as B, unref as s, createSlots as I, withCtx as a, renderSlot as d, createVNode as f } from "vue";
import "./style/index.css";
const S = V({ name: "CdInput" }), w = /* @__PURE__ */ V({
  ...S,
  props: {
    modelValue: {},
    size: {},
    placeholder: { default: "请输入" },
    clearable: { type: Boolean, default: !0 },
    prefix: {},
    suffixShow: { type: Boolean, default: !1 },
    poptip: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    placement: { default: "top-start" }
  },
  emits: ["update:modelValue", "on-click", "on-clear"],
  setup(k, { emit: n }) {
    const e = k, g = C(), c = b(), l = x({
      get: () => e.modelValue,
      set: (o) => {
        n("update:modelValue", o);
      }
    }), h = () => {
      n("on-click");
    }, y = () => {
      n("on-clear");
    };
    return (o, t) => {
      const v = r("Icon"), u = r("Input"), _ = r("Poptip");
      return e.poptip ? (i(), m(_, {
        key: 1,
        class: "cd-poptip-input",
        trigger: e.trigger,
        content: e.placeholder,
        placement: e.placement,
        transfer: ""
      }, {
        default: a(() => [
          f(u, {
            modelValue: l.value,
            "onUpdate:modelValue": t[1] || (t[1] = (p) => l.value = p),
            modelModifiers: { trim: !0 },
            placeholder: e.placeholder,
            clearable: ""
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        _: 1
      }, 8, ["trigger", "content", "placement"])) : (i(), m(u, B({
        key: 0,
        class: "cd-input",
        modelValue: l.value,
        "onUpdate:modelValue": t[0] || (t[0] = (p) => l.value = p),
        placeholder: e.placeholder,
        clearable: e.clearable,
        size: e.size
      }, s(g), { onOnClear: y }), I({ _: 2 }, [
        s(c).prepend ? {
          name: "prepend",
          fn: a(() => [
            d(o.$slots, "prepend")
          ]),
          key: "0"
        } : void 0,
        s(c).append ? {
          name: "append",
          fn: a(() => [
            d(o.$slots, "append")
          ]),
          key: "1"
        } : void 0,
        e.suffixShow ? {
          name: "suffix",
          fn: a(() => [
            d(o.$slots, "suffix", {}, () => [
              f(v, {
                style: { cursor: "pointer" },
                type: "ios-search",
                onClick: h
              })
            ])
          ]),
          key: "2"
        } : void 0
      ]), 1040, ["modelValue", "placeholder", "clearable", "size"]));
    };
  }
});
export {
  w as default
};
