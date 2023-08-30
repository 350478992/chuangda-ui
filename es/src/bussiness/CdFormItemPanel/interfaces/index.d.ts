import { DictQueryCond } from '../../../interfaces';
export interface FormItemConfig {
    id: string;
    no: string;
    name: string;
    type: string;
    formcol: number;
    dictColumns?: any;
    /**
     * 分组配置， [
     *    {
     *      group: [col, col, col]
     *    }
     */
    groups: Array<FormGroup>;
    columns: Array<FormColumn>;
}
export interface FormGroup {
    id: string;
    name: string;
    sort?: string | undefined;
    columns?: Array<FormColumn> | undefined;
}
export interface FormRow {
    cols: Array<FormColumn>;
}
export interface FormColumn {
    id: string;
    viewId: string;
    moduleId?: string;
    name?: string;
    compLength?: string;
    showType?: string;
    isLine?: string;
    colWidth?: number;
    isEmptyFlag?: boolean;
    comments?: string;
    styleName?: string;
    isReadonly?: string;
    dbName?: string;
    dictType?: string;
    dictParentId?: string;
    dictParentValue?: string;
    dictConf?: DictQueryCond;
}
