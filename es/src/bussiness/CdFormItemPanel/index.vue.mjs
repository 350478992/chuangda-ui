import { defineComponent as j, reactive as D, ref as K, computed as M, onMounted as H, resolveComponent as p, openBlock as r, createElementBlock as l, withDirectives as J, createVNode as s, vShow as Q, createElementVNode as y, withCtx as i, Fragment as m, renderList as C, createBlock as b, normalizeStyle as x, normalizeClass as z, toDisplayString as w, createTextVNode as O, unref as _, renderSlot as k, createCommentVNode as P } from "vue";
import V from "@/config";
import { getFormConfig as X } from "@/api/system/layoutApi";
import { CdFormField as $ } from "../CdFormField/index.mjs";
import { useLocalStorage as Y } from "@/use/useLocalStorage";
import { handleResponse as Z } from "@/util";
const G = { class: "form-box" }, ee = { class: "group-box" }, te = { class: "font-700" }, oe = { slot: "content" }, ae = j({ name: "CdFormItemPanel" }), me = /* @__PURE__ */ j({
  ...ae,
  props: {
    size: {
      type: String,
      default: V.defaultFormSize || "default"
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
    defaultClosePanel: {
      type: Array,
      default: () => []
    }
  },
  emits: ["renderPercentPath"],
  setup(n, { emit: ne }) {
    const u = n, d = D({
      formConfig: {
        // 表单配置
        id: "",
        no: "",
        name: "",
        type: "",
        formcol: 1,
        // 表单风格，意思是，一行占几列
        dictColumns: [],
        groups: [],
        columns: []
      },
      renderPercent: 1,
      showRenderPercent: !1
    }), S = K(V.showSubformPanelProp), I = M(() => 24 / d.formConfig.formcol), L = (e) => {
      var a;
      return (a = u.defaultClosePanel) == null ? void 0 : a.includes(e);
    }, T = async () => {
      let {
        value: e,
        setValue: a,
        removeItem: h
      } = Y(u.viewNo, "");
      if (!(V.viewConfigCache && e)) {
        const f = await X(u.viewNo);
        Z(f, () => {
          e = f.data, e && (d.formConfig = e, a(e), F(e.columns), W(e.groups));
        });
      }
    }, F = (e = []) => {
      e.length > 0 && e.forEach((a) => q(a));
    }, W = (e = []) => {
      e.length > 0 && e.forEach((a) => {
        F((a == null ? void 0 : a.columns) ?? []);
      }), d.formConfig.groups = e;
    }, q = (e) => {
      const { compLength: a, dictType: h, dictParentId: f, dictParentValue: g } = e;
      e.viewId = d.formConfig.id, e.compLength = a ? `${a}px` : "100%", e.dictConf = { dictType: h || "", dictParentId: f || "", dictParentValue: g || "" }, e.colWidth = e.isLine === "1" ? 24 : I.value;
    }, N = (e) => {
      if (u.showRequired)
        return { required: e.isNull === "1", message: "请填写" + e.comments, trigger: "blur" };
    }, B = (e) => {
      var a;
      return e.colWidth === 24 ? e.showType === "textarea" ? "width:98%;" : (a = u.fullItemKeys) != null && a.includes(e.name) ? "width:100%;" : `width:${1 / d.formConfig.formcol * 100}%;` : "width: 100%;";
    };
    return H(() => {
      u.viewNo && d.formConfig.columns.length === 0 && T();
    }), (e, a) => {
      const h = p("Progress"), f = p("Form-item"), g = p("Col"), R = p("Row"), A = p("Panel"), E = p("Collapse");
      return r(), l("div", G, [
        J(s(h, {
          percent: d.renderPercent,
          "hide-info": ""
        }, null, 8, ["percent"]), [
          [Q, d.showRenderPercent]
        ]),
        y("div", null, [
          s(R, null, {
            default: i(() => [
              (r(!0), l(m, null, C(d.formConfig.columns, (t) => (r(), b(g, {
                span: t.colWidth,
                key: t.id
              }, {
                default: i(() => [
                  s(f, {
                    rules: N(t),
                    style: x(t.colWidth == 24 && t.showType == "textarea" ? "width:98%;" : ""),
                    label: t.comments,
                    "label-width": 200,
                    prop: t.name
                  }, {
                    default: i(() => [
                      y("span", {
                        slot: "label",
                        class: z(t.styleName)
                      }, w(t.comments), 3),
                      O(" " + w(S.value ? `${t.name},${t.dbName}` : "") + " ", 1),
                      s(_($), {
                        modelValue: n.formObject[n.attrPrefix + t.name],
                        "onUpdate:modelValue": (c) => n.formObject[n.attrPrefix + t.name] = c,
                        type: t.showType,
                        size: n.size,
                        name: t.name,
                        prop: t.name,
                        disabled: t.isReadonly === "1",
                        readonly: t.isReadonly === "1" || n.readOnly,
                        width: t.compLength,
                        dictConf: t.dictConf
                      }, {
                        default: i(() => [
                          (r(!0), l(m, null, C(n.slots, (c, o) => (r(), l(m, null, [
                            t.name == c ? (r(), l("div", { key: o }, [
                              k(e.$slots, c)
                            ])) : P("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "type", "size", "name", "prop", "disabled", "readonly", "width", "dictConf"])
                    ]),
                    _: 2
                  }, 1032, ["rules", "style", "label", "prop"])
                ]),
                _: 2
              }, 1032, ["span"]))), 128))
            ]),
            _: 3
          })
        ]),
        y("div", ee, [
          (r(!0), l(m, null, C(d.formConfig.groups, (t, c) => (r(), l("div", {
            key: t.id
          }, [
            s(E, {
              class: "my-collapse",
              value: t.id
            }, {
              default: i(() => [
                s(A, {
                  name: L(c) ? "" : t.id
                }, {
                  default: i(() => [
                    y("span", te, w(t.name), 1),
                    y("div", oe, [
                      s(R, null, {
                        default: i(() => [
                          (r(!0), l(m, null, C(t.columns, (o) => (r(), b(g, {
                            span: o.colWidth,
                            key: o.id
                          }, {
                            default: i(() => [
                              n.noShowFieldControl.indexOf(o.name) == -1 ? (r(), b(f, {
                                key: 0,
                                rules: N(o),
                                style: x(B(o)),
                                label: o.comments,
                                "label-width": 200,
                                prop: o.name
                              }, {
                                default: i(() => [
                                  y("span", {
                                    slot: "label",
                                    class: z(o.styleName)
                                  }, w(o.comments), 3),
                                  O(" " + w(S.value ? o.name : "") + " ", 1),
                                  s(_($), {
                                    modelValue: n.formObject[o.name],
                                    "onUpdate:modelValue": (v) => n.formObject[o.name] = v,
                                    type: o.showType,
                                    size: n.size,
                                    name: o.name,
                                    prop: o.name,
                                    readonly: o.isReadonly === "1" || n.readOnly,
                                    disabled: o.isReadonly === "1",
                                    width: o.compLength,
                                    dictConf: o.dictConf
                                  }, {
                                    default: i(() => [
                                      (r(!0), l(m, null, C(n.slots, (v, U) => (r(), l(m, null, [
                                        o.name == v ? (r(), l("div", { key: U }, [
                                          k(e.$slots, v)
                                        ])) : P("", !0)
                                      ], 64))), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "type", "size", "name", "prop", "readonly", "disabled", "width", "dictConf"])
                                ]),
                                _: 2
                              }, 1032, ["rules", "style", "label", "prop"])) : P("", !0)
                            ]),
                            _: 2
                          }, 1032, ["span"]))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1032, ["name"])
              ]),
              _: 2
            }, 1032, ["value"])
          ]))), 128))
        ])
      ]);
    };
  }
});
export {
  me as default
};
