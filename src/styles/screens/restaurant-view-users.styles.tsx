
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const restaurantViewUsersStyles = StyleSheet.create({
    displayImg: {
        width: 364,
        height: 184,
        resizeMode: "cover",
        borderRadius: 32
    },
    optionContActive: { 
        backgroundColor: "#F58D1D", 
        marginRight: 10, 
        borderRadius: 33, 
    },
    coverBgContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.71)"
    },
    insideBgContainer: {
        backgroundColor: "white",
        margin: 24,
        marginTop: 102,
        padding: 8,
        borderRadius: 12
    },
    insideBgHeaderTxt: {
        fontSize: 17,
        color: "#181C2E",
        fontFamily: theme.fonts.body,
        marginTop: 8,
        marginLeft: theme.space[6]
    },
    littleOptHeaderTxt: {
        fontSize: 13,
        fontFamily: theme.fonts.body
    },
    uniqueCont: {
        marginTop: 20,
        padding: theme.space[6]
    }
});
