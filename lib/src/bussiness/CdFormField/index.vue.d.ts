import { PropType } from "vue/dist/vue";
import { DictQueryCond } from "src/interfaces";
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | DateConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    dictConf: {
        type: PropType<DictQueryCond>;
        default: () => DictQueryCond;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | DateConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    dictConf: {
        type: PropType<DictQueryCond>;
        default: () => DictQueryCond;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    disabled: boolean;
    modelValue: string | number | unknown[] | Date;
    width: string;
    readonly: boolean;
    color: string;
    dictConf: DictQueryCond;
}, {}>;
export default _sfc_main;
