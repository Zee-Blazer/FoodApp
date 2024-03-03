
import { View, TouchableOpacity, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

interface Props {
    func: () => void
}

export const RunningOrderStat: React.FC<Props> = ({ func }) => {

    return (
        <TouchableOpacity 
            style={ homeChefScreenStyles.orderContStat }
            onPress={ func }
        >
            <Text style={ homeChefScreenStyles.orderContStatMainTxt }>20</Text>
            <Text style={ homeChefScreenStyles.orderContStatMainSubTxt }>RUNNING ORDERS</Text>
        </TouchableOpacity>
    )
}
