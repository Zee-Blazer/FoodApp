
import { View, Text, Image, TouchableOpacity } from "react-native";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

export const PresentCardComponent = () => {

    return (
        <View style={ paymentUsersStyles.presentCard }>
            <Text>Master Card</Text>
            <View 
                style={[ 
                    paymentUsersStyles.spaceUp, 
                    paymentUsersStyles.flexDisplay, 
                    { justifyContent: "space-between" } 
                ]}
            >
                <View style={[ paymentUsersStyles.flexDisplay ]}>

                    <Image 
                        source={ require("../../../../assets/Images/Payment-Icon/master.png") }
                        style={ paymentUsersStyles.spaceRight }
                    />
                    <View style={ paymentUsersStyles.flexDisplay }>
                        <Text style={ paymentUsersStyles.hashedCode }>*************</Text>
                        <Text style={ paymentUsersStyles.numberCode }>436</Text>
                    </View>

                </View>

                <TouchableOpacity>
                    <AntDesign 
                        name="caretdown" 
                        size={10} 
                        color="#181C2E" 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
