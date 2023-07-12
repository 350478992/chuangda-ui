export interface IProps {
    initCity: string;
    detailAddress: string;
    zoom: number;
    mapHeight: string;
    isFirstShowWin: boolean;
    multipointMarker: boolean;
    multipointMarkerInfoShow: boolean;
    multipointMarkerList: any[];
    isDrawMarker: boolean;
    cityParentCode: string;
    getDrawAreaEquips: Function;
}
export interface IDrawMarkerObj {
    cityCode: string;
    cityName: string;
    address: string;
    editingState: boolean;
    circleRadius: number;
    equipList: any[];
}
export interface IPoint {
    lng?: number;
    lat?: number;
    of?: string;
}
