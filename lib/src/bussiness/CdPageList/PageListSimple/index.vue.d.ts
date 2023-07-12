declare const _sfc_main: import("vue").DefineComponent<{
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageSizes: {
        type: ArrayConstructor;
        default: () => number[];
    };
    pagePlacement: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    rowKey: BooleanConstructor;
    rowClassName: {
        type: FunctionConstructor;
        default: () => string;
    };
    handleLoadData: {
        type: FunctionConstructor;
        default: () => void;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    idName: {
        type: StringConstructor;
        default: string;
    };
    tableViewNo: {
        type: StringConstructor;
        default: string;
    };
    showCheckBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    indexColWidth: {
        type: NumberConstructor;
        default: number;
    };
    isColFix: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLocalColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    localColumns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    customColumns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    colRenders: {
        type: ArrayConstructor;
        default: () => never[];
    };
    tableAction: {
        type: ObjectConstructor;
        default: () => {};
    };
    sortAbleCols: {
        type: ArrayConstructor;
        default: () => never[];
    };
    allSortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    orderByColumnField: {
        type: StringConstructor;
        default: () => any;
    };
    orderByColumnFields: {
        type: ObjectConstructor;
        default: () => {};
    };
    orderByColumnAlias: {
        type: ObjectConstructor;
        default: () => {};
    };
    webOrderBy: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTableAutoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedHeight: {
        type: StringConstructor;
        default: string;
    };
    pageShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageBarSpan: {
        type: NumberConstructor;
        default: number;
    };
    indexTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    reasonKey: {
        type: StringConstructor;
        default: string;
    };
    okIconGrammar: {
        type: StringConstructor;
        default: string;
    };
    autoSearchByViewChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSearchOnActive: {
        type: BooleanConstructor;
        default: any;
    };
    columnsSettingShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelWidth: {
        type: NumberConstructor;
        default: number;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showResetBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchForm: {
        type: ObjectConstructor;
        default: () => void;
    };
    openEnterSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    queryViewNo: {
        type: StringConstructor;
        default: string;
    };
    notEndDateList: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-reset" | "on-afater-load" | "on-select-change" | "on-row-dblclick" | "on-page-change" | "on-query-able" | "on-search-before" | "on-search-after")[], "on-reset" | "on-afater-load" | "on-select-change" | "on-row-dblclick" | "on-page-change" | "on-query-able" | "on-search-before" | "on-search-after", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageSizes: {
        type: ArrayConstructor;
        default: () => number[];
    };
    pagePlacement: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightRow: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    rowKey: BooleanConstructor;
    rowClassName: {
        type: FunctionConstructor;
        default: () => string;
    };
    handleLoadData: {
        type: FunctionConstructor;
        default: () => void;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    idName: {
        type: StringConstructor;
        default: string;
    };
    tableViewNo: {
        type: StringConstructor;
        default: string;
    };
    showCheckBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    indexColWidth: {
        type: NumberConstructor;
        default: number;
    };
    isColFix: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLocalColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    localColumns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    customColumns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    colRenders: {
        type: ArrayConstructor;
        default: () => never[];
    };
    tableAction: {
        type: ObjectConstructor;
        default: () => {};
    };
    sortAbleCols: {
        type: ArrayConstructor;
        default: () => never[];
    };
    allSortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    orderByColumnField: {
        type: StringConstructor;
        default: () => any;
    };
    orderByColumnFields: {
        type: ObjectConstructor;
        default: () => {};
    };
    orderByColumnAlias: {
        type: ObjectConstructor;
        default: () => {};
    };
    webOrderBy: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTableAutoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedHeight: {
        type: StringConstructor;
        default: string;
    };
    pageShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageBarSpan: {
        type: NumberConstructor;
        default: number;
    };
    indexTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    reasonKey: {
        type: StringConstructor;
        default: string;
    };
    okIconGrammar: {
        type: StringConstructor;
        default: string;
    };
    autoSearchByViewChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSearchOnActive: {
        type: BooleanConstructor;
        default: any;
    };
    columnsSettingShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelWidth: {
        type: NumberConstructor;
        default: number;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showResetBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchForm: {
        type: ObjectConstructor;
        default: () => void;
    };
    openEnterSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    queryViewNo: {
        type: StringConstructor;
        default: string;
    };
    notEndDateList: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & {
    "onOn-reset"?: ((...args: any[]) => any) | undefined;
    "onOn-afater-load"?: ((...args: any[]) => any) | undefined;
    "onOn-select-change"?: ((...args: any[]) => any) | undefined;
    "onOn-row-dblclick"?: ((...args: any[]) => any) | undefined;
    "onOn-page-change"?: ((...args: any[]) => any) | undefined;
    "onOn-query-able"?: ((...args: any[]) => any) | undefined;
    "onOn-search-before"?: ((...args: any[]) => any) | undefined;
    "onOn-search-after"?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    tableViewNo: string;
    showCheckBox: boolean;
    isSearchOnActive: boolean;
    pageSize: number;
    pageSizes: unknown[];
    pagePlacement: string;
    border: boolean;
    showHeader: boolean;
    highlightRow: boolean;
    stripe: boolean;
    rowKey: boolean;
    rowClassName: Function;
    handleLoadData: Function;
    url: string;
    idName: string;
    showIndex: boolean;
    indexColWidth: number;
    isColFix: boolean;
    isLocalColumns: boolean;
    localColumns: unknown[];
    customColumns: unknown[];
    colRenders: unknown[];
    tableAction: Record<string, any>;
    sortAbleCols: unknown[];
    allSortable: boolean;
    orderByColumnField: string;
    orderByColumnFields: Record<string, any>;
    orderByColumnAlias: Record<string, any>;
    webOrderBy: boolean;
    isTableAutoHeight: boolean;
    fixedHeight: string;
    pageShow: boolean;
    pageBarSpan: number;
    indexTooltip: boolean;
    reasonKey: string;
    okIconGrammar: string;
    autoSearchByViewChange: boolean;
    columnsSettingShow: boolean;
    labelWidth: number;
    inline: boolean;
    showSearch: boolean;
    showTable: boolean;
    showResetBtn: boolean;
    searchForm: Record<string, any>;
    openEnterSearch: boolean;
    queryViewNo: string;
    notEndDateList: unknown[];
}, {}>;
export default _sfc_main;
