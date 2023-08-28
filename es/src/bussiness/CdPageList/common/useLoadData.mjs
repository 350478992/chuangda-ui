import { api_getTableList as x } from "@/api/system";
import { isNotEmpty as u } from "@/util/baseTool";
function j(l, t, n, o) {
  return () => {
    t.loading = !0, x(l.url, n.value).then((s) => {
      var d;
      const { isSuccess: c, errorMsg: f, errmsg: g, data: i } = s;
      if (c) {
        let a = [], e = null;
        if (i.list ? (e = i, a = Object.assign([], e.list)) : (e = u(i.data) ? i.data : i, Object.prototype.toString.call(i.data).includes("Array") && (a = Object.assign([], i.data))), t.equNum = (d = e == null ? void 0 : e.list) != null && d.length ? e.list[0].extparaa : 0, o("on-afater-load", e), u(a))
          for (let r = 0; r < a.length; r++) {
            let m = r + (t.pageNum - 1) * t.currentPageSize + 1;
            a[r].index = m, l.idName !== "id" && (a[r].id = a[r][l.idName]);
          }
        t.count = (e == null ? void 0 : e.count) || 0, t.count === 0 && (t.noDataText = "没有找到符合条件的数据"), t.tableData = a, t.loading = !1;
      } else
        window.$Message.error(f || g);
    });
  };
}
export {
  j as default
};
