import { computed as f } from "vue";
function h(a, i) {
  const c = f(() => {
    var e;
    return i.allSortable || ((e = a.table) == null ? void 0 : e.allSortable);
  }), n = (e, t) => {
    e.width && (e.width = e.width ? +e.width + t : "");
  };
  return {
    sortSet: (e) => {
      c.value ? e.title !== "序号" && e.title !== "操作" && e.title !== "选中" && (e.sortable = "custom", n(e, 10)) : i.sortAbleCols.includes(e.key) && (e.sortable = "custom", n(e, 10));
    },
    webSortHandle: (e, t) => {
      const d = t.tableData.sort((l, r) => {
        const o = l[e.key] || "", s = r[e.key] || "";
        return e.order === "desc" ? s.localeCompare(o, "zh") : e.order === "asc" ? o.localeCompare(s, "zh") : void 0;
      });
      t.tableData = d.map((l, r) => {
        const o = r + (t.pageNum - 1) * t.currentPageSize + 1;
        return { ...l, index: o, ROWNUM_: o };
      });
    },
    remoteSortHandle: (e, t) => {
      let d = e.key + " " + e.order;
      const l = i.orderByColumnFields[e.column.title];
      if (l) {
        let o = e.column[l];
        o ? d = e.column[l] + " " + e.order : console.warn("表格列配置没有需要的字段: " + o);
      }
      const r = i.orderByColumnAlias[e.column.title];
      r && (d = r + " " + e.order), t.value.orderBy = d;
    }
  };
}
export {
  h as default
};
