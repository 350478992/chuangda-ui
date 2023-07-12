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
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    clearable: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    prefix: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    poptip: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    placement: {
        type: import("vue").PropType<string>;
        required: true;
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
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    clearable: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    prefix: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    poptip: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    placement: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-clear"?: ((...args: any[]) => any) | undefined;
}, {
    clearable: boolean;
    placement: string;
    placeholder: string;
    suffixShow: boolean;
    poptip: boolean;
    trigger: string;
}, {}>>;
export default CdInput;
