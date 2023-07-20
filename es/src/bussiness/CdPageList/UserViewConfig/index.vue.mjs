import { defineComponent as w, computed as D, reactive as A, ref as M, onBeforeMount as $, resolveComponent as m, openBlock as E, createBlock as T, withCtx as c, createTextVNode as _, toDisplayString as z, createElementVNode as p, createVNode as u, nextTick as N } from "vue";
import "./style/index.css";
import { api_getSearchFormConfig as R, api_getTableConfig as x, api_userFormConfigSave as O, api_userFormConfigDelete as I } from "@/api/system";
import L from "../../../basic/CdModal/index.vue.mjs";
import { isNotEmpty as P } from "@/util/baseTool";
import { ColorPicker as U, Checkbox as q } from "view-ui-plus";
const j = { class: "header-extra" }, G = /* @__PURE__ */ p("span", { class: "text-info" }, "帮助提示", -1), J = /* @__PURE__ */ p("div", null, "1.勾选展示字段，可设置字段是否在页面上展示", -1), K = /* @__PURE__ */ p("div", null, "2.上下拖动字段名称，可调整字段在页面上的显示位置", -1), Q = /* @__PURE__ */ p("div", null, " 3.勾选冻结字段，左右拖动视图时，该字段及该字段之前字段将始终显示在页面上 ", -1), W = w({ name: "UserViewConfig" }), le = /* @__PURE__ */ w({
  ...W,
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    draggable: {
      type: Boolean,
      default: !0
    },
    tableHeight: {
      // 表格高度
      type: String,
      default: "350"
    },
    type: {
      // 视图类型，0：条件  1：表头
      type: String,
      default: "0"
    },
    viewNo: {
      // 视图编号
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue", "after-save"],
  setup(F, { emit: g }) {
    const s = F, C = D({
      get: () => s.modelValue,
      set: () => g("update:modelValue")
    }), b = D(() => s.title), t = A({
      tableData: [],
      tableDataHidden: [],
      columns: [],
      selectedRows: [],
      loading: !1
    }), y = () => {
      t.columns = [
        {
          type: "selection",
          width: 50,
          align: "center"
        },
        {
          title: "字段名称",
          key: "comments"
        }
      ], s.type === "1" && t.columns.push(
        {
          title: "字段文字颜色",
          width: 120,
          key: "labelColor",
          align: "center",
          render: (a, { row: e, index: l }) => (e.labelColor || (e.labelColor = "#000000"), a("div", [
            a(
              U,
              {
                modelValue: e.labelColor,
                colors: [
                  "#2D8CF0",
                  "#19BE6B",
                  "#FF9900",
                  "#ED4014",
                  "#00B5FF",
                  "#19C919",
                  "#F9E31C",
                  "#EA1A1A",
                  "#9B1DEA",
                  "#00C2B1",
                  "#AC7A33",
                  "#1D35EA",
                  "#8BC34A",
                  "#F16B62",
                  "#EA4CA3",
                  "#0D94AA",
                  "#FEBD79",
                  "#5D4037",
                  "#00BCD4",
                  "#F06292",
                  "#CDDC39",
                  "#607D8B",
                  "#000000",
                  "#FFFFFF"
                ],
                transfer: !0,
                "onOn-change": (o) => {
                  N(() => {
                    t.tableData[l]._checked = e._checked, t.tableData[l].labelColor = o;
                  });
                }
              },
              ""
            )
          ]))
        },
        {
          title: "冻结字段",
          width: 100,
          key: "isFreeze",
          align: "center",
          render: (a, { row: e, index: l }) => a(
            q,
            {
              modelValue: e.isFreeze,
              checked: e.isFreeze === "1",
              "true-value": "1",
              "false-value": "0",
              "onOn-change": (o) => {
                t.tableData[l]._checked = e._checked, t.tableData[l].isFreeze = o;
              }
            },
            ""
          )
        }
      );
    };
    let f = "";
    const k = () => {
      if (!P(s.viewNo))
        return window.$Message.warning("视图编号不存在");
      t.loading = !0, (s.type === "0" ? R : x)(s.viewNo).then((e) => {
        const { isSuccess: l, errorMsg: o, errmsg: n, data: i } = e;
        if (l) {
          if (t.tableData = [], t.tableDataHidden = [], f = i.id, i.columns) {
            let h = i.columns.map((d) => ({
              ...d,
              _checked: d.isChecked
            }));
            for (const d of h)
              d.showType !== "hidden" ? t.tableData.push(d) : t.tableDataHidden.push(d);
          }
        } else
          window.$Message.error(o || n);
        t.loading = !1;
      });
    }, B = (a) => {
      t.selectedRows = a;
    }, V = (a, e) => {
      t.tableData.splice(
        e,
        0,
        t.tableData.splice(e + (a - e), 1)[0]
      );
    }, r = M(!1), S = () => {
      const a = { viewId: f };
      let e = [];
      if (t.selectedRows.length > 0) {
        e = [...t.selectedRows, ...t.tableDataHidden];
        for (let l = 0; l < e.length; l++) {
          const o = e[l], n = `columnList[${l}]`;
          a[`${n}.id`] = "", a[`${n}.viewCol.column.id`] = o.id, a[`${n}.viewCol.column.name`] = o.name, a[`${n}.labelColor`] = o.labelColor, a[`${n}.isFreeze`] = o.isFreeze, a[`${n}.sort`] = l;
        }
        r.value = !0, O(a).then(
          (l) => {
            const { isSuccess: o, errorMsg: n, errmsg: i } = l;
            o ? (window.$Message.success("保存成功"), v(), g("after-save", s.type)) : window.$Message.errorMsg(n || i), r.value = !1;
          },
          () => {
            r.value = !1;
          }
        );
      }
    }, H = () => {
      r.value = !0, I(f).then(
        (a) => {
          const { isSuccess: e, errorMsg: l, errmsg: o } = a;
          e ? (v(), g("after-save", s.type)) : window.$Message.error(l || o), r.value = !1;
        },
        () => {
          r.value = !1;
        }
      );
    }, v = () => g("update:modelValue", !1);
    return $(() => {
      y(), k();
    }), (a, e) => {
      const l = m("Icon"), o = m("Poptip"), n = m("Table"), i = m("Button");
      return E(), T(L, {
        class: "cd-user-view-config",
        modelValue: C.value,
        "onUpdate:modelValue": e[0] || (e[0] = (h) => C.value = h),
        title: b.value,
        width: "300"
      }, {
        header: c(() => [
          _(z(b.value) + " ", 1),
          p("div", j, [
            u(o, {
              trigger: "hover",
              title: "提示",
              placement: "top-start",
              transfer: ""
            }, {
              content: c(() => [
                J,
                K,
                Q
              ]),
              default: c(() => [
                u(l, {
                  type: "md-help-circle",
                  size: "18",
                  class: "text-info"
                }),
                G
              ]),
              _: 1
            })
          ])
        ]),
        footer: c(() => [
          u(i, {
            type: "primary",
            loading: r.value,
            onClick: H
          }, {
            default: c(() => [
              _("还原初始配置")
            ]),
            _: 1
          }, 8, ["loading"]),
          u(i, {
            class: "ml10",
            type: "primary",
            loading: r.value,
            onClick: S
          }, {
            default: c(() => [
              _("保 存")
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        default: c(() => [
          u(n, {
            ref: "userConfigTableRef",
            size: "small",
            height: s.tableHeight,
            draggable: s.draggable,
            loading: t.loading,
            columns: t.columns,
            data: t.tableData,
            border: !0,
            "show-header": !0,
            onOnSelectionChange: B,
            onOnDragDrop: V
          }, null, 8, ["height", "draggable", "loading", "columns", "data"])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
export {
  le as default
};
