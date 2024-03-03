
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

// Components
import { RunningOrderStat } from "./running-order-stat.component";
import { OrderRequestStats } from "./order-request-stat.component";

interface Props {
    func: () => void
}

export const StatsContainerComponent: React.FC<Props> = ({ func }) => {

    return (
        <View 
            style={[ 
                homeChefScreenStyles.statsContComp, 
                homeChefScreenStyles.flexDesign, 
                homeChefScreenStyles.horiSpacer,
                { marginBottom: 8 }
            ]}
        >
            <RunningOrderStat 
                func={ func }
            />
            <OrderRequestStats />
        </View>
    )
}
