export declare const CdCheckboxGroup: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: import("vue").PropType<import("../../types").OptionType[]>;
        default: () => import("../../types").OptionType[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    pVal: {
        type: StringConstructor;
        default: string;
    };
    pId: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: import("vue").PropType<import("../../types").OptionType[]>;
        default: () => import("../../types").OptionType[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    pVal: {
        type: StringConstructor;
        default: string;
    };
    pId: {
        type: StringConstructor;
        default: string;
    };
    size: {
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
    list: import("../../types").OptionType[];
}, {}>>;
export default CdCheckboxGroup;
