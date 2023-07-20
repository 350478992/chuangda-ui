import { defineComponent as g, ref as v, computed as S, onMounted as _, resolveComponent as c, openBlock as r, createBlock as m, mergeProps as C, withCtx as f, createElementBlock as z, Fragment as R, renderList as h, createElementVNode as B, toDisplayString as D } from "vue";
import "./style/index.css";
import { apiFindDictList as L } from "@/api/system";
const k = g({ name: "CdRadioGroup" }), E = /* @__PURE__ */ g({
  ...k,
  props: {
    modelValue: {
      type: [String, Array],
      default: ""
    },
    list: {
      // 自定义选项
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "default"
    },
    allDisabled: {
      // 是否全部禁用
      type: Boolean,
      default: !1
    },
    type: {
      // 字典类型
      type: String,
      default: ""
    },
    pId: {
      // 字典父级Id
      type: String,
      default: "-1"
    },
    pVal: {
      // 字典父级值
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(l, { emit: u }) {
    const i = l, o = v([]), p = S({
      get: () => i.modelValue,
      set: (e) => {
        u("update:modelValue", e);
      }
    });
    _(() => {
      y();
    });
    const y = async () => {
      const { type: e, pId: a, pVal: n, list: d } = i;
      if (e) {
        const t = await L({ type: e, parentId: a, parentValue: n }), { isSuccess: s, data: b, errorMsg: G, errmsg: I } = t;
        s && (o.value = b);
      } else
        o.value = d;
    }, V = (e) => {
      u("on-change", e);
    };
    return (e, a) => {
      const n = c("Radio"), d = c("RadioGroup");
      return r(), m(d, C({
        class: "dib",
        modelValue: p.value,
        "onUpdate:modelValue": a[0] || (a[0] = (t) => p.value = t),
        size: l.size
      }, e.$attrs, { onOnChange: V }), {
        default: f(() => [
          (r(!0), z(R, null, h(o.value, (t, s) => (r(), m(n, {
            size: "default",
            label: t.value,
            disabled: t.disabled || l.allDisabled,
            key: s
          }, {
            default: f(() => [
              B("span", null, D(t.label), 1)
            ]),
            _: 2
          }, 1032, ["label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "size"]);
    };
  }
});
export {
  E as default
};
