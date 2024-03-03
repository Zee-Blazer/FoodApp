
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const foodDetailsUserStyles = StyleSheet.create({
    resDetailsImg: {
        width: 358,
        height: 194,
        borderRadius: 32,
        // backgroundColor: "black"
    },
    spaceTop: {
        marginTop: 44
    },
    heartBox: {
        backgroundColor: "rgba(0, 0, 0, 0.46)",
        padding: 4,
        paddingLeft: 6,
        width: 42,
        height: 42,
        top: "-22%",
        left: "83%",
        borderRadius: 50
    },
    resTextCheff: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginTop: 12,
        color: "#181C2E"
    },
    sizeTxt: {
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        marginRight: theme.space[7],
        marginTop: theme.space[6]
    },
    sizeOpt: {
        // paddingVertical: theme.space[6],
        // paddingHorizontal: theme.space[5],
        marginRight: theme.space[4],
        borderRadius: 50
    },
    sizeOptInnerTxt: {
        paddingVertical: theme.space[6],
        paddingHorizontal: theme.space[5]
    },
    sizeOptInnerTxtColor: {
        color: "#121223"
    },
    sizeOptInnerTxtcolorActive: {
        color: "white"
    },
    sizeOptBg: {
        backgroundColor: "#F0F5FA",
    },
    sizeOptBgActive: {
        backgroundColor: "#F58D1D",
    },
    ingridentTxt: {
        fontFamily: theme.fonts.caption,
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center'
    },
    bottomSheetAmountTxt: {
        fontSize: 28,
        color: "#181C2E",
        fontFamily: theme.fonts.body
    },
    bottomSheetAmountCont: {
        backgroundColor: "#121223",
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 14
    },
    bottomSheetAmountNumTxt: {
        fontSize: 16,
        fontFamily: theme.fonts.title,
        color: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 2
    }
});
