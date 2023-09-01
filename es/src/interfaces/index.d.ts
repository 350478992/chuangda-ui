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
    publicPath: RegExp[];
    baseUrl: BaseUrl;
    rpturl?: string;
    cookieExpires?: number | Date | undefined;
    copyRight?: string;
    useI18n?: boolean;
    homeName?: string;
    showLogo?: boolean;
    title?: string;
    isNeedValidateCode?: boolean;
    appDownloadUrl?: string;
    sysCode?: string | null;
    loginType?: string;
    secretKey: string;
    defaultAreaCode?: string;
    FzIsOss?: string;
    isHttps?: boolean;
    openEnterSearch?: boolean;
    isCellClick?: boolean;
    isSearchTableData?: boolean;
    table?: SortConfig;
    defaultFormSize?: string;
    viewConfigCache?: boolean;
    equipType?: EquipType;
    optType?: Object;
    operLogType?: Object;
    filterDictList?: string[];
    smsTmp?: Object;
    reportAudit?: Object;
    approval?: Object;
    maxTagNavListSize?: number;
    userAreaName?: string;
    showDownLoadPdf?: boolean;
    unqualifiedList?: string[];
    use_register_apply?: Object;
    NBResourceDownload?: boolean;
    isProvincePlatMode?: boolean | undefined;
    isUseDevSimplificationPanel?: boolean | undefined;
    insUserGuideUrl?: string;
    plugin?: Object;
    loginLogoSrc?: string;
    sloganTxt?: string;
    showSubformPanelProp?: boolean;
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
export interface BaseUrl {
    isAutoHost: string;
    dev: string;
    pro: string;
}
export interface AnyFieldObj {
    [key: string]: any;
}
export interface SortConfig {
    orderByColumnField?: any;
}
export interface EquipType {
    boiler: string;
    pressureVessel: string;
    elevator: string;
    hoistingMachinery: string;
    fieldMotorVehicles: string;
    majorAmusementFacilities: string;
    pressure: string;
    pressurePipeline: string;
    passengerRopeway: string;
    pipingCom: string;
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
export interface ViewInfo {
    id: string;
    no: string;
}
export interface FormFieldConfig {
    colnum: number;
    groups: FormFieldGroup[];
    rows: FormFieldRow[];
}
export interface FormFieldGroup {
    id: string;
    name: string;
    rows: FormFieldRow[];
}
export interface FormFieldRow {
    name: string;
    comments: string;
    cols: FormFieldCol[];
}
export interface FormFieldCol {
    colWidth: string;
    name: string;
    comments: string;
    isEmptyFlag: boolean;
    styleName: string;
    showType: string;
    isReadonly: string;
    compLength: string;
    dictConf: DictQueryCond;
    cols: [];
}
