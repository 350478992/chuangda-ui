import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    url: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    showCheckBox: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    showSearchPanel: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    idKey: {
        type: __PropType<string | undefined>;
        required: false;
    };
    cusColumns: {
        type: __PropType<any[]>;
        required: true;
        default: () => never[];
    };
    uploadShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    delShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    imgPreviewType: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    fileTitleShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    attCategoryDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attClassDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attitleDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attrefsysid: {
        type: __PropType<string>;
        required: true;
    };
    atttype: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attCategory: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attitle: {
        type: __PropType<string | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-del-success" | "on-upload-success")[], "update:modelValue" | "on-del-success" | "on-upload-success", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    showCheckBox: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    showSearchPanel: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    idKey: {
        type: __PropType<string | undefined>;
        required: false;
    };
    cusColumns: {
        type: __PropType<any[]>;
        required: true;
        default: () => never[];
    };
    uploadShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    delShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    imgPreviewType: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    fileTitleShow: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    attCategoryDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attClassDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attitleDisabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    attrefsysid: {
        type: __PropType<string>;
        required: true;
    };
    atttype: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attCategory: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
    attitle: {
        type: __PropType<string | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-del-success"?: ((...args: any[]) => any) | undefined;
    "onOn-upload-success"?: ((...args: any[]) => any) | undefined;
}, {
    showCheckBox: boolean;
    url: string;
    showSearchPanel: boolean;
    cusColumns: any[];
    uploadShow: boolean;
    delShow: boolean;
    imgPreviewType: string;
    fileTitleShow: boolean;
}, {}>;
export default _sfc_main;
