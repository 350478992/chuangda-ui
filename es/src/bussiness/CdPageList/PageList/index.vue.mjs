import { defineComponent as A, ref as l, reactive as x, computed as Q, onBeforeMount as T, watch as E, resolveComponent as m, openBlock as c, createElementBlock as de, createBlock as d, withCtx as a, createVNode as n, withKeys as ue, renderSlot as g, withDirectives as $, createElementVNode as b, vShow as K, createCommentVNode as u, unref as f, createTextVNode as h, toDisplayString as k, normalizeStyle as pe } from "vue";
import "./style/index.css";
import V from "@/config";
import { isNotEmpty as me } from "@/util/baseTool";
import fe from "../UserViewConfig/index.vue.mjs";
import { CdButton as y } from "../../../basic/CdButton/index.mjs";
import he from "./useProps.mjs";
import we from "../common/useTableSort.mjs";
import ge from "../common/useFetchParams.mjs";
import be from "../common/useGetColumns.mjs";
import ye from "../common/useLoadData.mjs";
import ve from "../common/useAutoTableHeight.mjs";
const Ce = { class: "cd-pagelist" }, _e = { class: "text-btn-box" }, Se = { class: "text-success" }, ke = { class: "text-success" }, Ne = A({ name: "CdPageList" }), Qe = /* @__PURE__ */ A({
  ...Ne,
  props: he(),
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
  setup(L, { expose: M, emit: p }) {
    const e = L, N = l(!1), v = l(!1), o = x({
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
    }), O = ge(e, o), C = ye(e, o, O, p), B = () => {
      o.canQuery = !0, o.pageNum = 1, o.count = 0, p("on-query-able"), o.canQuery && (p("on-search-before"), o.selectedId = [], o.selectedRows = [], C(), p("on-search-after"));
    }, U = Q(
      () => V.openEnterSearch || e.openEnterSearch
    ), G = () => {
      U && B();
    }, D = l(), W = () => {
      D.value.resetFields(), p("on-reset");
    };
    l();
    const j = () => {
      console.log("高级查询条件获取方法调用");
    };
    let F = l([]);
    const H = x({
      visible: !1,
      reason: "",
      style: ""
    }), { getColumnsHandle: z } = be(e, F, H);
    T(() => {
      z();
    }), E(
      () => e.tableViewNo,
      () => {
        z(), e.autoSearchByViewChange && C();
      }
    ), E(
      () => e.localColumns,
      () => {
        z();
      }
    );
    const { webSortHandle: J, remoteSortHandle: X } = we(V, e), Y = (t) => {
      e.webOrderBy ? J(t, o) : (X(t, O), C());
    }, I = l(), { autoHeightHandle: Z } = ve(
      e,
      I,
      o
    );
    T(() => {
      Z();
    });
    const ee = (t) => {
      o.selectedRows = t, o.selectedId = t.map((s) => s[e.idName]), p(
        "on-select-change",
        o.selectedRows,
        o.selectedId
      );
    }, te = (t, s, w, P) => {
      if (me(w) && V.isCellClick) {
        const r = document.createElement("input");
        document.body.appendChild(r), r.setAttribute("value", w), r.select(), document.execCommand("copy") && window.$Message.success("复制成功"), document.body.removeChild(r);
      }
    }, oe = (t, s) => {
      p("on-row-dblclick", t, s);
    }, ae = Q(() => o.selectedRows.length), ne = (t) => {
      o.currentPageSize = t, C();
    }, le = (t) => {
      o.pageNum = t, C(), p("on-page-change");
    }, i = x({
      visible: !1,
      title: "查询条件自定义字段",
      width: "500",
      viewNo: "",
      viewId: "",
      type: ""
    }), R = (t) => {
      i.visible = !0, i.type = t, i.title = t === "0" ? "查询条件自定义字段" : "表格自定义展示字段", i.viewNo = t === "0" ? e.queryViewNo : e.tableViewNo, i.viewId = "";
    }, se = (t) => {
      t === "0" ? j() : z();
    };
    return M({ tableOptions: o, onViewConfigShowHandle: R }), (t, s) => {
      const w = m("Input"), P = m("Form-item"), r = m("Col"), _ = m("Row"), re = m("Form"), q = m("Card"), ie = m("Table"), ce = m("Page");
      return c(), de("div", Ce, [
        e.showSearch ? (c(), d(q, {
          key: 0,
          class: "search-wrap mb10",
          ref_key: "searchCardRef",
          ref: I,
          "dis-hover": ""
        }, {
          default: a(() => [
            n(re, {
              class: "search-wrap-form",
              ref_key: "tableSearchFormRef",
              ref: D,
              model: e.searchForm,
              inline: e.inline,
              "label-width": e.labelWidth,
              onKeydown: ue(G, ["native", "enter"])
            }, {
              default: a(() => [
                g(t.$slots, "search"),
                $(b("div", null, [
                  g(t.$slots, "fold")
                ], 512), [
                  [K, v.value]
                ]),
                N.value ? (c(), d(_, { key: 0 }, {
                  default: a(() => [
                    n(r, { span: "8" }, {
                      default: a(() => [
                        n(P, { label: "设备识别码" }, {
                          default: a(() => [
                            n(w)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    n(r, { span: "8" }, {
                      default: a(() => [
                        n(P, { label: "设备识别码" }, {
                          default: a(() => [
                            n(w)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    n(r, { span: "8" }, {
                      default: a(() => [
                        n(P, { label: "设备识别码" }, {
                          default: a(() => [
                            n(w)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 3
            }, 8, ["model", "inline", "label-width", "onKeydown"]),
            n(_, { class: "search-wrap-btns" }, {
              default: a(() => [
                n(r, {
                  class: "tc",
                  span: "24"
                }, {
                  default: a(() => [
                    n(f(y), {
                      type: "primary",
                      icon: "ios-search",
                      loading: o.loading,
                      onClick: B
                    }, {
                      default: a(() => [
                        h(" 查询 ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    e.showResetBtn ? (c(), d(f(y), {
                      key: 0,
                      class: "ml10",
                      icon: "md-refresh",
                      onClick: W
                    }, {
                      default: a(() => [
                        h(" 重置 ")
                      ]),
                      _: 1
                    })) : u("", !0),
                    g(t.$slots, "otherBtn"),
                    b("div", _e, [
                      e.showFold ? (c(), d(f(y), {
                        key: 0,
                        class: "text-info",
                        type: "text",
                        icon: v.value ? "ios-arrow-up" : "ios-arrow-down",
                        "icon-color": "primary",
                        onClick: s[0] || (s[0] = (S) => v.value = !v.value)
                      }, {
                        default: a(() => [
                          h(k(v.value ? "隐藏" : "展开"), 1)
                        ]),
                        _: 1
                      }, 8, ["icon"])) : u("", !0),
                      t.showOtherQueryPanel ? (c(), d(f(y), {
                        key: 1,
                        class: "text-info",
                        type: "text",
                        icon: "md-flower",
                        "icon-color": "primary",
                        onClick: s[1] || (s[1] = (S) => R("0"))
                      }, {
                        default: a(() => [
                          h(" 设置 ")
                        ]),
                        _: 1
                      })) : u("", !0),
                      t.showOtherQueryPanel ? (c(), d(f(y), {
                        key: 2,
                        class: "text-info",
                        type: "text",
                        icon: "ios-search-outline",
                        "icon-color": "primary",
                        onClick: s[2] || (s[2] = (S) => N.value = !N.value)
                      }, {
                        default: a(() => [
                          b("span", null, k(N.value ? "普通查询" : "高级查询"), 1)
                        ]),
                        _: 1
                      })) : u("", !0)
                    ])
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 512)) : u("", !0),
        n(q, { "dis-hover": "" }, {
          default: a(() => [
            n(_, { class: "table-btnbar" }, {
              default: a(() => [
                n(r, {
                  class: "table-btnbar-left",
                  span: "18"
                }, {
                  default: a(() => [
                    g(t.$slots, "function")
                  ]),
                  _: 3
                }),
                n(r, {
                  class: "table-btnbar-right",
                  span: "6"
                }, {
                  default: a(() => [
                    e.columnsSettingShow ? (c(), d(f(y), {
                      key: 0,
                      type: "text",
                      icon: "md-flower",
                      onClick: s[3] || (s[3] = (S) => R("1"))
                    }, {
                      default: a(() => [
                        h(" 设置 ")
                      ]),
                      _: 1
                    })) : u("", !0)
                  ]),
                  _: 1
                }),
                g(t.$slots, "function-extra")
              ]),
              _: 3
            }),
            n(_, { class: "table-box" }, {
              default: a(() => [
                n(r, { span: "24" }, {
                  default: a(() => [
                    n(ie, {
                      ref: "tableRef",
                      columns: f(F),
                      border: e.border,
                      stripe: e.stripe,
                      "show-header": e.showHeader,
                      size: e.size,
                      "row-key": e.rowKey,
                      "row-class-name": e.rowClassName,
                      "highlight-row": e.highlightRow,
                      "load-data": e.handleLoadData,
                      loading: o.loading,
                      height: o.tableHeight,
                      data: o.tableData,
                      "no-data-text": o.noDataText,
                      onOnSortChange: Y,
                      onOnSelectionChange: ee,
                      onOnCellClick: te,
                      onOnRowDblclick: oe
                    }, null, 8, ["columns", "border", "stripe", "show-header", "size", "row-key", "row-class-name", "highlight-row", "load-data", "loading", "height", "data", "no-data-text"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t.pageShow ? (c(), d(_, {
              key: 0,
              class: "table-pager"
            }, {
              default: a(() => [
                n(r, { span: t.pageBarSpan }, {
                  default: a(() => [
                    n(ce, {
                      size: "small",
                      "show-elevator": "",
                      "show-sizer": "",
                      transfer: "",
                      current: o.pageNum,
                      "page-size-opts": e.pageSizes,
                      "page-size": o.currentPageSize,
                      total: o.count,
                      placement: e.pagePlacement,
                      onOnPageSizeChange: ne,
                      onOnChange: le
                    }, null, 8, ["current", "page-size-opts", "page-size", "total", "placement"])
                  ]),
                  _: 1
                }, 8, ["span"]),
                n(r, {
                  span: 24 - t.pageBarSpan,
                  class: "table-total-tip"
                }, {
                  default: a(() => [
                    g(t.$slots, "equNum", {
                      equNum: o.equNum
                    }),
                    h(" 当前共有 "),
                    b("span", Se, k(o.count), 1),
                    h(" 条数据 ，已选 "),
                    b("span", ke, k(ae.value), 1),
                    h(" 条 ")
                  ]),
                  _: 3
                }, 8, ["span"])
              ]),
              _: 3
            })) : u("", !0)
          ]),
          _: 3
        }),
        i.visible ? (c(), d(f(fe), {
          key: 1,
          modelValue: i.visible,
          "onUpdate:modelValue": s[4] || (s[4] = (S) => i.visible = S),
          type: i.type,
          title: i.title,
          width: i.width,
          "view-no": i.viewNo,
          "view-id": i.viewId,
          onAfterSave: se
        }, null, 8, ["modelValue", "type", "title", "width", "view-no", "view-id"])) : u("", !0),
        $(b("div", {
          class: "back-tip",
          style: pe(H.style)
        }, k(H.reason), 5), [
          [K, H.visible]
        ])
      ]);
    };
  }
});
export {
  Qe as default
};
