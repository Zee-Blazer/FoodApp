
import { StyleSheet } from "react-native";

// Theme 
import { theme } from "../../infrastructure/Theme";

export const editProfileUsersStyles = StyleSheet.create({
    editableImg: {
        width: 130,
        height: 130,
        borderRadius: 130
    },
    properAlignment: {
        alignItems: "center",
        marginTop: 25,
        marginBottom: 6
    },
    editIcon: {
        marginTop: -40,
        marginLeft: 98
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        marginBottom: 8
    },
    inputField: {
        padding: 20,
        backgroundColor: "#F0F5FA",
        borderRadius: 10
    },
    inputContainer: {
        marginTop: 24
    }
})
