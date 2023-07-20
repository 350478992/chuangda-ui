import { defineComponent as x, reactive as S, ref as l, computed as V, onBeforeMount as B, watch as D, resolveComponent as u, openBlock as p, createElementBlock as ae, createBlock as f, withCtx as a, createVNode as n, withKeys as ne, renderSlot as g, unref as w, createTextVNode as m, createCommentVNode as b, createElementVNode as O, toDisplayString as q } from "vue";
import "./style/index.css";
import v from "@/config";
import { isNotEmpty as se } from "@/util/baseTool";
import { CdButton as k } from "../../../basic/CdButton/index.mjs";
import le from "../UserViewConfig/index.vue.mjs";
import re from "./useProps.mjs";
import ie from "../common/useTableSort.mjs";
import ce from "../common/useFetchParams.mjs";
import de from "../common/useGetColumns.mjs";
import ue from "../common/useLoadData.mjs";
import pe from "../common/useAutoTableHeight.mjs";
const me = { class: "cd-pagelist-simple" }, he = { class: "text-success" }, fe = { class: "text-success" }, ge = x({ name: "CdPageListSimple" }), Pe = /* @__PURE__ */ x({
  ...ge,
  props: re(),
  emits: [
    "on-reset",
    "on-afater-load",
    "on-select-change",
    "on-row-dblclick",
    "on-page-change",
    "on-query-able",
    "on-search-before",
    "on-search-after"
  ],
  setup(F, { expose: I, emit: i }) {
    const e = F, t = S({
      tableData: l([]),
      count: l(0),
      pageNum: l(1),
      currentPageSize: l(e.pageSize),
      noDataText: l("请设置查询条件后再进行查询"),
      tableHeight: l(e.fixedHeight),
      loading: l(!1),
      selectedId: l([]),
      selectedRows: l([]),
      equNum: l(0),
      canQuery: !0
    }), N = ce(e, t), h = ue(e, t, N, i), _ = () => {
      t.canQuery = !0, t.pageNum = 1, t.count = 0, i("on-query-able"), t.canQuery && (i("on-search-before"), t.selectedId = [], t.selectedRows = [], h(), i("on-search-after"));
    }, T = V(
      () => v.openEnterSearch || e.openEnterSearch
    ), E = () => {
      T && _();
    }, H = l(), K = () => {
      H.value.resetFields(), i("on-reset");
    };
    let R = l([]);
    const A = S({
      visible: !1,
      reason: "",
      style: ""
    }), { getColumnsHandle: C } = de(e, R, A);
    B(() => {
      C();
    }), D(
      () => e.tableViewNo,
      () => {
        C(), e.autoSearchByViewChange && h();
      }
    ), D(
      () => e.localColumns,
      () => {
        C();
      }
    );
    const { webSortHandle: Q, remoteSortHandle: L } = ie(v, e), M = (o) => {
      e.webOrderBy ? Q(o, t) : (L(o, N), h());
    }, z = l(), { autoHeightHandle: U } = pe(
      e,
      z,
      t
    );
    B(() => {
      U();
    });
    const G = (o) => {
      t.selectedRows = o, t.selectedId = o.map((c) => c[e.idName]), i(
        "on-select-change",
        t.selectedRows,
        t.selectedId
      );
    }, W = (o, c, y, d) => {
      if (se(y) && v.isCellClick) {
        const r = document.createElement("input");
        document.body.appendChild(r), r.setAttribute("value", y), r.select(), document.execCommand("copy") && window.$Message.success("复制成功"), document.body.removeChild(r);
      }
    }, $ = (o, c) => {
      i("on-row-dblclick", o, c);
    }, j = V(() => t.selectedRows.length), J = (o) => {
      t.currentPageSize = o, h();
    }, X = (o) => {
      t.pageNum = o, h(), i("on-page-change");
    }, s = S({
      visible: !1,
      title: "查询条件自定义字段",
      width: "500",
      viewNo: "",
      viewId: "",
      type: ""
    }), Y = (o) => {
      s.visible = !0, s.type = o, s.title = o === "0" ? "查询条件自定义字段" : "表格自定义展示字段", s.viewNo = o === "0" ? e.queryViewNo : e.tableViewNo, s.viewId = "";
    }, Z = (o) => {
      o === "0" || C();
    };
    return I({ tableOptions: t, onViewConfigShowHandle: Y, query: _ }), (o, c) => {
      const y = u("Form"), d = u("Col"), r = u("Row"), P = u("Card"), ee = u("Table"), te = u("Page");
      return p(), ae("div", me, [
        e.showSearch ? (p(), f(P, {
          key: 0,
          class: "search-wrap",
          ref_key: "searchCardRef",
          ref: z,
          "dis-hover": ""
        }, {
          default: a(() => [
            n(y, {
              class: "search-wrap-form",
              ref_key: "tableSearchFormRef",
              ref: H,
              model: e.searchForm,
              inline: e.inline,
              "label-width": e.labelWidth,
              onKeydown: ne(E, ["native", "enter"])
            }, {
              default: a(() => [
                g(o.$slots, "search")
              ]),
              _: 3
            }, 8, ["model", "inline", "label-width", "onKeydown"]),
            n(r, { class: "search-wrap-btns" }, {
              default: a(() => [
                n(d, {
                  class: "tc",
                  span: "24"
                }, {
                  default: a(() => [
                    n(w(k), {
                      type: "primary",
                      icon: "ios-search",
                      loading: t.loading,
                      onClick: _
                    }, {
                      default: a(() => [
                        m(" 查询 ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    e.showResetBtn ? (p(), f(w(k), {
                      key: 0,
                      icon: "md-refresh",
                      onClick: K
                    }, {
                      default: a(() => [
                        m(" 重置 ")
                      ]),
                      _: 1
                    })) : b("", !0),
                    g(o.$slots, "otherBtn")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 512)) : b("", !0),
        n(P, { "dis-hover": "" }, {
          default: a(() => [
            n(r, { class: "table-btnbar" }, {
              default: a(() => [
                n(d, {
                  class: "table-btnbar-left",
                  span: "18"
                }, {
                  default: a(() => [
                    g(o.$slots, "function")
                  ]),
                  _: 3
                }),
                n(d, {
                  class: "table-btnbar-right",
                  span: "6"
                }, {
                  default: a(() => [
                    e.columnsSettingShow ? (p(), f(w(k), {
                      key: 0,
                      type: "text",
                      icon: "md-flower"
                    }, {
                      default: a(() => [
                        m(" 设置 ")
                      ]),
                      _: 1
                    })) : b("", !0)
                  ]),
                  _: 1
                }),
                g(o.$slots, "function-extra")
              ]),
              _: 3
            }),
            n(r, { class: "table-box" }, {
              default: a(() => [
                n(d, { span: "24" }, {
                  default: a(() => [
                    n(ee, {
                      ref: "tableRef",
                      columns: w(R),
                      border: e.border,
                      stripe: e.stripe,
                      "show-header": e.showHeader,
                      size: e.size,
                      "row-key": e.rowKey,
                      "row-class-name": e.rowClassName,
                      "highlight-row": e.highlightRow,
                      "load-data": e.handleLoadData,
                      loading: t.loading,
                      height: t.tableHeight,
                      data: t.tableData,
                      "no-data-text": t.noDataText,
                      onOnSortChange: M,
                      onOnSelectionChange: G,
                      onOnCellClick: W,
                      onOnRowDblclick: $
                    }, null, 8, ["columns", "border", "stripe", "show-header", "size", "row-key", "row-class-name", "highlight-row", "load-data", "loading", "height", "data", "no-data-text"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o.pageShow ? (p(), f(r, {
              key: 0,
              class: "table-pager"
            }, {
              default: a(() => [
                n(d, { span: o.pageBarSpan }, {
                  default: a(() => [
                    n(te, {
                      size: "small",
                      "show-elevator": "",
                      "show-sizer": "",
                      transfer: "",
                      current: t.pageNum,
                      "page-size-opts": e.pageSizes,
                      "page-size": t.currentPageSize,
                      total: t.count,
                      placement: e.pagePlacement,
                      onOnPageSizeChange: J,
                      onOnChange: X
                    }, null, 8, ["current", "page-size-opts", "page-size", "total", "placement"])
                  ]),
                  _: 1
                }, 8, ["span"]),
                n(d, {
                  span: 24 - o.pageBarSpan,
                  class: "table-total-tip"
                }, {
                  default: a(() => [
                    g(o.$slots, "equNum", {
                      equNum: t.equNum
                    }),
                    m(" 当前共有 "),
                    O("span", he, q(t.count), 1),
                    m(" 条数据 ，已选 "),
                    O("span", fe, q(j.value), 1),
                    m(" 条 ")
                  ]),
                  _: 3
                }, 8, ["span"])
              ]),
              _: 3
            })) : b("", !0)
          ]),
          _: 3
        }),
        s.visible ? (p(), f(w(le), {
          key: 1,
          modelValue: s.visible,
          "onUpdate:modelValue": c[0] || (c[0] = (oe) => s.visible = oe),
          type: s.type,
          title: s.title,
          width: s.width,
          "view-no": s.viewNo,
          "view-id": s.viewId,
          onAfterSave: Z
        }, null, 8, ["modelValue", "type", "title", "width", "view-no", "view-id"])) : b("", !0)
      ]);
    };
  }
});
export {
  Pe as default
};
