export interface HttpResponse<T> {
    code: number;
    isSuccess: boolean;
    errmsg?: string;
    errorMsg?: string;
    data?: T;
    user?: T;
    sidToken?: string;
    sessionid?: string;
    idList?: T;
}
export interface Config {
    title: string;
    isNeedValidateCode: boolean;
    appDownloadUrl: string;
    sysCode: string;
    loginType: string;
    secretKey: string;
    defaultAreaCode: string;
    FzIsOss: string;
    isHttps: boolean;
    openEnterSearch: boolean;
    isCellClick: boolean;
    isSearchTableData: boolean;
    table: SortConfig;
}
export interface SortConfig {
    orderByColumnField?: any;
}
export interface OptionType {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface DictQueryCond {
    type: string | undefined;
    parentId?: string | undefined;
    parentValue?: string | undefined;
}
export interface DictItemQueryCond {
    type: string | undefined;
    value?: string | undefined;
}
