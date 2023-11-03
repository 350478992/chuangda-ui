import { defineComponent as W, ref as w, watch as Q, onMounted as X, resolveComponent as c, openBlock as r, createElementBlock as o, withDirectives as V, createVNode as u, vShow as O, withCtx as d, Fragment as y, renderList as v, createBlock as P, normalizeStyle as $, createElementVNode as S, normalizeClass as j, toDisplayString as C, createTextVNode as N, createCommentVNode as b, unref as I, renderSlot as q, createSlots as Y } from "vue";
import "./style/index.css";
import B from "@/config";
import { CdFormField as L } from "../CdFormField/index.mjs";
import { defaultFormItemConfig as k } from "@/common/const";
const Z = { class: "form-box" }, G = { class: "group-box" }, ee = { class: "font-700" }, te = W({ name: "CdFormItemPanel" }), se = /* @__PURE__ */ W({
  ...te,
  props: {
    formItemConfig: {
      type: Object,
      default: () => k
    },
    size: {
      type: String,
      default: B.defaultFormSize || "default"
    },
    noShowFieldControl: {
      type: Array,
      default: () => []
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    showRequired: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      required: !0
    },
    viewNo: {
      type: String,
      required: !0
    },
    attrPrefix: {
      type: String,
      default: ""
    },
    formObject: {
      type: Object,
      required: !0
    },
    ruleValidate: {
      type: Object,
      default: () => ({})
    },
    slots: {
      type: Array,
      default: () => []
    },
    fullItemKeys: {
      // 独占一行全宽 字段
      type: Array,
      default: () => []
    },
    // 默认不展开的分组下标[0,1 , 2 ...]
    defaultClosePanels: {
      type: Array,
      default: () => []
    }
  },
  emits: ["renderPercentPath"],
  setup(l, { emit: ae }) {
    const i = l, z = w(B.showSubformPanelProp), D = w(1), A = w(!1), F = w([]), s = w(k);
    Q(() => i.formItemConfig, (e) => {
      _();
    });
    const _ = async () => {
      const { formItemConfig: e } = i;
      e != null && e.formcol && (e.formcol = parseInt(String(e.formcol))), s.value = e || k, x(e == null ? void 0 : e.columns), E(e == null ? void 0 : e.groups);
    }, x = (e = []) => {
      e.length > 0 && e.forEach((n) => U(n));
    }, E = (e = []) => {
      e.length > 0 && e.forEach((n, f) => {
        var p;
        x((n == null ? void 0 : n.columns) ?? []), (p = i.defaultClosePanels) != null && p.includes(f) || F.value.push(`${f}`);
      }), s.value.groups = e;
    }, U = (e) => {
      const { compLength: n, dictType: f, dictParentId: p, dictParentValue: g } = e;
      e.viewId = s.value.id, e.compLength = n ? `${n}px` : "100%", e.dictConf = { type: f || "", parentId: p || "", parentValue: g || "" }, e.colWidth = e.isLine === "1" ? 24 : 24 / s.value.formcol;
    }, R = (e) => {
      if (i.showRequired)
        return { required: e.isNull === "1", message: "请填写" + e.comments, trigger: "blur" };
    }, K = (e) => {
      var n;
      return e.colWidth === 24 ? e.showType === "textarea" ? "width:98%;" : (n = i.fullItemKeys) != null && n.includes(e.name) ? "width:100%;" : `width:${1 / s.value.formcol * 100}%;` : "width: 100%;";
    };
    return X(() => {
      i.viewNo && s.value.columns.length === 0 && _();
    }), (e, n) => {
      const f = c("Progress"), p = c("Form-item"), g = c("Col"), T = c("Row"), M = c("Panel"), H = c("Collapse");
      return r(), o("div", Z, [
        V(u(f, {
          percent: D.value,
          "hide-info": ""
        }, null, 8, ["percent"]), [
          [O, A.value]
        ]),
        u(T, null, {
          default: d(() => [
            (r(!0), o(y, null, v(s.value.columns, (t) => V((r(), P(g, {
              span: t.colWidth,
              key: t.id
            }, {
              default: d(() => [
                u(p, {
                  rules: R(t),
                  style: $(t.colWidth == 24 && t.showType == "textarea" ? "width:98%;" : ""),
                  label: t.comments,
                  "label-width": 200,
                  prop: t.name
                }, {
                  default: d(() => [
                    S("span", {
                      slot: "label",
                      class: j(t.styleName)
                    }, C(t.comments), 3),
                    t.showType !== "hidden" ? (r(), o(y, { key: 0 }, [
                      N(C(z.value ? `${t.name},${t.dbName}` : ""), 1)
                    ], 64)) : b("", !0),
                    u(I(L), {
                      modelValue: l.formObject[l.attrPrefix + t.name],
                      "onUpdate:modelValue": (h) => l.formObject[l.attrPrefix + t.name] = h,
                      type: t.showType,
                      size: l.size,
                      name: t.name,
                      prop: t.name,
                      disabled: t.isReadonly === "1",
                      readonly: t.isReadonly === "1" || l.readOnly,
                      width: t.compLength,
                      dictConf: t.dictConf
                    }, {
                      default: d(() => [
                        (r(!0), o(y, null, v(l.slots, (h, a) => (r(), o(y, null, [
                          t.name == h ? (r(), o("div", { key: a }, [
                            q(e.$slots, h)
                          ])) : b("", !0)
                        ], 64))), 256))
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "type", "size", "name", "prop", "disabled", "readonly", "width", "dictConf"])
                  ]),
                  _: 2
                }, 1032, ["rules", "style", "label", "prop"])
              ]),
              _: 2
            }, 1032, ["span"])), [
              [O, t.showType !== "hidden"]
            ])), 128))
          ]),
          _: 3
        }),
        S("div", G, [
          u(H, { "model-value": F.value }, {
            default: d(() => [
              (r(!0), o(y, null, v(s.value.groups, (t, h) => (r(), P(M, {
                name: `${h}`,
                key: t.id
              }, {
                content: d(() => [
                  u(T, null, {
                    default: d(() => [
                      (r(!0), o(y, null, v(t.columns, (a) => V((r(), P(g, {
                        span: a.colWidth,
                        key: a.id
                      }, {
                        default: d(() => [
                          l.noShowFieldControl.indexOf(a.name) == -1 ? (r(), P(p, {
                            key: 0,
                            rules: R(a),
                            style: $(K(a)),
                            "label-width": 200,
                            prop: a.name
                          }, {
                            label: d(() => [
                              S("span", {
                                class: j(a.styleName)
                              }, C(a.comments), 3)
                            ]),
                            default: d(() => [
                              a.showType !== "hidden" ? (r(), o(y, { key: 0 }, [
                                N(C(z.value ? a.name : ""), 1)
                              ], 64)) : b("", !0),
                              u(I(L), {
                                modelValue: l.formObject[a.name],
                                "onUpdate:modelValue": (m) => l.formObject[a.name] = m,
                                type: a.showType,
                                size: l.size,
                                name: a.name,
                                prop: a.name,
                                readonly: a.isReadonly === "1" || l.readOnly,
                                disabled: a.isReadonly === "1",
                                width: a.compLength,
                                dictConf: a.dictConf,
                                dictData: a.dictData
                              }, Y({ _: 2 }, [
                                v(i.slots, (m, J) => ({
                                  name: m,
                                  fn: d(() => [
                                    a.name == m ? (r(), o("div", { key: J }, [
                                      q(e.$slots, m)
                                    ])) : b("", !0)
                                  ])
                                }))
                              ]), 1032, ["modelValue", "onUpdate:modelValue", "type", "size", "name", "prop", "readonly", "disabled", "width", "dictConf", "dictData"])
                            ]),
                            _: 2
                          }, 1032, ["rules", "style", "prop"])) : b("", !0)
                        ]),
                        _: 2
                      }, 1032, ["span"])), [
                        [O, a.showType !== "hidden"]
                      ])), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                default: d(() => [
                  S("span", ee, C(t.name), 1)
                ]),
                _: 2
              }, 1032, ["name"]))), 128))
            ]),
            _: 3
          }, 8, ["model-value"])
        ])
      ]);
    };
  }
});
export {
  se as default
};
