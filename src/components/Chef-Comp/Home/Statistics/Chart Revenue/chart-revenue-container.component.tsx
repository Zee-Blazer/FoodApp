
import { View, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../../styles/screens/home-chef.styles";

// Components
import { ItemHeaderContainerComponent } from "../item-header-container.component";
import { ChartDiagramComponent } from "./chart-diagram.component";

export const ChartRevenueContainerComponent = () => {

    return (
        <View
            style={[
                homeChefScreenStyles.blockCont,
                homeChefScreenStyles.horiSpacer
            ]}
        >
            <ItemHeaderContainerComponent 
                title="Total Revenue"
                link="See Details"
                amount={ 2241 }
                type="Daily"
            />

            <ChartDiagramComponent />

        </View>
    )
}
