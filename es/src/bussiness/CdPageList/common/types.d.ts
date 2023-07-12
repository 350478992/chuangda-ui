export interface ITableOptions {
    tableData: any[];
    pageNum: number;
    currentPageSize: number;
    count: number;
    noDataText: string;
    tableHeight: number | string;
    loading: boolean;
    selectedId: string[];
    selectedRows: any[];
    equNum: number;
    canQuery: boolean;
}
export interface ISortParmas {
    column: any;
    key: string;
    order: string;
}
export interface ITooltipParams {
    visible: boolean;
    reason: string;
    style: string;
}
export interface IViewConfigParams {
    visible: boolean;
    title: string;
    width: string;
    viewNo: string;
    viewId: string;
    type: string;
}
