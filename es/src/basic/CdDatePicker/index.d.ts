export declare const CdDatePicker: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    editable: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    datePos: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dateJudge: {
        type: import("vue").PropType<string>;
        required: true;
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
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    editable: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    datePos: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    dateJudge: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | string[];
    placeholder: string;
    editable: boolean;
    datePos: string;
    dateJudge: string;
}, {}>>;
export default CdDatePicker;
