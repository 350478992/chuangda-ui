export declare const CdCascader: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    size: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: StringConstructor;
    type: {
        type: StringConstructor;
        required: true;
    };
    pVal: StringConstructor;
    pId: {
        type: StringConstructor;
        default: string;
    };
    showableRootVals: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showableSubVals: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showableRootValsReverse: BooleanConstructor;
    showableSubValsReverse: BooleanConstructor;
    splitChar: {
        type: StringConstructor;
        default: string;
    };
    needEmptyItem: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyItemLabel: {
        type: StringConstructor;
        default: string;
    };
    emptyItemValue: {
        type: StringConstructor;
        default: string;
    };
    selLastLev: {
        type: BooleanConstructor;
        default: boolean;
    };
    selMinLev: {
        type: NumberConstructor;
        default: number;
    };
    showLev: {
        type: NumberConstructor;
        validator(val: unknown): boolean;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "get-full-label" | "get-last-label" | "on-change")[], "update:modelValue" | "get-full-label" | "get-last-label" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: StringConstructor;
    type: {
        type: StringConstructor;
        required: true;
    };
    pVal: StringConstructor;
    pId: {
        type: StringConstructor;
        default: string;
    };
    showableRootVals: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showableSubVals: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showableRootValsReverse: BooleanConstructor;
    showableSubValsReverse: BooleanConstructor;
    splitChar: {
        type: StringConstructor;
        default: string;
    };
    needEmptyItem: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyItemLabel: {
        type: StringConstructor;
        default: string;
    };
    emptyItemValue: {
        type: StringConstructor;
        default: string;
    };
    selLastLev: {
        type: BooleanConstructor;
        default: boolean;
    };
    selMinLev: {
        type: NumberConstructor;
        default: number;
    };
    showLev: {
        type: NumberConstructor;
        validator(val: unknown): boolean;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onGet-full-label"?: ((...args: any[]) => any) | undefined;
    "onGet-last-label"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    filterable: boolean;
    clearable: boolean;
    pId: string;
    showableRootVals: unknown[];
    showableSubVals: unknown[];
    showableRootValsReverse: boolean;
    showableSubValsReverse: boolean;
    splitChar: string;
    needEmptyItem: boolean;
    emptyItemLabel: string;
    emptyItemValue: string;
    selLastLev: boolean;
    selMinLev: number;
    showLev: number;
}, {}>>;
export default CdCascader;
