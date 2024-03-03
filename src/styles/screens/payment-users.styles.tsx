
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const paymentUsersStyles = StyleSheet.create({
    paymentIconCont: {
        paddingTop: 25,
        width: 89,
        height: 72,
        backgroundColor: "#F0F5FA",
        borderRadius: 10,
        alignItems: "center",
    },
    paymentIconTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginTop: 4,
        textAlign: 'center',
        color: "#464E57"
    },
    noCardImg: {
        width: 240,
        height: 147,
        marginTop: 14
    },
    noCardCont: {
        width: 347,
        height: 275,
        borderRadius: 10,
        backgroundColor: "#F7F8F9",
        marginTop: 25,
        alignItems: "center",
        marginHorizontal: "3%",
        padding: 12
    },
    noCardHeaderTxt: {
        fontSize: 16,
        fontFamily: theme.fonts.title,
        marginTop: 10
    },
    noCardSubHeaderTxt: {
        color: "#2D2D2D", 
        width: 260, 
        textAlign: "center",
        fontSize: 15,
        fontFamily: theme.fonts.body,
        lineHeight: 21,
        marginTop: 6
    },
    submitBtn: {
        marginTop: 29,
        marginBottom: 38,
        backgroundColor: "white",
        paddingVertical: 23,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#F0F5FA",
        // alignItems: "center",
        paddingHorizontal: "35%"
    },
    submitBtnText: {
        textAlign: 'center',
        color: theme.colors.text.tertiary,
        fontWeight: "bold",
        fontFamily: theme.fonts.title
    },
    placeBarTxt: {
        color: "#A0A5BA",
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginTop: 12
    },
    placeBarTxtPrice: {
        fontSize: 30,
        color: "#181C2E",
        marginLeft: 10
    },
    presentCard: {
        backgroundColor: "#F4F5F7",
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 25,
        borderRadius: 10
    },
    spaceUp: {
        marginTop: 9
    },
    flexDisplay: {
        flexDirection: "row"
    },
    spaceRight: {
        marginRight: 21
    },
    hashedCode: {
        color: "#32343E",
        fontSize: 16,
        fontFamily: theme.fonts.body,
        marginTop: 5,
        marginRight: 7
    },
    numberCode: {
        color: "#32343E",
        fontSize: 16,
        fontFamily: theme.fonts.body,
        marginTop: 2
    }
});
