import { defineComponent as T, computed as I, reactive as w, provide as S, ref as M, resolveComponent as r, resolveDirective as $, openBlock as u, createElementBlock as D, Fragment as z, createVNode as a, unref as s, withCtx as o, renderSlot as x, withDirectives as E, createBlock as b, createTextVNode as k, createCommentVNode as B } from "vue";
import "./style/index.css";
import { CdPageListSimple as j } from "../CdPageList/PageListSimple/index.mjs";
import { CdModal as G } from "../../basic/CdModal/index.mjs";
import { CdCascader as J } from "../../basic/CdCascader/index.mjs";
import K from "./UnitForm.vue.mjs";
import Q from "./useTableAction.mjs";
import W from "./useComputed.mjs";
const X = T({ name: "CdUnitList" }), se = /* @__PURE__ */ T({
  ...X,
  props: {
    modelValue: Boolean,
    equclacode: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    unitType: {
      type: String,
      default: ""
    },
    tableViewNo: {
      type: String,
      default: ""
    },
    tableHeight: {
      type: String,
      default: "400"
    },
    isAnd: {
      type: String,
      default: "0"
    },
    showCheckBox: {
      type: Boolean,
      default: !1
    },
    isSearchOnActive: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "on-unit-select",
    "unitform-save"
  ],
  setup(h, { emit: p }) {
    const t = h, c = I({
      get: () => t.modelValue,
      set: () => p("update:modelValue")
    }), d = w({
      type: t.type,
      unitType: t.unitType,
      complex: "",
      areacode: "",
      equclacode: t.equclacode,
      isAnd: t.isAnd,
      isUse: "1"
    }), { useTableViewNo: A, useTitle: H, usePermission: U } = W(t), F = A, N = H, v = U;
    S("computedPermission", v);
    const m = M();
    S("queryHandle", () => m.value.query());
    const l = w({
      visible: !1,
      type: "",
      basicdatasysid: "",
      optType: ""
    }), V = (i) => {
      l.visible = !0, l.optType = i.id ? "edit" : "add", l.basicdatasysid = i.id || "", l.type = t.type;
    }, q = () => {
      p("unitform-save");
    }, _ = (i) => {
      const e = i.id ? [i] : m.value.tableOptions.selectedRows;
      if (e.length === 0)
        return window.$Message.warning("请选择数据");
      const f = t.showCheckBox ? e : i.id ? e[0] : e;
      c.value = !1, p("on-unit-select", f);
    }, P = Q(
      t,
      _,
      V
    );
    return (i, e) => {
      const f = r("Input"), C = r("Form-item"), y = r("Col"), L = r("Row"), g = r("Button"), O = $("hasPermission");
      return u(), D(z, null, [
        a(s(G), {
          class: "cd-unit-list",
          modelValue: c.value,
          "onUpdate:modelValue": e[2] || (e[2] = (n) => c.value = n),
          title: s(N),
          size: "large",
          "footer-hide": !0
        }, {
          default: o(() => [
            a(s(j), {
              ref_key: "pageListSimpleRef",
              ref: m,
              url: "/api/common/getUnitList",
              isSearchOnActive: t.isSearchOnActive,
              tableViewNo: s(F),
              isColFix: !1,
              tableAction: s(P),
              searchForm: d,
              showCheckBox: t.showCheckBox,
              fixedHeight: t.tableHeight
            }, {
              search: o(() => [
                a(L, null, {
                  default: o(() => [
                    a(y, { span: "8" }, {
                      default: o(() => [
                        a(C, {
                          label: "综合查询",
                          "label-width": 80,
                          prop: "complex"
                        }, {
                          default: o(() => [
                            a(f, {
                              modelValue: d.complex,
                              "onUpdate:modelValue": e[0] || (e[0] = (n) => d.complex = n),
                              placeholder: "输入单位名称、组织机构代码、法定代表人"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    a(y, { span: "8" }, {
                      default: o(() => [
                        a(C, {
                          label: "所在地区",
                          "label-width": 80,
                          prop: "areacode"
                        }, {
                          default: o(() => [
                            a(s(J), {
                              ref: "areacodeCascader",
                              modelValue: d.areacode,
                              "onUpdate:modelValue": e[1] || (e[1] = (n) => d.areacode = n),
                              type: "sys_area",
                              "p-val": "000000"
                            }, null, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    x(i.$slots, "cusSearchItems", { searchForm: d })
                  ]),
                  _: 3
                })
              ]),
              function: o(() => [
                a(y, {
                  class: "table-btnbar-left",
                  span: "18"
                }, {
                  default: o(() => [
                    E((u(), b(g, {
                      type: "primary",
                      onClick: V
                    }, {
                      default: o(() => [
                        k(" 新增 ")
                      ]),
                      _: 1
                    })), [
                      [O, s(v)]
                    ]),
                    h.showCheckBox ? (u(), b(g, {
                      key: 0,
                      type: "primary",
                      onClick: _
                    }, {
                      default: o(() => [
                        k(" 确认选择 ")
                      ]),
                      _: 1
                    })) : B("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 8, ["isSearchOnActive", "tableViewNo", "tableAction", "searchForm", "showCheckBox", "fixedHeight"])
          ]),
          _: 3
        }, 8, ["modelValue", "title"]),
        l.visible ? (u(), b(K, {
          key: 0,
          modelValue: l.visible,
          "onUpdate:modelValue": e[3] || (e[3] = (n) => l.visible = n),
          id: l.basicdatasysid,
          optType: l.optType,
          type: l.type,
          onUnitformSave: q
        }, {
          default: o(({ formProps: n, afterSave: R }) => [
            x(i.$slots, "unitform", {
              formProps: n,
              afterSave: R
            })
          ]),
          _: 3
        }, 8, ["modelValue", "id", "optType", "type"])) : B("", !0)
      ], 64);
    };
  }
});
export {
  se as default
};
