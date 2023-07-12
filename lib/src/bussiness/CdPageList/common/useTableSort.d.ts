import { ISortParmas, ITableOptions } from "./types";
/**
 * @param config 全局配置属性
 * @param props 本地组件中的属性集合
 * @returns Object
 */
export default function (config: any, $props: any): {
    sortSet: (column: any) => void;
    webSortHandle: (params: ISortParmas, tableOptions: ITableOptions) => void;
    remoteSortHandle: (params: ISortParmas, fetchParams: any) => void;
};
