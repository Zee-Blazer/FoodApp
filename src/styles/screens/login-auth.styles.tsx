
import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../infrastructure/Theme';

const { height } = Dimensions.get("window");

export const loginStyle = StyleSheet.create({
    upperBg: {
        flex: 1,
        height: 365,
        justifyContent: 'center'
    },
    darkBg: {
        backgroundColor: "black"
    },
    headerBox: {
        flex: 1,
        height: 300,
        marginTop: theme.space[12],
    },
    headerText: {
        textAlign: "center",
        fontSize: theme.fontSizes.h4,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 5,
        fontFamily: theme.fonts.title
    },
    headerPara: {
        textAlign: "center",
        fontSize: theme.fontSizes.medium,
        marginTop: theme.space[3],
        color: "white",
        fontFamily: theme.fonts.body
    },
    headerExtra: {
        textAlign: "center",
        fontSize: theme.fontSizes.title,
        color: "white",
        fontFamily: theme.fonts.body,
    },
    formContainer: {
        backgroundColor: "white",
        marginTop: -12,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: height *0.712,
        paddingVertical: theme.space[9],
        paddingHorizontal: theme.space[9]
    },
    scrollFormContainer: {
        backgroundColor: "white",
        marginTop: -12,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        height: height *0.4,
        paddingTop: theme.space[9],
        paddingHorizontal: theme.space[9],
        // paddingBottom: 550
    },
    labelText: {
        fontFamily: theme.fonts.body,
        color: theme.colors.text.label,
        marginBottom: theme.space[2]
    },
    textInputStyle: {
        backgroundColor: theme.colors.bg.tertiary,
        paddingVertical: theme.space[8],
        paddingHorizontal: theme.space[7],
        borderRadius: 10,
        marginBottom: theme.space[8],
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 24,
        fontSize: 14,
        fontFamily: theme.fonts.body,
        color: "#32343E"
    },
    eyesIconStyle: {
        marginLeft: theme.space[8]
    },
    checkBoxStyle: {
        alignSelf: "center"
    },
    bottomFormRequest: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    forgotPasswordLink: {
        color: theme.colors.text.tertiary,
        fontSize: theme.fontSizes.sz,
        fontFamily: theme.fonts.body
    },
    rememberCheckText: {
        fontSize: 13,
        color: "#7E8A97"
    },
    submitBtn: {
        marginTop: 29,
        marginBottom: 38,
        backgroundColor: theme.colors.buttons.primary,
        paddingVertical: 23,
        borderRadius: 12,
    },
    submitBtnText: {
        textAlign: 'center',
        color: theme.colors.text.normal,
        fontWeight: "bold",
        fontFamily: theme.fonts.title
    },
    otherOpt: {
        fontSize: theme.fontSizes.body,
        color: "#646982",
        fontFamily: theme.fonts.body,
        textAlign: "center",
        marginBottom: theme.space[9]
    },
    otherOptLink: {
        fontFamily: theme.fonts.title,
        color: theme.colors.text.tertiary
    },
    orText: {
        textAlign: "center",
        fontSize: theme.fontSizes.body,
        color: "#646982",
        fontFamily: theme.fonts.body,
    },
    otherSignInLogoCont: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: theme.space[8],
        marginBottom: theme.space[12]
    },
    backOptBtn: {
        position: "absolute",
        width: 40,
        height: 40,
        backgroundColor: "white",
        top: -55,
        left: 20,
        borderRadius: 50
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    otpInput: {
        width: 62,
        height: 62,
        margin: 7,
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: "#F0F5FA"
    },
    verifyCountCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 9
    },
    verifyCodeText: {
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes.sz
    },
    verifyBoldText: {
        textDecorationLine: "underline",
        fontWeight: "700"
    }
})
