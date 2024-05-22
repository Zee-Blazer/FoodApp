
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const usersCartUsersStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: theme.space[7],
        backgroundColor: "#121223",
        color: "white"
    },
    wildSpace: {
        marginHorizontal: theme.space[9]
    },
    upperEditTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        textDecorationLine: "underline",
        marginTop: 14
    },
    cartOptionCont: {
        marginVertical: 18
    },
    cartOptionImg: {
        width: 125,
        height: 106,
        borderRadius: 25,
        marginRight: theme.space[8]
    },
    mainRestTxt: {
        fontSize: 18,
        fontFamily: theme.fonts.body,
        color: "white",
        maxWidth: 140
    },
    mainRestTxtPrc: {
        fontSize: 20,
        fontFamily: theme.fonts.title,
        marginTop: 10,
        color: "white"
    },
    quantTxt: {
        fontSize: 18,
        fontFamily: theme.fonts.body,
        color: "#888891",
        flex: 1
    },
    quantAmtTxt: {
        fontSize: 16,
        fontFamily: theme.fonts.title,
        color: "white",
        marginHorizontal: 12
    },
    colorBottomSheetTxt: {
        color: "#FF7622",
        fontSize: 14,
        fontFamily: theme.fonts.body
    }
});
