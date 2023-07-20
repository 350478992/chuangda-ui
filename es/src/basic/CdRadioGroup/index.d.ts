export declare const CdRadioGroup: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: import("vue").PropType<import("../../common/types").OptionType[]>;
        default: () => import("../../common/types").OptionType[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    allDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    pId: {
        type: StringConstructor;
        default: string;
    };
    pVal: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: import("vue").PropType<import("../../common/types").OptionType[]>;
        default: () => import("../../common/types").OptionType[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    allDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    pId: {
        type: StringConstructor;
        default: string;
    };
    pVal: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    size: string;
    modelValue: string | unknown[];
    pVal: string;
    pId: string;
    list: import("../../common/types").OptionType[];
    allDisabled: boolean;
}, {}>>;
export default CdRadioGroup;
