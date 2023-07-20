import config from "@/config";
import { api_getTableConfig } from "@/api/system";
import { isNotEmpty } from "@/util/baseTool";
import useTableSort from "./useTableSort.mjs";
import { Icon } from "view-ui-plus";
function useGetColumns($props, columns, tooltipParams) {
  const { sortSet } = useTableSort(config, $props), pushCusColumnsHandle = (n) => {
    n.value.push(...$props.customColumns);
  }, reDefineColumns = (resetColumns) => {
    var n;
    $props.customColumns.length && pushCusColumnsHandle(resetColumns), $props.showIndex && columns.value.push({
      title: "序号",
      width: $props.indexColWidth,
      align: "center",
      fixed: $props.isColFix ? "left" : "",
      render: (h, { row }) => {
        const tooltipShow = row.isBack === "1" && $props.indexTooltip, showOkIconCondition = "params.row." + $props.okIconGrammar, _toolTip = tooltipShow ? h(
          "div",
          {
            style: { display: "inline-block", padding: "2px 5px" },
            onMouseenter: (e) => {
              tooltipParams.visible = !0, tooltipParams.reason = row[$props.reasonKey] || "", tooltipParams.style = `top:${e.clientY - e.offsetY}px;left:${e.clientX - e.offsetX + 36}px;`;
            },
            onMouseleave: () => {
              tooltipParams.visible = !1;
            }
          },
          [h(Icon, { type: "md-arrow-back" })]
        ) : "", _checkMark = isNotEmpty($props.okIconGrammar) && eval(showOkIconCondition) ? h(Icon, { type: "md-checkmark" }) : "";
        return h("div", [
          h("span", [_checkMark, row.ROWNUM_ || row.index]),
          _toolTip
        ]);
      }
    }), $props.showCheckBox && columns.value.push({
      type: "selection",
      width: 55,
      align: "center",
      fixed: $props.isColFix ? "left" : ""
    }), $props.tableAction && $props.tableAction.title && columns.value.push($props.tableAction);
    let colRenderMap = {}, colRenderLen = $props.colRenders.length;
    if (colRenderLen > 0)
      for (let e = 0; e < colRenderLen; e++) {
        let o = $props.colRenders[e];
        colRenderMap[o.key] = o;
      }
    for (let e = 0; e < resetColumns.length; e++) {
      let o = resetColumns[e];
      const s = colRenderMap[o.key || o.name];
      o.id && s && ((n = s[o.key || o.name]) != null && n.showType) && (o.showType = s[o.name].showType), o.showType !== "hidden" && (o.id && (o.title = o.comments, o.key = o.name, o.width = o.compLength, o.fixed = $props.isColFix && o.isFreeze === "1" ? "left" : "", s ? o = { ...o, ...s } : o.labelColor && (o.render = function(t, { row: l }) {
        return t(
          "span",
          {
            style: { color: o.labelColor }
          },
          l[o.key]
        );
      })), o.align = "center", o.minWidth = o.minWidth || 100, sortSet(o), columns.value.push(o));
    }
  }, getLocalColumns = () => {
    reDefineColumns($props.localColumns);
  }, getRemoteColumns = (n) => {
    api_getTableConfig(n).then((e) => {
      const { isSuccess: o, errorMsg: s, errmsg: t, data: l } = e || {};
      o ? reDefineColumns(l.columns) : window.$Message.error(s || t);
    });
  }, getColumnsHandle = () => {
    columns.value = [], $props.isLocalColumns ? getLocalColumns() : $props.tableViewNo ? getRemoteColumns($props.tableViewNo) : window.$Message.warning("表头视图不能为空");
  };
  return {
    getColumnsHandle
  };
}
export {
  useGetColumns as default
};
