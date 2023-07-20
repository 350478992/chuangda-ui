import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<string | string[]>;
        required: true;
        default: string;
    };
    type: {
        type: __PropType<string | undefined>;
        required: false;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placement: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    editable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    datePos: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    dateJudge: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<string | string[]>;
        required: true;
        default: string;
    };
    type: {
        type: __PropType<string | undefined>;
        required: false;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placement: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    editable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    datePos: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    dateJudge: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | string[];
    placeholder: string | undefined;
    editable: boolean | undefined;
    datePos: string | undefined;
    dateJudge: string | undefined;
}, {}>;
export default _sfc_main;
