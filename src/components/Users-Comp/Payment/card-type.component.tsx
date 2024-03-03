
import { View, Text, Image, TouchableOpacity } from "react-native";

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

interface Props {
    imgUri: string,
    text: string
}

export const CardTypeComponent: React.FC<Props> = ({ text, imgUri }) => {

    return (
        <TouchableOpacity style={[ { marginRight: 16 } ]}>
            <View style={ paymentUsersStyles.paymentIconCont }>
                <Image 
                    source={ imgUri }
                />
            </View>
            <Text style={ paymentUsersStyles.paymentIconTxt }>{ text }</Text>
        </TouchableOpacity>
    )
}
