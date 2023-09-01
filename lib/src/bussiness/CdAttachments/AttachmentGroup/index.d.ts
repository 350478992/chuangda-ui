export declare const CdAttachmentGroup: import("@chuangda/utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    lookOnly: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    groupAtttype: {
        type: import("vue").PropType<string>;
        required: true;
    };
    groupApiType: {
        type: import("vue").PropType<string>;
        required: true;
    };
    attrefsysid: {
        type: import("vue").PropType<string>;
        required: true;
    };
    url: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    uploadShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    itemcode: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    isOss: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    lookOnly: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    groupAtttype: {
        type: import("vue").PropType<string>;
        required: true;
    };
    groupApiType: {
        type: import("vue").PropType<string>;
        required: true;
    };
    attrefsysid: {
        type: import("vue").PropType<string>;
        required: true;
    };
    url: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    uploadShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delShow: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    itemcode: {
        type: import("vue").PropType<string | undefined>;
        required: false;
    };
    isOss: {
        type: import("vue").PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    uploadShow: boolean | undefined;
    delShow: boolean | undefined;
}, {}>>;
export default CdAttachmentGroup;
