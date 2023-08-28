import { defineComponent as _, useAttrs as F, computed as $, reactive as D, resolveComponent as d, openBlock as C, createBlock as y, withCtx as s, createVNode as l, createElementVNode as r, createCommentVNode as w, mergeProps as x, unref as B } from "vue";
import "./style/index.css";
import W from "../../../basic/CdModal/index.vue.mjs";
import m from "../../../basic/CdSelect/index.vue.mjs";
import O from "./Qrcode.vue.mjs";
import S from "./UploadBtn.vue.mjs";
const J = { class: "title-box" }, L = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式一: 本地选择上传", -1), U = /* @__PURE__ */ r("p", { class: "innerWrap-item-ttl" }, "方式二: 手机扫码上传", -1), k = _({ name: "CdAttachments" }), H = /* @__PURE__ */ _({
  ...k,
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
  setup(c, { emit: b }) {
    const o = c, V = F(), n = $({
      get: () => o.modelValue,
      set: () => {
        b("update:modelValue");
      }
    }), e = D({
      attrefsysid: o.attrefsysid,
      atttype: o.atttype,
      attCategory: o.attCategory,
      attClass: o.attClass,
      attitle: o.attitle
    }), p = (u) => {
      u === 1 && (e.attClass = ""), e.attitle = "";
    };
    return (u, t) => {
      const v = d("Form-item"), i = d("Col"), f = d("Row"), g = d("Form");
      return C(), y(W, {
        class: "cd-attchemnt-upload",
        modelValue: n.value,
        "onUpdate:modelValue": t[6] || (t[6] = (a) => n.value = a),
        title: "附件上传",
        "footer-hide": !0,
        onOnCancel: t[7] || (t[7] = (a) => n.value = !1)
      }, {
        default: s(() => [
          l(g, {
            model: e,
            "label-width": 100
          }, {
            default: s(() => [
              o.fileTitleShow ? (C(), y(f, { key: 0 }, {
                default: s(() => [
                  l(i, { span: 24 }, {
                    default: s(() => [
                      l(v, {
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
              })) : w("", !0),
              l(f, { class: "innerWrap" }, {
                default: s(() => [
                  l(i, {
                    class: "innerWrap-item item-l",
                    span: 12
                  }, {
                    default: s(() => [
                      L,
                      l(S, x({
                        class: "innerWrap-item-cont",
                        formObj: e
                      }, B(V), {
                        onOnCancel: t[5] || (t[5] = (a) => n.value = !1)
                      }), null, 16, ["formObj"])
                    ]),
                    _: 1
                  }),
                  l(i, {
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
  H as default
};
