
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const successUserStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    lottieStyle: {
        width: 928, 
        height: 200
    },
    congratsTxt: {
        fontFamily: theme.fonts.title,
        fontSize: 24,
        color: "#111A2C"
    },
    congratsSubTxt: {
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#525C67",
        marginTop: 16,
        maxWidth: 262,
        lineHeight: 21,
        textAlign: "center"
    }
});
