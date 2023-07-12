import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    formObj: {
        type: __PropType<{
            attCategory?: string | undefined;
            attClass?: string | undefined;
            attitle?: string | undefined;
        }>;
        required: true;
        default: () => {};
    };
    uploadUrl: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    accept: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    format: {
        type: __PropType<string[] | undefined>;
        required: false;
        default: () => never[];
    };
    itemcode: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    maxSize: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    seletLastTitle: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    isOss: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    beforeUploadHandle: {
        type: __PropType<(() => boolean) | undefined>;
        required: false;
        default: () => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-cancel"[], "on-cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    formObj: {
        type: __PropType<{
            attCategory?: string | undefined;
            attClass?: string | undefined;
            attitle?: string | undefined;
        }>;
        required: true;
        default: () => {};
    };
    uploadUrl: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    accept: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    format: {
        type: __PropType<string[] | undefined>;
        required: false;
        default: () => never[];
    };
    itemcode: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    maxSize: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    seletLastTitle: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    isOss: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    beforeUploadHandle: {
        type: __PropType<(() => boolean) | undefined>;
        required: false;
        default: () => boolean;
    };
}>> & {
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    itemcode: string | undefined;
    isOss: boolean | undefined;
    formObj: {
        attCategory?: string | undefined;
        attClass?: string | undefined;
        attitle?: string | undefined;
    };
    uploadUrl: string | undefined;
    accept: string | undefined;
    format: string[] | undefined;
    multiple: boolean | undefined;
    maxSize: string | number | undefined;
    seletLastTitle: boolean | undefined;
    beforeUploadHandle: (() => boolean) | undefined;
}, {}>;
export default _sfc_main;
