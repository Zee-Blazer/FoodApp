
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// Theme styling
import { theme } from "../../infrastructure/Theme";

export const onboardingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    loadingContainerCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    lottie: {
        width: width*0.9,
        height: width
    },
    loadingLottie: {
        width: width*0.5,
        height: width*0.7
    },
    noInternet: {
        fontSize: 18,
        fontFamily: theme.fonts.body,
        color: "red",
        textAlign: "center",
        marginHorizontal: 12
    },
    doneButton: {
        padding: 20,
        backgroundColor: theme.colors.buttons.primary,
        width: width*0.8,
        marginRight: width*0.1,
        textAlign: "center",
        borderRadius: theme.sizes[0],
        fontFamily: theme.fonts.body
    },
    nextButton: {
        padding: 10,
        backgroundColor: theme.colors.buttons.primary,
        width: width*0.2,
        marginRight: 6,
        textAlign: "center",
        borderRadius: theme.sizes[0],
        fontFamily: theme.fonts.body
    },
    skipButton: {
        padding: 10,
        backgroundColor: theme.colors.buttons.secondary,
        width: width*0.2,
        marginLeft: 6,
        textAlign: "center",
        borderRadius: theme.sizes[0],
        fontFamily: theme.fonts.body
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: theme.fontSizes.sz,
        fontWeight: theme.fontweights.bold,
    },
    flexOpose: {
        display: "flex",
        flexDirection: "row"
    },
    titleOnboarding: {
        fontSize: theme.fontSizes.h5,
        fontFamily: theme.fonts.header,
        color: "#32343E"
    },
    subTitleOnboarding: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.body,
        color: "#646982"
    }
})
