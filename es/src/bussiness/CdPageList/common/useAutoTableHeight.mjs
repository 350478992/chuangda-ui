import n from "@/config";
function g(i, H, o) {
  return {
    autoHeightHandle: () => {
      var f;
      if (i.isTableAutoHeight) {
        const a = (f = H.value) == null ? void 0 : f.$el, h = document.querySelector(".ivu-table-header"), l = document.querySelector(".left-sider-top");
        let e = 90;
        a && (e += a.offsetHeight), h && (e += h.offsetHeight), l && (e += l.offsetHeight);
        let t = window.innerHeight - e;
        t = t < 400 ? 400 : t, o.tableHeight = i.fixedHeight !== "auto" ? i.fixedHeight : t;
      } else
        n.sysCode === "ZJ-JH-SCDEAP" && (o.tableHeight = "500");
    }
  };
}
export {
  g as default
};
