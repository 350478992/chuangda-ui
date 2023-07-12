import t from "@/config";
function r() {
  const a = {
    labelWidth: {
      // 表单域标签的宽度
      type: Number,
      default: 120
    },
    inline: {
      // 是否开启行内表单模式
      type: Boolean,
      default: !1
    },
    showSearch: {
      // 是否显示查询栏
      type: Boolean,
      default: !0
    },
    showTable: {
      // 是否显示表格
      type: Boolean,
      default: !0
    },
    showResetBtn: {
      // 是否开启重置按钮
      type: Boolean,
      default: !0
    },
    searchForm: {
      // 查询条件集合
      type: Object,
      default: () => {
      }
    },
    openEnterSearch: {
      // 是否开启回车查询
      type: Boolean,
      default: !1
    },
    queryViewNo: {
      type: String,
      default: ""
    },
    notEndDateList: {
      // 符合规则（参考enddateKeyValidate方法）且不需要日期+1的key集合
      type: Array,
      default: () => []
    }
  }, l = {
    border: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "small"
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    highlightRow: {
      type: Boolean,
      default: !0
    },
    stripe: Boolean,
    rowKey: Boolean,
    rowClassName: {
      // 修改行样式
      type: Function,
      default: () => ""
    },
    handleLoadData: {
      // 异步加载树形数据的方法
      type: Function,
      default: () => {
      }
    },
    url: {
      type: String,
      default: ""
    },
    idName: {
      type: String,
      default: "id"
    },
    tableViewNo: {
      type: String,
      default: ""
    },
    showCheckBox: {
      // 是否展示多选列
      type: Boolean,
      default: !0
    },
    showIndex: {
      // 是否展示序号列
      type: Boolean,
      default: !0
    },
    indexColWidth: {
      // 序号列宽
      type: Number,
      default: 65
    },
    isColFix: {
      // 是否开启固定列
      type: Boolean,
      default: !0
    },
    isLocalColumns: {
      // 是否本地表头
      type: Boolean,
      default: !1
    },
    localColumns: {
      // 本地表头配置
      type: Array,
      default: () => []
    },
    customColumns: {
      // 服务端获取表头时，配置自定义列
      type: Array,
      default: () => []
    },
    colRenders: {
      // 自定义配置从服务端获取的表头
      type: Array,
      default: () => []
    },
    tableAction: {
      // 表格操作栏
      type: Object,
      default: () => ({})
    },
    sortAbleCols: {
      // 需排序的字段，值为字段名称
      type: Array,
      default: () => []
    },
    allSortable: {
      // 是否所有字段开启可排序（组件私有属性）
      type: Boolean,
      default: !1
    },
    orderByColumnField: {
      // 指定作为排序的字段。例：传入dbName，则使用dbName字段排序；当为空时, 使用key字段进行排序
      type: String,
      default: () => {
        var e;
        return ((e = t.table) == null ? void 0 : e.orderByColumnField) || null;
      }
    },
    orderByColumnFields: {
      type: Object,
      default: () => ({})
    },
    orderByColumnAlias: {
      type: Object,
      default: () => ({})
    },
    webOrderBy: {
      // 是否开启前端排序
      type: Boolean,
      default: !1
    },
    isTableAutoHeight: {
      // 表格是否自动计算高度开关
      type: Boolean,
      default: !1
    },
    fixedHeight: {
      // 表格固定高度
      type: String,
      default: "auto"
    },
    pageShow: {
      // 是否展示分页
      type: Boolean,
      default: !0
    },
    pageBarSpan: {
      // 分页栏宽度
      type: Number,
      default: 18
    },
    indexTooltip: {
      // 是否展示 序号列的回退气泡提示
      type: Boolean,
      default: !1
    },
    reasonKey: {
      // 回退原因字段
      type: String,
      default: "backReason"
    },
    okIconGrammar: {
      //显示ok标签的条件 eg. aaa==1
      type: String,
      default: ""
    },
    autoSearchByViewChange: {
      // 视图切换时，是否自动查询列表
      type: Boolean,
      default: !0
    },
    isSearchOnActive: {
      // 页面初始化后，是否自动查询数据
      type: Boolean,
      default: t.isSearchTableData
    },
    columnsSettingShow: {
      // 列表表头自定义设置是否开启
      type: Boolean,
      default: !1
    }
  };
  return {
    ...a,
    ...l,
    ...{
      pageSize: {
        // 显示条数
        type: Number,
        default: 10
      },
      // 可显示的条数
      pageSizes: {
        type: Array,
        default: () => [10, 20, 50, 80, 100]
      },
      pagePlacement: {
        // 条数切换弹窗的展开方向
        type: String,
        default: "bottom"
      }
    }
  };
}
export {
  r as default
};
