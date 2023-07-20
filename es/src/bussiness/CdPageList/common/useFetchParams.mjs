import { isNotEmpty as r } from "@/util/baseTool";
import { dateComputeByDay as o } from "@/util/bussTool";
import { computed as m } from "vue";
function c(i, n) {
  const s = (e) => !i.notEndDateList.includes(e) && (e.endsWith("e") && !e.endsWith("date") && !e.endsWith("time") && !e.includes("Begin") || e.endsWith("End") || e.startsWith("end")), d = (e, a = 1) => /^(\d{4})-(\d{2})-(\d{2})$/.test(e) ? o(e, a) : e;
  return m({
    get: () => {
      let e = {};
      for (let a in i.searchForm) {
        let t = i.searchForm[a];
        r(t) && r(t.label) ? e[a] = t.value : t instanceof Array ? (r(t[0]) && (e["begin" + a] = t[0], e[a + "s"] = t[0]), r(t[1]) && (e["end" + a] = t[1], e[a + "e"] = t[1])) : r(t) && s(a) ? e[a] = d(t, 1) : e[a] = t;
      }
      return e.pageNo = n.pageNum, e.pageSize = n.currentPageSize, e;
    },
    set: () => {
    }
  });
}
export {
  c as default
};
