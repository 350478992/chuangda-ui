import { PropType } from 'vue';
import { OptionType } from 'src/interfaces';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: PropType<OptionType[]>;
        default: () => never[];
    };
    equclacode: {
        type: StringConstructor;
        default: string;
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
    size: {
        type: StringConstructor;
        default: string;
    };
    empty: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change" | "on-query")[], "update:modelValue" | "on-change" | "on-query", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    list: {
        type: PropType<OptionType[]>;
        default: () => never[];
    };
    equclacode: {
        type: StringConstructor;
        default: string;
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
    size: {
        type: StringConstructor;
        default: string;
    };
    empty: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onOn-query"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    size: string;
    modelValue: string | unknown[];
    pVal: string;
    pId: string;
    list: OptionType[];
    equclacode: string;
    empty: boolean;
    labelInValue: boolean;
    selectFirst: boolean;
}, {}>;
export default _sfc_main;
