import { OptionType } from '../../common/types';
import { PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: PropType<OptionType[]>;
        default: () => OptionType[];
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
        type: PropType<OptionType[]>;
        default: () => OptionType[];
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
    list: OptionType[];
}, {}>;
export default _sfc_main;
