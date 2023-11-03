import { defineComponent as C, useAttrs as p, ref as k, watch as x, resolveComponent as c, openBlock as d, createElementBlock as s, createBlock as n, unref as v, normalizeStyle as y, renderSlot as I, Fragment as S, createTextVNode as D, toDisplayString as b } from "vue";
import { CdRadioGroup as z } from "../../basic/CdRadioGroup/index.mjs";
import { CdCheckboxGroup as O } from "../../basic/CdCheckboxGroup/index.mjs";
import { CdCascader as $ } from "../../basic/CdCascader/index.mjs";
import { formatTimeToStr as h } from "@/util";
const B = ["value"], M = C({ name: "CdFormField" }), G = /* @__PURE__ */ C({
  ...M,
  props: {
    type: {
      //组件类型
      type: String,
      required: !0
    },
    name: {
      //组件名称
      type: String,
      required: !0
    },
    modelValue: {
      //控件值
      type: [String, Array, Date, Number],
      default: ""
    },
    required: {
      //是否必填
      type: Boolean,
      default: !0
    },
    readonly: {
      //是否只读
      type: Boolean,
      default: !1
    },
    disabled: {
      //是否禁用
      type: Boolean,
      default: !1
    },
    width: {
      //控件长度
      type: String,
      default: ""
    },
    color: {
      //标签颜色
      type: String,
      default: "#ffffff"
    },
    dictConf: {
      type: Object,
      default: () => ({
        type: "",
        parentId: "",
        parentValue: ""
      })
    },
    dictData: {
      type: Array
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: w }) {
    const m = e;
    p();
    const t = k(m.modelValue);
    x(
      () => m.modelValue,
      (l) => {
        u(l);
      }
    );
    const g = (l) => {
      let a = "";
      l && (a = l.dictDataId3 || l.dictDataId2 || l.dictDataId1), t.value = a, f(a);
    }, u = (l) => {
      const { name: a, type: i } = m;
      console.log(`属性名称：${a}, 组件类型：${i}, 类型：${typeof l}, 值：${l}`), l ? i == "year" ? t.value = h(l, "yyyy") : i == "dateselect" ? t.value = h(l, "yyyy-MM-dd") : i == "timeselect" ? t.value = h(l, "yyyy-MM-dd hh:mm:ss") : (i == "daterange", t.value = l) : t.value = "", f(t.value);
    }, f = (...l) => {
      w("update:modelValue", ...l);
    };
    return (l, a) => {
      const i = c("Input"), V = c("CdSelect"), r = c("DatePicker");
      return d(), s("div", null, [
        e.type == "textarea" ? (d(), n(i, {
          key: 0,
          type: "textarea",
          size: "default",
          autosize: !0,
          modelValue: t.value,
          "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value = o),
          modelModifiers: { trim: !0 },
          onOnChange: a[1] || (a[1] = (o) => f(t.value)),
          readonly: e.readonly
        }, null, 8, ["modelValue", "readonly"])) : e.type == "select" ? (d(), n(V, {
          key: 1,
          value: t.value,
          type: e.dictConf.type,
          pId: e.dictConf.parentId,
          pVal: e.dictConf.parentValue,
          list: e.dictData,
          onChange: u,
          width: e.width
        }, null, 8, ["value", "type", "pId", "pVal", "list", "width"])) : e.type == "radiobox" ? (d(), n(v(z), {
          key: 2,
          value: t.value,
          type: e.dictConf.type,
          pId: e.dictConf.parentId,
          pVal: e.dictConf.parentValue,
          list: e.dictData,
          onChangeCall: u,
          width: e.width
        }, null, 8, ["value", "type", "pId", "pVal", "list", "width"])) : e.type == "checkbox" ? (d(), n(v(O), {
          key: 3,
          value: t.value,
          type: e.dictConf.type,
          pId: e.dictConf.parentId,
          pVal: e.dictConf.parentValue,
          list: e.dictData,
          onChangeCall: u,
          width: e.width
        }, null, 8, ["value", "type", "pId", "pVal", "list", "width"])) : e.type == "dateselect" ? (d(), n(r, {
          key: 4,
          type: "date",
          size: "default",
          style: y({ width: e.width + "px" }),
          value: t.value,
          onOnChange: u
        }, null, 8, ["style", "value"])) : e.type == "daterange" ? (d(), n(r, {
          key: 5,
          type: "daterange",
          size: "default",
          style: y({ width: e.width + "px" }),
          value: t.value,
          onOnChange: u
        }, null, 8, ["style", "value"])) : e.type == "timeselect" ? (d(), n(r, {
          key: 6,
          type: "datetime",
          size: "default",
          style: y({ width: e.width + "px" }),
          value: t.value,
          onOnChange: u
        }, null, 8, ["style", "value"])) : e.type == "datetimerange" ? (d(), n(r, {
          key: 7,
          type: "datetimerange",
          size: "default",
          style: y({ width: e.width + "px" }),
          value: t.value,
          onOnChange: u
        }, null, 8, ["style", "value"])) : e.type == "year" ? (d(), n(r, {
          key: 8,
          type: "year",
          size: "default",
          style: y({ width: e.width + "px" }),
          value: t.value,
          onOnChange: u
        }, null, 8, ["style", "value"])) : e.type == "areaselect" ? (d(), n(v($), {
          key: 9,
          dictType: "sys_area",
          parentValue: "000000",
          onOnChangeCall: g,
          modelValue: t.value,
          "onUpdate:modelValue": a[2] || (a[2] = (o) => t.value = o),
          style: y({ width: e.width + "px", "margin-top": "-4px" })
        }, null, 8, ["modelValue", "style"])) : e.type == "slot" ? I(l.$slots, e.name, {
          key: 10,
          style: y({ width: e.width + "px" })
        }, void 0, !0) : e.type == "label" ? (d(), s(S, { key: 11 }, [
          D(b(t.value), 1)
        ], 64)) : e.type == "hidden" ? (d(), s("input", {
          key: 12,
          type: "hidden",
          value: t.value
        }, null, 8, B)) : (d(), n(i, {
          key: 13,
          disabled: e.disabled,
          readonly: e.readonly,
          size: "default",
          modelValue: t.value,
          "onUpdate:modelValue": a[3] || (a[3] = (o) => t.value = o),
          modelModifiers: { trim: !0 },
          onInput: u,
          style: y({ width: e.width + "px" })
        }, null, 8, ["disabled", "readonly", "modelValue", "style"]))
      ]);
    };
  }
});
export {
  G as default
};
