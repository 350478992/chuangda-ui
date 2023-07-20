import { inject as c, createVNode as e, withDirectives as u, createTextVNode as t, resolveDirective as m } from "vue";
import { Button as n } from "view-ui-plus";
function g(o, s, r) {
  const l = c("$optPermissionConf");
  return {
    title: "选择",
    key: "action",
    width: 150,
    align: "center",
    render: (d, {
      row: i
    }) => {
      const a = o.type === "2" ? "inline-block" : "none";
      return e("div", null, [u(e(n, {
        style: {
          marginRight: "10px",
          display: a
        },
        size: "small",
        onClick: () => r(i)
      }, {
        default: () => [t("编辑")]
      }), [[m("hasPermission"), l.basic.unitmng.bussinessorg.edit]]), e(n, {
        size: "small",
        onClick: () => s(i)
      }, {
        default: () => [t("选择")]
      })]);
    }
  };
}
export {
  g as default
};
