
import { TouchableOpacity, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

export const OrderRequestStats = () => {

    return (
        <TouchableOpacity style={ homeChefScreenStyles.orderContStat }>
            <Text style={ homeChefScreenStyles.orderContStatMainTxt }>05</Text>
            <Text style={ homeChefScreenStyles.orderContStatMainSubTxt }>ORDER REQUEST</Text>
        </TouchableOpacity>
    )
}
