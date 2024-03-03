interface LineHeights {
    title: string,
    para: String
};

interface Spacing {
    [index:number]: number
};

export const lineHeight: LineHeights = {
    title: "18px",
    para: "24px"
}

export const space: Spacing = [2,4,7,8,10,12,14,16,24,32,54,78,118];
