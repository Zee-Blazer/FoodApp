interface Fonts {
    title: string,
    header: String,
    body: string,
    caption: string
}

interface FontWeights {
    regular: string,
    medium: string,
    bold: string,
    extraBold: string
}

export const fonts: Fonts = {
    title: "Sen-Bold",
    body: "Sen-Regular",
    caption: "Sen-Medium",
    header: "Sen-ExtraBold"
}

export const fontweights: FontWeights = {
    regular: "400",
    medium: "500",
    bold: "700",
    extraBold: "900"
}

export const fontSizes = {
    sm: 12,
    sz: 14,
    lg: 18,
    medium: 15,
    xlg: 21,
    caption: 21,
    name: 16,
    button: 14,
    body: 16,
    title: 20,
    h5: 24,
    h4: 34,
    h3: 45,
    h2: 56,
    h1: 112
}
