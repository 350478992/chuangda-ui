export declare const CdDatePicker: import("@chuangda/utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | string[]>;
        required: true;
        default: string;
    };
    type: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    size: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placement: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    editable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    datePos: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    dateJudge: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | string[]>;
        required: true;
        default: string;
    };
    type: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    size: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placement: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    editable: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    datePos: {
        type: import("vue").PropType<string | undefined>;
        required: false;
        default: string;
    };
    dateJudge: {
        type: import("vue").PropType<string | undefined>;
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
}, {}>>;
export default CdDatePicker;
