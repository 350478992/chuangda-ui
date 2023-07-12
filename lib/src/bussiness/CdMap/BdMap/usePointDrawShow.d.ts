import { IProps, IDrawMarkerObj } from '../../../bussiness/CdMap/typesMng';
export default function usePointDrawShow($props: IProps, myMap: any, drawMarkerObj: IDrawMarkerObj, drawEquipSelect: ((list: any[]) => void) | undefined): {
    onCityChange: (t: any) => void;
    onCitySearch: () => void;
    onUpdateEquipDraw: () => void;
    onEquipDrawSearch: () => Promise<any>;
    onEquipAdd: () => void;
};
