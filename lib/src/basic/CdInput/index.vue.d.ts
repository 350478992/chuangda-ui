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
        type: __PropType<string>;
        required: true;
        default: string;
    };
    clearable: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    prefix: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    poptip: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    trigger: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    placement: {
        type: __PropType<string>;
        required: true;
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
        type: __PropType<string>;
        required: true;
        default: string;
    };
    clearable: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    prefix: {
        type: __PropType<string | undefined>;
        required: false;
    };
    suffixShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    poptip: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    trigger: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    placement: {
        type: __PropType<string>;
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
}, {}>;
export default _sfc_main;
