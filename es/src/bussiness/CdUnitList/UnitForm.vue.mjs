import { defineComponent as p, computed as s, inject as u, resolveComponent as k, resolveDirective as H, openBlock as d, createBlock as i, unref as m, withCtx as o, withDirectives as S, createTextVNode as c, createVNode as w, renderSlot as x } from "vue";
import { CdModal as T } from "../../basic/CdModal/index.mjs";
const U = p({ name: "UnitForm" }), q = /* @__PURE__ */ p({
  ...U,
  props: {
    modelValue: { type: Boolean },
    type: {},
    optType: {},
    id: {}
  },
  emits: [
    "update:modelValue",
    "after-save",
    "unitform-save"
  ],
  setup(f, { emit: a }) {
    const n = f, e = s({
      get: () => n.modelValue,
      set: () => a("update:modelValue")
    }), v = s(() => {
      switch (n.type) {
        case "1":
          return "监察机构信息";
        case "2":
          return "业务单位信息";
        case "3":
          return "检验单位信息";
        default:
          return "";
      }
    }), V = u("computedPermission"), _ = () => {
      a("unitform-save");
    }, y = u("queryHandle"), C = () => {
      e.value = !1, y();
    };
    return (B, t) => {
      const l = k("Button"), P = H("hasPermission");
      return d(), i(m(T), {
        class: "cd-unit-form",
        modelValue: e.value,
        "onUpdate:modelValue": t[1] || (t[1] = (r) => e.value = r),
        title: v.value,
        size: "large"
      }, {
        footer: o(() => [
          S((d(), i(l, {
            type: "primary",
            onClick: _
          }, {
            default: o(() => [
              c(" 保存 ")
            ]),
            _: 1
          })), [
            [P, m(V)]
          ]),
          w(l, {
            onClick: t[0] || (t[0] = (r) => e.value = !1)
          }, {
            default: o(() => [
              c("取消")
            ]),
            _: 1
          })
        ]),
        default: o(() => [
          x(B.$slots, "default", {
            formProps: n,
            afterSave: C
          })
        ]),
        _: 3
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  q as default
};
