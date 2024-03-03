
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const reviewChefStyles = StyleSheet.create({
    userIconCont: {
        width: 38,
        height: 38,
        backgroundColor: "#98A8B8",
        borderRadius: 50,
        padding: 7,
        marginTop: 2
    },
    reviewCommentCont: {
        paddingHorizontal: 12,
        paddingVertical: 15,
        backgroundColor: "#F6F8FA",
        borderRadius: 15,
        marginHorizontal: 10
    },
    reviewsDateTxt: {
        fontSize: 12,
        fontFamily: theme.fonts.body,
        color: "#9C9BA6"
    },
    reviewMainComment: {
        fontSize: 14,
        fontFamily: theme.fonts.title,
        color: "#32343E",
        marginTop: 10,
        marginBottom: 6
    }
});
