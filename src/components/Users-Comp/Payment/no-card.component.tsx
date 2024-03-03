
import { View, Text, Image } from "react-native";

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

export const NoCardComponent = () => {

    return (
        <View style={ paymentUsersStyles.noCardCont }>
            <Image 
                source={ require('../../../../assets/Images/Payment-Icon/43.png') }
                style={ paymentUsersStyles.noCardImg }
            />
            <Text style={ paymentUsersStyles.noCardHeaderTxt }>
                No Master Card Added
            </Text>
            <Text 
                style={ paymentUsersStyles.noCardSubHeaderTxt }
            >
                You can add a mastercard and save it for later
            </Text>
        </View>
    )
}
