export declare const CdDatePickerRange: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    keys: {
        type: import("vue").PropType<string[]>;
        required: true;
        default: () => string[];
    };
    startDate: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    endDate: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    startDateDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    endDateDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    allDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:startDate" | "update:endDate")[], "update:startDate" | "update:endDate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    keys: {
        type: import("vue").PropType<string[]>;
        required: true;
        default: () => string[];
    };
    startDate: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    endDate: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    startDateDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    endDateDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    allDisabled: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
}>> & {
    "onUpdate:startDate"?: ((...args: any[]) => any) | undefined;
    "onUpdate:endDate"?: ((...args: any[]) => any) | undefined;
}, {
    keys: string[];
    startDate: string;
    endDate: string;
    startDateDisabled: boolean;
    endDateDisabled: boolean;
    allDisabled: boolean;
}, {}>>;
export default CdDatePickerRange;
