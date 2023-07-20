export declare const CdInput: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    size: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    clearable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    prefix: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    poptip: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-click" | "on-clear")[], "update:modelValue" | "on-click" | "on-clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    size: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    clearable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    prefix: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    poptip: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-clear"?: ((...args: any[]) => any) | undefined;
}, {
    clearable: boolean | undefined;
    placement: string | undefined;
    placeholder: string | undefined;
    suffixShow: boolean | undefined;
    poptip: boolean | undefined;
    trigger: string | undefined;
}, {}>>;
export default CdInput;
