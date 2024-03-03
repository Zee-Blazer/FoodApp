
interface Ele {
    primary: String,
    secondary: String,
    tertiary: String
}

interface Colors {
    bg: Ele,
    borders: Ele,
    icons: Ele,
    text: Ele,
    buttons: Ele
}

export const colors = {
    bg: {
        primary: "#FFFFFF", // White
        secondary: "#F6F6F6", // Grey somethin
        tertiary: "#F0F5FA" // Grey another thing
    },
    borders: {
        primary: "#FF7622", // Orangeish
        secondary: "#EDEDED", //Greyish
        tertiary: "#"
    },
    icons: {
        primary: "#FF7622", // Orangeish
        secondary: "#121223",  // Blackish
        tertiary: "#EDEDED" // Greyish
    },
    text: {
        primary: "#1E1D1D", // Blackish
        secondary: "#676767", //Greyish
        tertiary: "#FF7622", // Orangeish
        label: "#32343E",
        placeholder: "#A0A5BA",
        normal: "#FFFFFF"
    },
    buttons: {
        primary: "#FF7622", // Orangeish
        secondary: "#FFFFFF", // White
        tertiary: "#ECF0F4" // Greyish
    }
};
