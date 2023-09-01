import { defineComponent as q, ref as w, onMounted as J, resolveComponent as h, openBlock as l, createElementBlock as s, withDirectives as V, createVNode as u, vShow as x, withCtx as r, Fragment as p, renderList as v, createBlock as P, normalizeStyle as N, createElementVNode as S, normalizeClass as T, toDisplayString as C, createTextVNode as $, createCommentVNode as g, unref as I, renderSlot as j, createSlots as Q } from "vue";
import "./style/index.css";
import F from "@/config";
import { getFormConfig as X } from "@/api/system/layoutApi";
import { CdFormField as L } from "../CdFormField/index.mjs";
import { useLocalStorage as Y } from "@/use/useLocalStorage";
import { handleResponse as Z } from "@/util";
const G = { class: "form-box" }, ee = { class: "group-box" }, te = { class: "font-700" }, ae = q({ name: "CdFormItemPanel" }), me = /* @__PURE__ */ q({
  ...ae,
  props: {
    size: {
      type: String,
      default: F.defaultFormSize || "default"
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
  setup(n, { emit: oe }) {
    const i = n, _ = w(F.showSubformPanelProp), B = w(1), W = w(!1), k = w([]), f = w({
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
    }), A = async () => {
      let {
        value: e,
        setValue: o
      } = Y(i.viewNo, "");
      if (!(F.viewConfigCache && e)) {
        const d = await X(i.viewNo);
        Z(d, () => {
          e = d.data, e && o(e);
        }, !1);
      }
      e.formcol && (e.formcol = parseInt(e.formcol)), f.value = e, z(e.columns), E(e.groups), console.info("🚀 ~ file:index method: line:223 -----", e);
    }, z = (e = []) => {
      e.length > 0 && e.forEach((o) => U(o));
    }, E = (e = []) => {
      e.length > 0 && e.forEach((o, d) => {
        var m;
        z((o == null ? void 0 : o.columns) ?? []), (m = i.defaultClosePanels) != null && m.includes(d) || k.value.push(`${d}`);
      }), f.value.groups = e;
    }, U = (e) => {
      const { compLength: o, dictType: d, dictParentId: m, dictParentValue: b } = e;
      e.viewId = f.value.id, e.compLength = o ? `${o}px` : "100%", e.dictConf = { type: d || "", parentId: m || "", parentValue: b || "" }, e.colWidth = e.isLine === "1" ? 24 : 24 / f.value.formcol;
    }, O = (e) => {
      if (i.showRequired)
        return { required: e.isNull === "1", message: "请填写" + e.comments, trigger: "blur" };
    }, D = (e) => {
      var o;
      return e.colWidth === 24 ? e.showType === "textarea" ? "width:98%;" : (o = i.fullItemKeys) != null && o.includes(e.name) ? "width:100%;" : `width:${1 / f.value.formcol * 100}%;` : "width: 100%;";
    };
    return J(() => {
      console.info("🚀 ~ file:index method: line:313 -----", i.slots), i.viewNo && f.value.columns.length === 0 && A();
    }), (e, o) => {
      const d = h("Progress"), m = h("Form-item"), b = h("Col"), R = h("Row"), K = h("Panel"), M = h("Collapse");
      return l(), s("div", G, [
        V(u(d, {
          percent: B.value,
          "hide-info": ""
        }, null, 8, ["percent"]), [
          [x, W.value]
        ]),
        u(R, null, {
          default: r(() => [
            (l(!0), s(p, null, v(f.value.columns, (t) => V((l(), P(b, {
              span: t.colWidth,
              key: t.id
            }, {
              default: r(() => [
                u(m, {
                  rules: O(t),
                  style: N(t.colWidth == 24 && t.showType == "textarea" ? "width:98%;" : ""),
                  label: t.comments,
                  "label-width": 200,
                  prop: t.name
                }, {
                  default: r(() => [
                    S("span", {
                      slot: "label",
                      class: T(t.styleName)
                    }, C(t.comments), 3),
                    t.showType !== "hidden" ? (l(), s(p, { key: 0 }, [
                      $(C(_.value ? `${t.name},${t.dbName}` : ""), 1)
                    ], 64)) : g("", !0),
                    u(I(L), {
                      modelValue: n.formObject[n.attrPrefix + t.name],
                      "onUpdate:modelValue": (y) => n.formObject[n.attrPrefix + t.name] = y,
                      type: t.showType,
                      size: n.size,
                      name: t.name,
                      prop: t.name,
                      disabled: t.isReadonly === "1",
                      readonly: t.isReadonly === "1" || n.readOnly,
                      width: t.compLength,
                      dictConf: t.dictConf
                    }, {
                      default: r(() => [
                        (l(!0), s(p, null, v(n.slots, (y, a) => (l(), s(p, null, [
                          t.name == y ? (l(), s("div", { key: a }, [
                            j(e.$slots, y)
                          ])) : g("", !0)
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
              [x, t.showType !== "hidden"]
            ])), 128))
          ]),
          _: 3
        }),
        S("div", ee, [
          u(M, { "model-value": k.value }, {
            default: r(() => [
              (l(!0), s(p, null, v(f.value.groups, (t, y) => (l(), P(K, {
                name: `${y}`,
                key: t.id
              }, {
                content: r(() => [
                  u(R, null, {
                    default: r(() => [
                      (l(!0), s(p, null, v(t.columns, (a) => V((l(), P(b, {
                        span: a.colWidth,
                        key: a.id
                      }, {
                        default: r(() => [
                          n.noShowFieldControl.indexOf(a.name) == -1 ? (l(), P(m, {
                            key: 0,
                            rules: O(a),
                            style: N(D(a)),
                            "label-width": 200,
                            prop: a.name
                          }, {
                            label: r(() => [
                              S("div", {
                                class: T(a.styleName)
                              }, C(a.comments), 3)
                            ]),
                            default: r(() => [
                              a.showType !== "hidden" ? (l(), s(p, { key: 0 }, [
                                $(C(_.value ? a.name : ""), 1)
                              ], 64)) : g("", !0),
                              u(I(L), {
                                modelValue: n.formObject[a.name],
                                "onUpdate:modelValue": (c) => n.formObject[a.name] = c,
                                type: a.showType,
                                size: n.size,
                                name: a.name,
                                prop: a.name,
                                readonly: a.isReadonly === "1" || n.readOnly,
                                disabled: a.isReadonly === "1",
                                width: a.compLength,
                                dictConf: a.dictConf
                              }, Q({ _: 2 }, [
                                v(i.slots, (c, H) => ({
                                  name: c,
                                  fn: r(() => [
                                    a.name == c ? (l(), s("div", { key: H }, [
                                      j(e.$slots, c)
                                    ])) : g("", !0)
                                  ])
                                }))
                              ]), 1032, ["modelValue", "onUpdate:modelValue", "type", "size", "name", "prop", "readonly", "disabled", "width", "dictConf"])
                            ]),
                            _: 2
                          }, 1032, ["rules", "style", "prop"])) : g("", !0)
                        ]),
                        _: 2
                      }, 1032, ["span"])), [
                        [x, a.showType !== "hidden"]
                      ])), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                default: r(() => [
                  S("span", te, C(t.name), 1)
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
  me as default
};
