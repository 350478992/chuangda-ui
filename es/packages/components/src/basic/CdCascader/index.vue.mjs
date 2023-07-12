import { defineComponent as M, reactive as H, ref as p, onBeforeMount as T, watch as v, resolveComponent as J, unref as V, openBlock as S, createBlock as L, isRef as O } from "vue";
import { apiFindDictList as I, apiFindDictItem as A } from "@/api/system";
const E = M({ name: "CdCascader" }), j = /* @__PURE__ */ M({
  ...E,
  props: {
    size: String,
    // 输入框大小
    disabled: Boolean,
    // 是否禁用
    filterable: Boolean,
    // 是否支持搜索
    clearable: {
      // 是否支持清除
      type: Boolean,
      default: !0
    },
    modelValue: String,
    type: {
      // 字典类型
      type: String,
      default: ""
    },
    pVal: String,
    // 父级值
    pId: {
      // 父级id
      type: String,
      default: "-1"
    },
    showableRootVals: {
      // 配置第一项可选项，若不配置则所有项目可选
      type: Array,
      default: () => []
    },
    showableSubVals: {
      // 配置第二项可选项，若不配置则所有项目可选
      type: Array,
      default: () => []
    },
    showableRootValsReverse: Boolean,
    // 一级是否反向配置
    showableSubValsReverse: Boolean,
    // 二级是否反向配置
    splitChar: {
      // 级联文本拼接符号
      type: String,
      default: "/"
    },
    needEmptyItem: {
      // 是否添加自定义项
      type: Boolean,
      default: !1
    },
    // 自定义项文本
    emptyItemLabel: {
      type: String,
      default: "为空"
    },
    // 自定义项值
    emptyItemValue: {
      type: String,
      default: "0"
    },
    selLastLev: {
      // 是否选到最后一级
      type: Boolean,
      default: !1
    },
    selMinLev: {
      // 最小选择层级数, 必须小于showLev的值
      type: Number,
      default: 0
    },
    // 级联选择指定展示的层级,默认无限大
    showLev: {
      type: Number,
      validator(i) {
        return i ? +i > 1 : !0;
      },
      default: 999
    }
  },
  emits: [
    "update:modelValue",
    "get-full-label",
    "get-last-label",
    "on-change"
  ],
  setup(i, { expose: R, emit: u }) {
    const e = i, C = () => {
      B(), g();
    };
    let b = H([]), h = p(!1);
    const g = () => {
      h.value = !0, I({
        type: e.type,
        parentId: e.pId,
        parentValue: e.pVal
      }).then((l) => {
        const { isSuccess: a, errorMsg: s, data: n } = l || {};
        a ? (b = n.map((o) => {
          if (o.lev = 1, e.showableRootVals.length) {
            const d = e.showableRootVals.includes(o.value), t = e.showableRootValsReverse ? d : !d;
            o.disabled = t;
          } else
            o.disabled = !1;
          return o.childrenSum > 0 ? { ...o, children: [], loading: !1 } : o;
        }), e.needEmptyItem && b.splice(0, 0, {
          label: e.emptyItemLabel,
          value: e.emptyItemValue
        })) : window.$Message.error(s), h.value = !1;
      });
    }, c = p();
    let r = p([]);
    const B = async () => {
      if (e.modelValue) {
        r.value = [];
        let l = e.modelValue || "", a = 0;
        const s = [];
        for (; a <= 5; ) {
          const n = await A({
            type: e.type,
            value: l
          }), { isSuccess: o, errorMsg: d, data: t } = n;
          o ? t ? (l = t.parentValue, s.push(t), a++, (t.parentValue === e.pVal || t.parentId === e.pId) && (a = 100)) : a = 100 : (a = 100, window.$Message.error(d));
        }
        s.reverse(), r.value = s.map((n) => n.value), setTimeout(() => {
          c.value && (c.value.selected = s);
        }, 200);
      } else
        r.value = [];
    };
    T(() => {
      C();
    });
    const k = (l, a) => {
      l.loading = !0, I({ type: e.type, parentId: l.id }).then((s) => {
        const { isSuccess: n, errorMsg: o, data: d } = s || {};
        n ? (l.children = d == null ? void 0 : d.map((t) => {
          if (t.lev = l.lev + 1, t.lev === 2)
            if (e.showableSubVals && e.showableSubVals.length) {
              console.log(e.showableSubVals, t, 2333);
              const m = e.showableSubVals.includes(t.value), F = e.showableSubValsReverse ? m : !m;
              t.disabled = F;
            } else
              t.disabled = !1;
          return e.showLev !== 999 && e.showLev <= t.lev ? { ...t, childrenSum: 0 } : t.childrenSum > 0 ? { ...t, children: [], loading: !1 } : t;
        }), l.loading = !1) : window.$Message.error(o), a();
      });
    }, D = (l, a) => {
      r.value = l, u("update:modelValue", l[l.length - 1]);
      const s = a.map((n) => n.label);
      u("get-full-label", s.join(e.splitChar)), u("get-last-label", s[s.length - 1]), u("on-change", l, s);
    }, w = p(!1), x = ["", "一", "二", "三", "四", "五"], z = (l) => {
      w.value = l, l || y();
    }, y = () => {
      const l = c.value.selected, a = l[l.length - 1];
      return a && !a.lev && (a.lev = 1), e.selLastLev && !(l.length > 0 ? a.childrenSum === 0 : !1) ? (window.$Message.warning("请选择到最后一级"), f(), !1) : e.selMinLev !== 0 && e.selMinLev <= e.showLev && (!a || a.lev < e.selMinLev) ? (window.$Message.warning(
        `请至少选择到第${x[e.selMinLev]}级`
      ), f(), !1) : !0;
    }, f = () => {
      r.value = [], u("update:modelValue", "");
    };
    return R({
      levSelectJudgeHandle: y,
      resetValue: f
    }), v(
      () => e.modelValue,
      (l) => {
        l || f();
      }
    ), v([() => e.showableRootVals, () => e.showableSubVals], () => {
      g();
    }), v([() => e.pVal, () => e.pId], () => {
      g();
    }), (l, a) => {
      const s = J("Cascader");
      return V(h) ? (S(), L(s, { key: 0 })) : (S(), L(s, {
        key: 1,
        ref_key: "cascaderRef",
        ref: c,
        modelValue: V(r),
        "onUpdate:modelValue": a[0] || (a[0] = (n) => O(r) ? r.value = n : r = n),
        transfer: "",
        data: V(b),
        size: e.size,
        "load-data": k,
        "change-on-select": w.value,
        disabled: e.disabled,
        filterable: e.filterable,
        clearable: e.clearable,
        onOnChange: D,
        onOnVisibleChange: z
      }, null, 8, ["modelValue", "data", "size", "change-on-select", "disabled", "filterable", "clearable"]));
    };
  }
});
export {
  j as default
};
