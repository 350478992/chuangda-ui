export default function (): {
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
    showOtherQueryPanel: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFold: {
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
};
