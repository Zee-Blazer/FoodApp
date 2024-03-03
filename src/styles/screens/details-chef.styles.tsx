
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const detailsChefStyles = StyleSheet.create({
    navItemContainer: {
        borderBottomWidth: 2,
        justifyContent: "space-around",
        borderBottomColor: "#E8E8E8",
        marginTop: 10
    },
    navItemTxtCont: {
        paddingBottom: 15,
        paddingHorizontal: 14
    },
    navItemTxtContActive: {
        borderBottomWidth: 2,
        borderBottomColor: "#FB6D3A"
    },
    navItemTxt: {
        color: "#32343E",
        fontSize: 14,
        fontFamily: theme.fonts.body
    },
    navItemTxtActive: {
        color: "#FB6D3A",
        fontFamily: theme.fonts.title
    },
    introDetailsTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#9C9BA6",
        marginTop: 24,
        marginBottom: 10
    },
    mealDetailImg: {
        width: 102,
        height: 102,
        borderRadius: 20,
        marginRight: 12
    },
    properSection: {
        width: 250, 
        marginTop: 4
    },
    mealDetailTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    },
    mealDetailTypeBox: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#ff772231",
        borderRadius: 30
    },
    mealDetailTypeTxt: {
        color: "#FF7622",
    },
    mealDetailTypePriceTxt: {
        color: "#32343E",
        fontSize: 17,
        fontFamily: theme.fonts.title
    },
    mealRatingTxt: {
        color: "#FB6D3A",
        fontSize: 14,
        fontFamily: theme.fonts.title,
        marginLeft: 4,
        marginRight: 10
    },
    mealRatingDetailsRec: {
        color: "#AFAFAF",
        fontSize: 14,
        fontFamily: theme.fonts.body
    }
});
