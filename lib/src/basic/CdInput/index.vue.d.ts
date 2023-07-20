import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<string | number>;
        required: true;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    clearable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    prefix: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    poptip: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    trigger: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-click" | "on-clear")[], "update:modelValue" | "on-click" | "on-clear", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | number>;
        required: true;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    clearable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    prefix: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    poptip: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    trigger: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placement: {
        type: __PropType<string | undefined>;
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
}, {}>;
export default _sfc_main;
