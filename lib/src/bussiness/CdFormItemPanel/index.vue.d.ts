import { PropType } from "vue";
import { AnyFieldObj } from '../../interfaces';
declare const _sfc_main: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: any;
    };
    noShowFieldControl: {
        type: ArrayConstructor;
        default: () => never[];
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRequired: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    viewNo: {
        type: StringConstructor;
        required: true;
    };
    attrPrefix: {
        type: StringConstructor;
        default: string;
    };
    formObject: {
        type: PropType<AnyFieldObj>;
        required: true;
    };
    ruleValidate: {
        type: ObjectConstructor;
        default: () => {};
    };
    slots: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fullItemKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    defaultClosePanel: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "renderPercentPath"[], "renderPercentPath", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: any;
    };
    noShowFieldControl: {
        type: ArrayConstructor;
        default: () => never[];
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRequired: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    viewNo: {
        type: StringConstructor;
        required: true;
    };
    attrPrefix: {
        type: StringConstructor;
        default: string;
    };
    formObject: {
        type: PropType<AnyFieldObj>;
        required: true;
    };
    ruleValidate: {
        type: ObjectConstructor;
        default: () => {};
    };
    slots: {
        type: ArrayConstructor;
        default: () => never[];
    };
    fullItemKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    defaultClosePanel: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & {
    onRenderPercentPath?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    slots: unknown[];
    noShowFieldControl: unknown[];
    readOnly: boolean;
    showRequired: boolean;
    lazy: boolean;
    attrPrefix: string;
    ruleValidate: Record<string, any>;
    fullItemKeys: unknown[];
    defaultClosePanel: unknown[];
}, {}>;
export default _sfc_main;
