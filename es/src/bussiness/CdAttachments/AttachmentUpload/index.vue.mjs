import { defineComponent as b, useAttrs as F, computed as $, reactive as w, resolveComponent as d, openBlock as C, createBlock as y, withCtx as s, createVNode as o, createElementVNode as r, createCommentVNode as x, mergeProps as B, unref as D } from "vue";
import "./style/index.css";
import O from "../../../basic/CdModal/index.vue.mjs";
import m from "../../../basic/CdSelect/index.vue.mjs";
import S from "./UploadBtn.vue.mjs";
const W = { class: "title-box" }, J = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式一: 本地选择上传", -1), L = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式二: 手机扫码上传", -1), U = b({ name: "CdAttachments" }), R = /* @__PURE__ */ b({
  ...U,
  props: {
    modelValue: { type: Boolean },
    fileTitleShow: { type: Boolean, default: !0 },
    attCategoryDisabled: { type: Boolean, default: !0 },
    attClassDisabled: { type: Boolean, default: !1 },
    attitleDisabled: { type: Boolean, default: !1 },
    attrefsysid: {},
    atttype: {},
    attCategory: { default: "02" },
    attClass: { default: "" },
    attitle: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(_, { emit: V }) {
    const l = _, c = F(), n = $({
      get: () => l.modelValue,
      set: () => {
        V("update:modelValue");
      }
    }), e = w({
      attrefsysid: l.attrefsysid,
      atttype: l.atttype,
      attCategory: l.attCategory,
      attClass: l.attClass,
      attitle: l.attitle
    }), p = (u) => {
      u === 1 && (e.attClass = ""), e.attitle = "";
    };
    return (u, t) => {
      const v = d("Form-item"), i = d("Col"), f = d("Row"), g = d("Form");
      return C(), y(O, {
        class: "cd-attchemnt-upload",
        modelValue: n.value,
        "onUpdate:modelValue": t[6] || (t[6] = (a) => n.value = a),
        title: "附件上传",
        "footer-hide": !0,
        onOnCancel: t[7] || (t[7] = (a) => n.value = !1)
      }, {
        default: s(() => [
          o(g, {
            model: e,
            "label-width": 100
          }, {
            default: s(() => [
              l.fileTitleShow ? (C(), y(f, { key: 0 }, {
                default: s(() => [
                  o(i, { span: 24 }, {
                    default: s(() => [
                      o(v, {
                        label: "附件标题:",
                        prop: "attitle",
                        "label-width": 85
                      }, {
                        default: s(() => [
                          r("div", W, [
                            o(m, {
                              class: "title-box-item",
                              modelValue: e.attCategory,
                              "onUpdate:modelValue": t[0] || (t[0] = (a) => e.attCategory = a),
                              type: "SCFJFL2.0",
                              "p-val": "SCFJFL2.0",
                              disabled: l.attCategoryDisabled,
                              onOnChange: t[1] || (t[1] = (a) => p(1))
                            }, null, 8, ["modelValue", "disabled"]),
                            o(m, {
                              class: "title-box-item",
                              modelValue: e.attClass,
                              "onUpdate:modelValue": t[2] || (t[2] = (a) => e.attClass = a),
                              type: "SCFJFL2.0",
                              "p-val": e.attCategory,
                              disabled: l.attClassDisabled,
                              onOnChange: t[3] || (t[3] = (a) => p(2))
                            }, null, 8, ["modelValue", "p-val", "disabled"]),
                            o(m, {
                              class: "title-box-item",
                              modelValue: e.attitle,
                              "onUpdate:modelValue": t[4] || (t[4] = (a) => e.attitle = a),
                              type: "SCFJFL2.0",
                              "p-val": e.attClass,
                              disabled: l.attitleDisabled
                            }, null, 8, ["modelValue", "p-val", "disabled"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : x("", !0),
              o(f, { class: "innerWrap" }, {
                default: s(() => [
                  o(i, {
                    class: "innerWrap-item item-l",
                    span: 12
                  }, {
                    default: s(() => [
                      J,
                      o(S, B({
                        class: "innerWrap-item-cont",
                        formObj: e
                      }, D(c), {
                        onOnCancel: t[5] || (t[5] = (a) => n.value = !1)
                      }), null, 16, ["formObj"])
                    ]),
                    _: 1
                  }),
                  o(i, {
                    class: "innerWrap-item",
                    span: 12
                  }, {
                    default: s(() => [
                      L
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  R as default
};
