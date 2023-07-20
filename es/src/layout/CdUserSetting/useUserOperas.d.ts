export default function (operaFuncs: any): {
    operasAdd: (extraOperas: any[]) => {
        name: string;
        label: string;
        func: () => void;
    }[];
    operasDel: (hideOperasName: string[]) => {
        name: string;
        label: string;
        func: () => void;
    }[];
    operasGet: () => {
        name: string;
        label: string;
        func: () => void;
    }[];
    operasUpdate: (updateOperas: any[]) => void;
};
