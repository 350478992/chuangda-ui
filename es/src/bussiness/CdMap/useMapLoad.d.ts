export default function (): {
    loadBMap: (ak: string) => Promise<unknown>;
    loadAMap: (ak: string) => Promise<unknown>;
};
