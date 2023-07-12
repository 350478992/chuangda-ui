declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    footerHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: ObjectConstructor;
        default: () => {
            top: string;
        };
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    minHeight: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-visible-change" | "on-ok" | "on-cancel")[], "update:modelValue" | "on-visible-change" | "on-ok" | "on-cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    footerHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: ObjectConstructor;
        default: () => {
            top: string;
        };
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    minHeight: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-visible-change"?: ((...args: any[]) => any) | undefined;
    "onOn-ok"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    modelValue: boolean;
    title: string;
    closable: boolean;
    maskClosable: boolean;
    footerHide: boolean;
    loading: boolean;
    scrollable: boolean;
    fullscreen: boolean;
    draggable: boolean;
    okText: string;
    cancelText: string;
    styles: Record<string, any>;
    className: string;
    minHeight: string;
    maxHeight: string;
}, {}>;
export default _sfc_main;
