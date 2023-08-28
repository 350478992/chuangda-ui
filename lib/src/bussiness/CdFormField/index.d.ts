export declare const CdFormField: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | DateConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    dict: {
        type: StringConstructor;
        default: string;
    };
    dictConf: {
        type: import("vue").PropType<import("../../../types/interfaces").DictQueryCond>;
        default: () => import("../../../types/interfaces").DictQueryCond;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | DateConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    dict: {
        type: StringConstructor;
        default: string;
    };
    dictConf: {
        type: import("vue").PropType<import("../../../types/interfaces").DictQueryCond>;
        default: () => import("../../../types/interfaces").DictQueryCond;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    disabled: boolean;
    modelValue: string | number | unknown[] | Date;
    width: string;
    readonly: boolean;
    color: string;
    dict: string;
    dictConf: import("../../../types/interfaces").DictQueryCond;
}, {}>>;
export default CdFormField;
