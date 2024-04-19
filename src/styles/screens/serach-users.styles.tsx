
import { StyleSheet } from "react-native";

import { theme } from "../../infrastructure/Theme";

export const searchUsersStyles = StyleSheet.create({
    backNavOpt: {
        width: 40,
        height: 40,
        backgroundColor: "#ECF0F4",
        borderRadius: 50,
        marginRight: theme.space[7]
    },
    serachHeaderTxt: {
        fontSize: 17,
        fontFamily: theme.fonts.body,
        marginTop: 10,
        fontWeight: "600"
    },
    searchKeyWordCont: {
        borderWidth: 2,
        borderRadius: 33,
        borderColor: theme.colors.borders.secondary,
        marginRight: 10
    },
    searchKeyWords: {
        paddingVertical: theme.space[6],
        paddingHorizontal: theme.space[8],
        color: "#181C2E",
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.body
    },
    miniRestCont: {
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borders.secondary,
        marginTop: 14,
        flexDirection: "row"
    },
    miniResImg: {
        width: 60,
        height: 50,
        marginRight: 10,
        borderRadius: 8
    },
    minResDescrip: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        letterSpacing: 0.5,
        marginBottom: 8
    },
    iconText: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.body,
        marginTop: 1,
        marginLeft: 4
    },
    // foodPackCont: {
    //     marginTop: 24
    // },
    foodPackImg: {
        width: 122,
        height: 84,
        borderRadius: 15,
        marginHorizontal: 18,
        zIndex: 9
    },
    foodPackInfoCont: {
        borderRadius: 24,
        padding: 12,
        backgroundColor: "white",
        top: "-15%",
        paddingTop: 54
    },
    foodPackMainTxt: {
        fontSize: 15,
        fontFamily: theme.fonts.title,
        color: "#32343E"
    },
    foodPackSubTxt: {
        fontSize: 13,
        fontFamily: theme.fonts.body,
        color: "#646982",
        marginTop: 5
    },
    searchBoxOptCont: {
        position: "absolute",
        backgroundColor: "#ECF0F4",
        width: '100%',
        top: "17%",
        zIndex: 1,
        padding: 12,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        maxHeight: 300,
        overflow: "hidden",
    },
    searchBoxOpt: {
        flexDirection: "row",
        marginVertical: 6
    },
    searchBoxOptIcon: {
        marginRight: 7,
        marginTop: 2
    },
    searchBoxOptTxt: {
        fontSize: 14, 
        fontFamily: theme.fonts.body,
        color: "#646982"
    }
});
