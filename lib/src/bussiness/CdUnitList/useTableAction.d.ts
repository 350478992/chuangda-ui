export default function ($props: any, onSelConfirmHandle: Function, toUnitFormHandle: Function): {
    title: string;
    key: string;
    width: number;
    align: string;
    render: (h: any, { row }: any) => JSX.Element;
};
