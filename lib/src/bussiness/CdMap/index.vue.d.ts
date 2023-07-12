declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: BooleanConstructor;
    mapType: {
        type: StringConstructor;
        default: string;
    };
    initCity: {
        type: StringConstructor;
        default: string;
    };
    detailAddress: {
        type: StringConstructor;
        default: string;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    mapHeight: {
        type: StringConstructor;
        default: string;
    };
    isFirstShowWin: {
        type: BooleanConstructor;
        default: boolean;
    };
    multipointMarker: BooleanConstructor;
    multipointMarkerInfoShow: BooleanConstructor;
    multipointMarkerList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isDrawMarker: BooleanConstructor;
    cityParentCode: {
        type: StringConstructor;
        default: string;
    };
    getDrawAreaEquips: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "get-map-geo" | "draw-equip-select")[], "update:modelValue" | "get-map-geo" | "draw-equip-select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: BooleanConstructor;
    mapType: {
        type: StringConstructor;
        default: string;
    };
    initCity: {
        type: StringConstructor;
        default: string;
    };
    detailAddress: {
        type: StringConstructor;
        default: string;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    mapHeight: {
        type: StringConstructor;
        default: string;
    };
    isFirstShowWin: {
        type: BooleanConstructor;
        default: boolean;
    };
    multipointMarker: BooleanConstructor;
    multipointMarkerInfoShow: BooleanConstructor;
    multipointMarkerList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isDrawMarker: BooleanConstructor;
    cityParentCode: {
        type: StringConstructor;
        default: string;
    };
    getDrawAreaEquips: {
        type: FunctionConstructor;
        default: () => void;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onGet-map-geo"?: ((...args: any[]) => any) | undefined;
    "onDraw-equip-select"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    mapType: string;
    initCity: string;
    detailAddress: string;
    zoom: number;
    mapHeight: string;
    isFirstShowWin: boolean;
    multipointMarker: boolean;
    multipointMarkerInfoShow: boolean;
    multipointMarkerList: unknown[];
    isDrawMarker: boolean;
    cityParentCode: string;
    getDrawAreaEquips: Function;
}, {}>;
export default _sfc_main;
