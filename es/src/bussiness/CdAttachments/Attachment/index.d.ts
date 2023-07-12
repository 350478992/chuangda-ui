export declare const CdAttachment: import("@chuangda/utils/dist/lib/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    url: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    showCheckBox: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    showSearchPanel: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    idKey: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    cusColumns: {
        type: import("vue").PropType<any[]>;
        required: true;
        default: () => never[];
    };
    uploadShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    delShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    imgPreviewType: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    fileTitleShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    attCategoryDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attClassDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attitleDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attrefsysid: {
        type: import("vue").PropType<string>;
        required: true;
    };
    atttype: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attCategory: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attClass: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attitle: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-del-success" | "on-upload-success")[], "update:modelValue" | "on-del-success" | "on-upload-success", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    showCheckBox: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    showSearchPanel: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    idKey: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    cusColumns: {
        type: import("vue").PropType<any[]>;
        required: true;
        default: () => never[];
    };
    uploadShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    delShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    imgPreviewType: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    fileTitleShow: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    attCategoryDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attClassDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attitleDisabled: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
    attrefsysid: {
        type: import("vue").PropType<string>;
        required: true;
    };
    atttype: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attCategory: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attClass: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    attitle: {
        type: import("vue").PropType<string | undefined>;
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
}, {}>>;
export default CdAttachment;
