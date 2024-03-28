
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const profileUsersStyles = StyleSheet.create({
    profileDetailImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 32
    },
    profileDetailCont: {
        marginVertical: 12,
        marginTop: 24,
        alignItems: "center"
    },
    profileNameDetailTxt: {
        fontSize: 20,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    },
    profileSubtitleDetailTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#A0A5BA",
        marginTop: 8
    },
    profileActionCont: {
        padding: 20,
        paddingBottom: 4,
        marginVertical: 10,
        backgroundColor: "#F6F8FA",
        borderRadius: 16
    },
    profileActionContTxt: {
        fontSize: 16,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        marginLeft: 14
    },
    infoActionContTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        marginTop: -2
    },
    infoActionContSubTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#6B6E82"
    },
    rateTxt: {
        fontSize: 17,
        color: "#9C9BA6",
        fontFamily: theme.fonts.title,
        marginTop: 13
    },
    becomeAdmin: {
        textAlign: "center",
        color: "#FB6D3A",
        fontFamily: theme.fonts.body,
        fontSize: 10
    },
    chefEditBtn: {
        color: "#FF7622",
        fontSize: 12,
        fontFamily: theme.fonts.body,
        marginRight: 6,
        marginTop: 18
    }
});
