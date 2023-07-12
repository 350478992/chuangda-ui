import { defineComponent as g, useAttrs as F, computed as $, reactive as x, resolveComponent as i, openBlock as C, createBlock as y, withCtx as s, createVNode as l, createElementVNode as r, createCommentVNode as D, mergeProps as w, unref as B } from "vue";
import "./style/index.css";
import W from "../../../basic/CdModal/index.vue.mjs";
import m from "../../../basic/CdSelect/index.vue.mjs";
import O from "./Qrcode.vue.mjs";
import S from "./UploadBtn.vue.mjs";
const J = { class: "title-box" }, L = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式一: 本地选择上传", -1), U = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式二: 手机扫码上传", -1), E = /* @__PURE__ */ g({
  __name: "index",
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
  setup(b, { emit: _ }) {
    const o = b, c = F(), n = $({
      get: () => o.modelValue,
      set: () => {
        _("update:modelValue");
      }
    }), e = x({
      attrefsysid: o.attrefsysid,
      atttype: o.atttype,
      attCategory: o.attCategory,
      attClass: o.attClass,
      attitle: o.attitle
    }), p = (u) => {
      u === 1 && (e.attClass = ""), e.attitle = "";
    };
    return (u, t) => {
      const V = i("Form-item"), d = i("Col"), f = i("Row"), v = i("Form");
      return C(), y(W, {
        class: "cd-attchemnt-upload",
        modelValue: n.value,
        "onUpdate:modelValue": t[6] || (t[6] = (a) => n.value = a),
        title: "附件上传",
        "footer-hide": !0,
        onOnCancel: t[7] || (t[7] = (a) => n.value = !1)
      }, {
        default: s(() => [
          l(v, {
            model: e,
            "label-width": 100
          }, {
            default: s(() => [
              o.fileTitleShow ? (C(), y(f, { key: 0 }, {
                default: s(() => [
                  l(d, { span: 24 }, {
                    default: s(() => [
                      l(V, {
                        label: "附件标题:",
                        prop: "attitle",
                        "label-width": 85
                      }, {
                        default: s(() => [
                          r("div", J, [
                            l(m, {
                              class: "title-box-item",
                              modelValue: e.attCategory,
                              "onUpdate:modelValue": t[0] || (t[0] = (a) => e.attCategory = a),
                              type: "SCFJFL2.0",
                              "p-val": "SCFJFL2.0",
                              disabled: o.attCategoryDisabled,
                              onOnChange: t[1] || (t[1] = (a) => p(1))
                            }, null, 8, ["modelValue", "disabled"]),
                            l(m, {
                              class: "title-box-item",
                              modelValue: e.attClass,
                              "onUpdate:modelValue": t[2] || (t[2] = (a) => e.attClass = a),
                              type: "SCFJFL2.0",
                              "p-val": e.attCategory,
                              disabled: o.attClassDisabled,
                              onOnChange: t[3] || (t[3] = (a) => p(2))
                            }, null, 8, ["modelValue", "p-val", "disabled"]),
                            l(m, {
                              class: "title-box-item",
                              modelValue: e.attitle,
                              "onUpdate:modelValue": t[4] || (t[4] = (a) => e.attitle = a),
                              type: "SCFJFL2.0",
                              "p-val": e.attClass,
                              disabled: o.attitleDisabled
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
              })) : D("", !0),
              l(f, { class: "innerWrap" }, {
                default: s(() => [
                  l(d, {
                    class: "innerWrap-item item-l",
                    span: 12
                  }, {
                    default: s(() => [
                      L,
                      l(S, w({
                        class: "innerWrap-item-cont",
                        formObj: e
                      }, B(c), {
                        onOnCancel: t[5] || (t[5] = (a) => n.value = !1)
                      }), null, 16, ["formObj"])
                    ]),
                    _: 1
                  }),
                  l(d, {
                    class: "innerWrap-item",
                    span: 12
                  }, {
                    default: s(() => [
                      U,
                      l(O, {
                        class: "innerWrap-item-cont",
                        formData: e
                      }, null, 8, ["formData"])
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
  E as default
};
