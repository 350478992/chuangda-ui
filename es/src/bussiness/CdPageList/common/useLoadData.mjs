import { api_getTableList as x } from "@/api/system";
import { isNotEmpty as u } from "@/util/baseTool";
function j(l, a, n, o) {
  return () => {
    a.loading = !0, x(l.url, n.value).then((s) => {
      var d;
      const { isSuccess: c, errorMsg: f, errmsg: g, data: i } = s;
      if (c) {
        let t = [], e = null;
        if (i.list ? (e = i, t = Object.assign([], e.list)) : (e = u(i.data) ? i.data : i, Object.prototype.toString.call(i.data).includes("Array") && (t = Object.assign([], i.data))), a.equNum = (d = e == null ? void 0 : e.list) != null && d.length ? e.list[0].extparaa : 0, o("on-afater-load", e), u(t))
          for (let r = 0; r < t.length; r++) {
            let m = r + (a.pageNum - 1) * a.currentPageSize + 1;
            t[r].index = m, l.idName !== "id" && (t[r].id = t[r][l.idName]);
          }
        a.count = (e == null ? void 0 : e.count) || 0, a.count === 0 && (t.noDataText = "没有找到符合条件的数据"), a.tableData = t, a.loading = !1;
      } else
        window.$Message.error(f || g);
    });
  };
}
export {
  j as default
};
