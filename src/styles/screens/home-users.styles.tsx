
import { StyleSheet, Platform } from "react-native";

// Theme Styles
import { theme } from "../../infrastructure/Theme";

export const homeUsersScreenStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginHorizontal: theme.space[8],
        backgroundColor: "white",
    },
    flexDesign: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flexWrap: {
        flexWrap: "wrap"
    },
    flexDisplay: {
        flexDirection: "row",
    },
    notAvailableMsg: {
        fontSize: 14,
        color: "#A0A5BA",
        fontFamily: theme.fonts.caption,
        textAlign: "center"
    },
    titleText: {
        color: theme.colors.text.tertiary,
        fontSize: theme.fontSizes.sm,
        fontFamily: theme.fonts.title,
        marginTop: theme.space[4],
        marginBottom: theme.space[0]
    },
    nextTextLoc: {
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body
    },
    smallDownIcon: {
        marginTop: 4, marginLeft: 8
    },
    headerTextCont: {
        marginLeft: theme.space[8]
    },
    shopChartNote: {
        backgroundColor: "#181C2E",
        width: 45,
        height: 45,
        borderRadius: 50,
        marginTop: 2
    },
    shopChartNoteMsg: {
        position: "absolute",
        backgroundColor: "#FF7622",
        paddingVertical: 3,
        paddingHorizontal: theme.space[3],
        borderRadius: 50,
        marginLeft: 20,
        marginTop: -3
    },
    shopChartNoteMsgTxt: {
        color: theme.colors.text.normal,
        fontSize: theme.fontSizes.name,
        fontFamily: theme.fonts.title
    },
    shopChartNoteIcon: {
        marginTop: 10,
        marginLeft: 10
    },
    greetingsFull: {
        marginTop: theme.space[8],
        fontSize: theme.fontSizes.name,
        fontFamily: theme.fonts.body
    },
    strong: {
        fontFamily: theme.fonts.title
    },
    searchBarCont: {
        marginTop: theme.space[7],
        // marginBottom: theme.space[9],
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: "#F6F6F6",
        borderRadius: 10
    },
    searchBarTxt: {
        flex: 1,
        marginHorizontal: theme.space[5],
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body,
        color: "#181C2E"
    },
    spaceTop: {
        marginTop: 32
    },
    spaceTopLittle: {
        marginTop: 14
    },
    cateHeadTxt: {
        fontSize: 20,
        fontFamily: theme.fonts.body,
        color: theme.colors.text.label
    },
    cateSeeAllTxt: {
        fontSize: 16, //theme.fontSizes.medium
        color: "#333333",
        marginTop: 6
    },
    boxSpacing: {
        marginTop: 20,
        // marginBottom: theme.space[9]
    },
    boxSpacing2: {
        marginTop: 5
    },
    boxShadow: {
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
    },
    noAvailableRestaurantError: {
        fontSize: 21,
        fontFamily: theme.fonts.caption,
        color: "#A0A5BA",
        marginVertical: "18%",
        textAlign: "center"
    },
    displayImg: {
        width: 44,
        height: 44,
        borderRadius: 50
    },
    innerSpace: {
        paddingVertical: 7,
        marginHorizontal: -2
    },
    specialBgColor: {
        backgroundColor: "#FFD27C"
    },
    specialBgWhite: {
        backgroundColor: "white"
    },
    cateStoreItemText: {
        color: "#32343E",
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.title,
        marginHorizontal: 12,
        marginTop: 12
    },
    cateStoreItem: {
        padding: 8,
        borderRadius: 39,
        marginRight: 7
    },
    restaurantCont: {
        marginTop: 18,
        marginBottom: 10
    },
    restaurantImg: {
        width: 360,
        height: 137,
        borderRadius: 10
    },
    restaurantContHeaderTxt: {
        fontSize: theme.fontSizes.title,
        fontFamily: theme.fonts.body,
        marginTop: 8,
        color: "#181C2E"
    },
    restaurantContSubHeaderTxt: {
        color: "#A0A5BA",
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body,
        marginTop: 5
    },
    iconTextCont: {
        marginRight: theme.space[8]
    },
    iconText: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.title,
        marginTop: 1,
        marginLeft: 4
    }
});
