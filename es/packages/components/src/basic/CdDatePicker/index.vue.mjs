import { defineComponent as r, computed as s, resolveComponent as g, openBlock as m, createBlock as f, mergeProps as h } from "vue";
import "./style/index.css";
const y = r({ name: "CdDatePicker" }), D = /* @__PURE__ */ r({
  ...y,
  props: {
    modelValue: { default: "" },
    type: {},
    size: {},
    placement: {},
    placeholder: { default: "请选择日期" },
    editable: { type: Boolean, default: !1 },
    datePos: { default: "" },
    dateJudge: { default: "" }
  },
  emits: ["update:modelValue", "on-change"],
  setup(p, { emit: n }) {
    const l = p, u = s({
      get: () => {
        const e = Object.prototype.toString.call(l.modelValue);
        if (e === "[object Array]")
          return l.modelValue.length === 0 ? l.type === "date" ? "" : [] : l.modelValue;
        if (e === "[object Date]") {
          const t = i(l.modelValue, "yyyy-MM-dd");
          return n("update:modelValue", t), t;
        } else
          return l.modelValue;
      },
      set: (e) => {
        n("update:modelValue", e);
      }
    }), c = s(() => {
      const e = new Date(l.dateJudge).valueOf() || 0;
      return {
        disabledDate(t) {
          let o = !1;
          const a = t && t.valueOf();
          return l.datePos && e !== 0 && (l.datePos === "start" ? o = a > e : o = a < e - 60 * 60 * 24 * 1e3), o;
        }
      };
    }), d = (e) => {
      n("update:modelValue", e), n("on-change", e);
    }, i = (e, t) => {
      const o = {
        "M+": e.getMonth() + 1,
        //月份
        "d+": e.getDate(),
        //日
        "h+": e.getHours(),
        //小时
        "m+": e.getMinutes(),
        //分
        "s+": e.getSeconds(),
        //秒
        "q+": Math.floor((e.getMonth() + 3) / 3),
        //季度
        S: e.getMilliseconds()
        //毫秒
      };
      /(y+)/.test(t) && (t = t.replace(
        RegExp.$1,
        (e.getFullYear() + "").substr(4 - RegExp.$1.length)
      ));
      for (let a in o)
        new RegExp("(" + a + ")").test(t) && (t = t.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? o[a] : ("00" + o[a]).substr(("" + o[a]).length)
        ));
      return t;
    };
    return (e, t) => {
      const o = g("DatePicker");
      return m(), f(o, h({
        class: "cd-datepicker",
        "model-value": u.value,
        type: l.type,
        placement: l.placement,
        size: l.size,
        placeholder: l.placeholder,
        options: c.value,
        "split-panels": !0,
        editable: !1,
        transfer: ""
      }, e.$attrs, { onOnChange: d }), null, 16, ["model-value", "type", "placement", "size", "placeholder", "options"]);
    };
  }
});
export {
  D as default
};
