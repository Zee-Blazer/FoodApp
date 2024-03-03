
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { profileChefStyles } from "../../../styles/screens/profile-chef.styles";

export const ProfileHeaderContainerComponent = () => {

    return (
        <View style={ profileChefStyles.profileHeader }>
            <Text style={ profileChefStyles.profileHeaderAvailBal }>Available Balance</Text>
            <Text style={ profileChefStyles.profileHeaderAmt }>$500.00</Text>
            
            <TouchableOpacity style={[ profileChefStyles.profileHeaderWithDrawBtn ]}>
                <Text style={ profileChefStyles.profileHeaderBtn }>Withdraw</Text>
            </TouchableOpacity>
        </View>
    )
}
