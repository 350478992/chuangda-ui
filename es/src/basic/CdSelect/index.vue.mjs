import { defineComponent as B, ref as y, watch as g, computed as h, onMounted as O, resolveComponent as C, openBlock as o, createElementBlock as k, unref as c, createBlock as p, createCommentVNode as V, mergeProps as x, withCtx as S, createTextVNode as q, Fragment as M, renderList as $, toDisplayString as A } from "vue";
import "./style/index.css";
import { Message as D } from "view-ui-plus";
import { apiFindDictList as E } from "@/api/system";
const N = B({ name: "CdSelect" }), U = /* @__PURE__ */ B({
  ...N,
  props: {
    // 多选时，数据类型为数组
    modelValue: {
      type: [String, Array],
      default: ""
    },
    // 自定义下拉数据
    list: {
      type: Array,
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
  setup(r, { emit: f }) {
    const t = r;
    let a = y([]), s = y(!1), b = y(t.empty);
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
    const u = h({
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
      var e, n;
      ((e = t.list) == null ? void 0 : e.length) > 0 ? (a.value = t.list, t.selectFirst && !u.value && (u.value = a.value[0].value)) : ((n = t.list) == null ? void 0 : n.length) === 0 && t.type && w();
    }, w = async () => {
      const { type: e, pId: n, pVal: i } = t;
      s.value = !0;
      const d = await E({ type: e, parentId: n, parentValue: i }), { isSuccess: l, errorMsg: m, errormsg: z, data: L } = d;
      l ? (a.value = L || [], t.selectFirst && a.value.length > 0 && !u.value && (u.value = a.value[0].value)) : D.error(`数据字典错误：${m || z}`), s.value = !1;
    };
    return (e, n) => {
      const i = C("Select"), d = C("Option");
      return o(), k("div", null, [
        c(s) ? (o(), p(i, { key: 0 })) : V("", !0),
        c(s) ? V("", !0) : (o(), p(i, x({
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": n[0] || (n[0] = (l) => u.value = l),
          size: r.size,
          "label-in-value": r.labelInValue,
          transfer: !0,
          clearable: ""
        }, e.$attrs, {
          onOnChange: F,
          onOnQueryChange: I
        }), {
          default: S(() => [
            c(b) ? (o(), p(d, {
              key: 0,
              value: ""
            }, {
              default: S(() => [
                q("请选择")
              ]),
              _: 1
            })) : V("", !0),
            (o(!0), k(M, null, $(c(a), (l, m) => (o(), p(d, {
              disabled: _.value && l.value != r.equclacode,
              value: l.value,
              label: l.label,
              key: `${l.value}${m}`
            }, {
              default: S(() => [
                q(A(l.label), 1)
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
