import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    lookOnly: {
        type: __PropType<boolean>;
        required: true;
    };
    groupAtttype: {
        type: __PropType<string>;
        required: true;
    };
    groupApiType: {
        type: __PropType<string>;
        required: true;
    };
    attrefsysid: {
        type: __PropType<string>;
        required: true;
    };
    url: {
        type: __PropType<string | undefined>;
        required: false;
    };
    uploadShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    itemcode: {
        type: __PropType<string | undefined>;
        required: false;
    };
    isOss: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    lookOnly: {
        type: __PropType<boolean>;
        required: true;
    };
    groupAtttype: {
        type: __PropType<string>;
        required: true;
    };
    groupApiType: {
        type: __PropType<string>;
        required: true;
    };
    attrefsysid: {
        type: __PropType<string>;
        required: true;
    };
    url: {
        type: __PropType<string | undefined>;
        required: false;
    };
    uploadShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delShow: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    itemcode: {
        type: __PropType<string | undefined>;
        required: false;
    };
    isOss: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    uploadShow: boolean | undefined;
    delShow: boolean | undefined;
}, {}>;
export default _sfc_main;
