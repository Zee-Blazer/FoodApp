
import { View, Text, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

// Component
import { RunningItemListComponent } from "./running-orders-list.component";

export const RunningOrdersContainerComponent = () => {

    return (
        <View style={ homeChefScreenStyles.horiSpacer }>
            <Text style={ homeChefScreenStyles.runningOrdersTxt }>20 Running Orders</Text>

            <ScrollView
                showsVerticalScrollIndicator={ false }
                style={{ marginBottom: 148 }}
            >
                <RunningItemListComponent />
                <RunningItemListComponent />
                <RunningItemListComponent />
                <RunningItemListComponent />
                <RunningItemListComponent />
                <RunningItemListComponent />
                <RunningItemListComponent />
            </ScrollView>
        </View>
    )
}
