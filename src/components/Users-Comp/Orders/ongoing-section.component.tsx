
import { View } from "react-native";

// Component
import { OrderItemComponent } from "./order-item.component";

export const OngoingSectionComponent = () => {

    return (
        <View>
            <OrderItemComponent 
                type="Food"
                resName="Pizza Hut"
                completed={ false }
                amount={32.25}
                details="03 Items"
                status=""
            />
        </View>
    )
}
