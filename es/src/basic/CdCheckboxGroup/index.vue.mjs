import { defineComponent as g, ref as C, watch as S, computed as k, onMounted as _, resolveComponent as c, openBlock as u, createBlock as m, mergeProps as x, withCtx as f, createElementBlock as w, Fragment as z, renderList as A, createTextVNode as L, toDisplayString as B } from "vue";
import "./style/index.css";
import { apiFindDictList as G } from "@/api/system";
const I = g({ name: "CdCheckboxGroup" }), D = /* @__PURE__ */ g({
  ...I,
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
    type: {
      // 字典类型
      type: String,
      default: ""
    },
    pVal: {
      // 父级值
      type: String,
      default: ""
    },
    pId: {
      // 父级id
      type: String,
      default: "-1"
    },
    size: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue", "on-change"],
  setup(d, { emit: s }) {
    const o = d, n = C([]);
    S(
      () => o.list,
      () => {
        p();
      }
    );
    const i = k({
      get: () => {
        const e = Object.prototype.toString.call(o.modelValue);
        if (e.includes("Array"))
          return o.modelValue;
        if (e.includes("String"))
          return o.modelValue.split(",").filter((t) => t !== "");
      },
      set: (e) => {
        s("update:modelValue", e);
      }
    });
    _(() => {
      p();
    });
    const p = async () => {
      const { type: e, pId: t, pVal: r, list: l } = o;
      if (l != null && l.length)
        n.value = l;
      else if (e) {
        const a = await G({ type: e, parentId: t, parentValue: r }), { isSuccess: y, errorMsg: b, errmsg: h, data: v } = a || {};
        y ? n.value = v : window.$Message.error(b || h);
      } else
        n.value = l || [];
    }, V = (e) => {
      const t = e.join();
      s("update:modelValue", t);
      const r = n.value.filter((l) => e.includes(l.value));
      s("on-change", t, r);
    };
    return (e, t) => {
      const r = c("Checkbox"), l = c("CheckboxGroup");
      return u(), m(l, x({
        modelValue: i.value,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => i.value = a),
        size: d.size
      }, e.$attrs, { onOnChange: V }), {
        default: f(() => [
          (u(!0), w(z, null, A(n.value, (a) => (u(), m(r, {
            label: a.value,
            disabled: e.$attrs.disabled || a.disabled
          }, {
            default: f(() => [
              L(B(a.label), 1)
            ]),
            _: 2
          }, 1032, ["label", "disabled"]))), 256))
        ]),
        _: 1
      }, 16, ["modelValue", "size"]);
    };
  }
});
export {
  D as default
};
