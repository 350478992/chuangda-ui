import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    keys: {
        type: __PropType<string[]>;
        required: true;
        default: () => string[];
    };
    startDate: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    endDate: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    startDateDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    endDateDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    allDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:startDate" | "update:endDate")[], "update:startDate" | "update:endDate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    keys: {
        type: __PropType<string[]>;
        required: true;
        default: () => string[];
    };
    startDate: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    endDate: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    startDateDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    endDateDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    allDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:startDate"?: ((...args: any[]) => any) | undefined;
    "onUpdate:endDate"?: ((...args: any[]) => any) | undefined;
}, {
    keys: string[];
    startDate: string;
    endDate: string;
    startDateDisabled: boolean | undefined;
    endDateDisabled: boolean | undefined;
    allDisabled: boolean | undefined;
}, {}>;
export default _sfc_main;
