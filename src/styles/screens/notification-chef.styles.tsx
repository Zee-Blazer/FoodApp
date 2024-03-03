
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const notificationChefStyles = StyleSheet.create({
    headerNotificationTxt: {
        fontSize: 18,
        fontFamily: theme.fonts.body,
        marginVertical: 12,
        marginBottom: 21
    },
    notificationContainer: {
        marginTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 2,
        borderBottomColor: "#F0F4F9",
    },
    iconPersonCont: {
        backgroundColor: "#98A8B8",
        padding: 6,
        borderRadius: 50,
        height: 54,
        width: 54
    },
    notificationMealImg: {
        width: 53,
        height: 54,
        borderRadius: 10
    },
    nameNotificationTxt: {
        fontSize: 13,
        fontFamily: theme.fonts.body,
        marginTop: 3
    },
    timeNotificationTxt: {
        fontSize: 10,
        color: "#9C9BA6",
        fontFamily: theme.fonts.body,
        marginTop: 10
    }
});
