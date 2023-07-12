import { defineComponent as i, computed as s, openBlock as D, createElementBlock as c, createVNode as r, createTextVNode as p } from "vue";
import "./style/index.css";
import m from "../CdDatePicker/index.vue.mjs";
const V = { class: "dateBox" }, b = i({ name: "CdDateRange" }), B = /* @__PURE__ */ i({
  ...b,
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    transfer: {
      type: Boolean,
      default: !0
    },
    startDateDisabled: {
      type: Boolean,
      default: !1
    },
    endDateDisabled: {
      type: Boolean,
      default: !1
    },
    allDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: f }) {
    const u = a, t = s({
      get() {
        var e;
        return ((e = u.modelValue) == null ? void 0 : e[0]) ?? "";
      },
      set(e) {
        n([e, l.value]);
      }
    }), l = s({
      get() {
        var e;
        return ((e = u.modelValue) == null ? void 0 : e[1]) ?? "";
      },
      set(e) {
        n([t.value, e]);
      }
    }), n = (e) => {
      f("update:modelValue", e);
    };
    return (e, d) => (D(), c("div", V, [
      r(m, {
        modelValue: t.value,
        "onUpdate:modelValue": d[0] || (d[0] = (o) => t.value = o),
        type: "date",
        datePos: "start",
        dateJudge: l.value,
        transfer: a.transfer,
        disabled: a.startDateDisabled || a.allDisabled
      }, null, 8, ["modelValue", "dateJudge", "transfer", "disabled"]),
      p(" - "),
      r(m, {
        modelValue: l.value,
        "onUpdate:modelValue": d[1] || (d[1] = (o) => l.value = o),
        type: "date",
        datePos: "end",
        dateJudge: t.value,
        transfer: a.transfer,
        disabled: a.endDateDisabled || a.allDisabled
      }, null, 8, ["modelValue", "dateJudge", "transfer", "disabled"])
    ]));
  }
});
export {
  B as default
};
