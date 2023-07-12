import { defineComponent as m, computed as u, resolveComponent as f, openBlock as c, createElementBlock as b, createVNode as a, withCtx as r, createTextVNode as g } from "vue";
import "./style/index.css";
import i from "../CdDatePicker/index.vue.mjs";
const k = { class: "cd-datepicker-range" }, v = m({ name: "CdDatePickerRange" }), B = /* @__PURE__ */ m({
  ...v,
  props: {
    keys: { default: () => [] },
    startDate: { default: "" },
    endDate: { default: "" },
    startDateDisabled: { type: Boolean, default: !1 },
    endDateDisabled: { type: Boolean, default: !1 },
    allDisabled: { type: Boolean, default: !1 }
  },
  emits: ["update:startDate", "update:endDate"],
  setup(D, { emit: s }) {
    const n = D, d = u({
      get: () => n.startDate || "",
      set: (e) => {
        s("update:startDate", e);
      }
    }), l = u({
      get: () => n.endDate || "",
      set: (e) => {
        s("update:endDate", e);
      }
    });
    return (e, t) => {
      const p = f("Form-item");
      return c(), b("div", k, [
        a(p, {
          class: "cd-datepicker-range-item",
          prop: e.keys[0]
        }, {
          default: r(() => [
            a(i, {
              modelValue: d.value,
              "onUpdate:modelValue": t[0] || (t[0] = (o) => d.value = o),
              type: "date",
              datePos: "start",
              dateJudge: l.value,
              disabled: e.startDateDisabled || e.allDisabled
            }, null, 8, ["modelValue", "dateJudge", "disabled"])
          ]),
          _: 1
        }, 8, ["prop"]),
        g(" - "),
        a(p, {
          class: "cd-datepicker-range-item",
          prop: e.keys[1]
        }, {
          default: r(() => [
            a(i, {
              modelValue: l.value,
              "onUpdate:modelValue": t[1] || (t[1] = (o) => l.value = o),
              type: "date",
              datePos: "end",
              dateJudge: d.value,
              disabled: e.endDateDisabled || e.allDisabled
            }, null, 8, ["modelValue", "dateJudge", "disabled"])
          ]),
          _: 1
        }, 8, ["prop"])
      ]);
    };
  }
});
export {
  B as default
};
