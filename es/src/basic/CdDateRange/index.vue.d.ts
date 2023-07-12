declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    transfer: {
        type: BooleanConstructor;
        default: boolean;
    };
    startDateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    endDateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    transfer: {
        type: BooleanConstructor;
        default: boolean;
    };
    startDateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    endDateDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    startDateDisabled: boolean;
    endDateDisabled: boolean;
    allDisabled: boolean;
    transfer: boolean;
}, {}>;
export default _sfc_main;
