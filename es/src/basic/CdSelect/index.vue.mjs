import { defineComponent as B, ref as y, watch as g, computed as h, onMounted as O, resolveComponent as C, openBlock as u, createElementBlock as k, unref as c, createBlock as p, createCommentVNode as V, mergeProps as x, withCtx as S, createTextVNode as q, Fragment as M, renderList as $, toDisplayString as D } from "vue";
import "./style/index.css";
import { Message as E } from "view-ui-plus";
import { apiFindDictList as N } from "@/api/system";
const Q = B({ name: "CdSelect" }), U = /* @__PURE__ */ B({
  ...Q,
  props: {
    // 多选时，数据类型为数组
    modelValue: {
      type: [String, Array],
      default: ""
    },
    // 自定义下拉数据
    list: {
      // interfaces: Array as PropType<OptionType[]>,
      default: () => []
    },
    equclacode: {
      // 设备类型代码
      type: String,
      default: ""
    },
    type: {
      // 字典类型
      type: String,
      default: ""
    },
    pId: {
      // 父级id
      type: String,
      default: "-1"
    },
    pVal: {
      // 父级值
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "default"
    },
    empty: {
      // 是展示空值选项
      type: Boolean,
      default: !0
    },
    labelInValue: {
      // 是否同时返回label和value
      type: Boolean,
      default: !0
    },
    selectFirst: {
      // 是否默认选中首项
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "on-change", "on-query"],
  setup(o, { emit: f }) {
    const t = o;
    let a = y([]), r = y(!1), b = y(t.empty);
    g(
      () => t.pVal,
      (e) => v()
    ), g(
      () => t.empty,
      (e) => b.value = e
    ), g(
      () => t.list,
      (e) => {
        e.length > 0 ? v() : a.value = [];
      },
      { deep: !0 }
    );
    const n = h({
      get() {
        return t.modelValue;
      },
      set(e) {
        f("update:modelValue", e);
      }
    }), _ = h(() => !!t.equclacode);
    O(() => {
      v();
    });
    const F = (e) => {
      f("on-change", e || {});
    }, I = (e) => {
      f("on-query", e || {});
    }, v = () => {
      t.list.length > 0 ? (a.value = t.list, t.selectFirst && !n.value && (n.value = a.value[0].value)) : t.list.length === 0 && t.type && w();
    }, w = async () => {
      const { type: e, pId: s, pVal: i } = t;
      r.value = !0;
      const d = await N({ type: e, parentId: s, parentValue: i }), { isSuccess: l, errorMsg: m, errormsg: z, data: L } = d;
      l ? (a.value = L || [], t.selectFirst && a.value.length > 0 && !n.value && (n.value = a.value[0].value)) : E.error(`数据字典错误：${m || z}`), r.value = !1;
    };
    return (e, s) => {
      const i = C("Select"), d = C("Option");
      return u(), k("div", null, [
        c(r) ? (u(), p(i, { key: 0 })) : V("", !0),
        c(r) ? V("", !0) : (u(), p(i, x({
          key: 1,
          modelValue: n.value,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => n.value = l),
          size: o.size,
          "label-in-value": o.labelInValue,
          transfer: !0,
          clearable: ""
        }, e.$attrs, {
          onOnChange: F,
          onOnQueryChange: I
        }), {
          default: S(() => [
            c(b) ? (u(), p(d, {
              key: 0,
              value: ""
            }, {
              default: S(() => [
                q("请选择")
              ]),
              _: 1
            })) : V("", !0),
            (u(!0), k(M, null, $(c(a), (l, m) => (u(), p(d, {
              disabled: _.value && l.value != o.equclacode,
              value: l.value,
              label: l.label,
              key: `${l.value}${m}`
            }, {
              default: S(() => [
                q(D(l.label), 1)
              ]),
              _: 2
            }, 1032, ["disabled", "value", "label"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "size", "label-in-value"]))
      ]);
    };
  }
});
export {
  U as default
};
