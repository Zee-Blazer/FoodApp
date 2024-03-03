
import { StyleSheet } from "react-native";

// Theme
import { theme } from "../../infrastructure/Theme";

export const addScreenChefStyles = StyleSheet.create({
    resetTxBtn: {
        fontSize: 14,
        color: "#FB6D3A",
        fontFamily: theme.fonts.body,
        marginTop: 18
    },
    formLabelTxt: {
        fontSize: 13,
        fontFamily: theme.fonts.body,
        color: "#32343E",
        letterSpacing: 1,
        marginBottom: 8
    },
    textInputItem: {
        borderWidth: 1,
        borderColor: "#E8EAED",
        borderRadius: 10,
        paddingVertical: 18, 
        paddingHorizontal: 16,
        backgroundColor: "#FDFDFD",
        fontFamily: theme.fonts.body,
        color: "#32343E",
        fontSize: 12
    },
    fullSize: {
        width: 115,
        paddingVertical: 14,
        fontSize: 14
    },
    selectedImg: {
        width: 111,
        height: 101,
        borderRadius: 20,
        marginRight: 24
    },
    uploadCont: {
        backgroundColor: "#FDFDFD",
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: "#E8EAED",
        paddingVertical: 13,
        paddingHorizontal: 35
    },
    uploadContTxt: {
        color: "#9C9BA6",
        fontSize: 13,
        fontFamily: theme.fonts.body,
        textAlign: "center",
        marginTop: 9
    },
    checkableOption: {
        borderWidth: 2,
        borderColor: "#E8EAED",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#FDFDFD",
    },
    checkableOptionTxt: {
        fontFamily: theme.fonts.body,
        color: "#32343E",
        fontSize: 14
    },
    checkableOptionActive: {
        borderColor: "#FB6D3A"
    },
    checkableOptionTxtActive: {
        color: "#FB6D3A"
    }
});
