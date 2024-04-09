
import { View, Text, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { notificationChefStyles } from "../../../styles/screens/notification-chef.styles";
import { addScreenChefStyles } from "../../../styles/screens/add-screen-chef.styles";

interface Props {
    func: () => void
}

export const ChefAddHeaderComponent: React.FC<Props> = ({ func }) => {

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, homeChefScreenStyles.flexDesign ]}>
            <Text style={ notificationChefStyles.headerNotificationTxt }>Add New Items</Text>
            
            <TouchableOpacity
                onPress={ func }
            >
                <Text style={ addScreenChefStyles.resetTxBtn }>RESET</Text>
            </TouchableOpacity>
        </View>
    )
}
