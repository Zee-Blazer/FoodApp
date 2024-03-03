
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const addCartUsersStyles = StyleSheet.create({
    formInputCont: {
        marginTop: 24
    },
    formInputLabel: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        marginBottom: 8,
        color: "#A0A5BA"
    },
    formInputField: {
        backgroundColor: "#F0F5FA",
        paddingVertical: 21,
        paddingHorizontal: 20,
        borderRadius: 10,
        color: "#32343E"
    },
    miniFormInputField: {
        width: 150
    }
});
