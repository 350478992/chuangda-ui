import { IProps } from '../../../bussiness/CdMap/typesMng';
export default function usePointShow($props: IProps, myMap: any): {
    pointInit: () => Promise<any>;
    usePoint: () => {
        lng?: number | undefined;
        lat?: number | undefined;
        of?: string | undefined;
    };
};
