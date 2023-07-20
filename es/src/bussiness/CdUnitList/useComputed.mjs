import { computed as t, inject as o } from "vue";
function d(e) {
  const s = t(() => {
    if (e.tableViewNo)
      return e.tableViewNo;
    switch (e.type) {
      case "1":
        return "jy_ogm_list_table";
      case "2":
        return "jy_businessorg_list_table";
      case "3":
        return "jy_inspectUnit_list_table";
      default:
        return "";
    }
  }), n = t(() => {
    switch (e.type) {
      case "1":
        return "监察机构列表";
      case "2":
        return "业务单位列表";
      case "3":
        return "检验单位列表";
      default:
        return "";
    }
  }), r = o("$optPermissionConf"), i = t(() => {
    const { bussinessorg: u, inspectionorg: a, superviseorg: c } = r.basic.unitmng;
    switch (e.type) {
      case "1":
        return c.add;
      case "2":
        return u.add;
      case "3":
        return a.add;
      default:
        return "";
    }
  });
  return {
    useTableViewNo: s,
    useTitle: n,
    usePermission: i
  };
}
export {
  d as default
};
