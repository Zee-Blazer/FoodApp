
import { StyleSheet } from 'react-native';

// Theme 
import { theme } from '../../infrastructure/Theme';

export const profileChefStyles = StyleSheet.create({
    profileHeader: {
        paddingVertical: 35,
        backgroundColor: "#FF7622",
        paddingTop: 96,
        borderRadius: 25
    },
    profileHeaderAvailBal: {
        fontSize: 16,
        fontFamily: theme.fonts.body,
        color: "white",
        textAlign: "center",
        marginBottom: 1
    },
    profileHeaderAmt: {
        fontSize: 40,
        fontFamily: theme.fonts.title,
        color: "white",
        textAlign: "center"
    },
    profileHeaderWithDrawBtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 17,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10
    },
    profileHeaderBtn: {
        color: "white",
        fontSize: 14,
        fontFamily: theme.fonts.body
    }
});
