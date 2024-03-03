
import { View } from "react-native";

// Component
import { OrderItemComponent } from "./order-item.component";

export const HistorySectionComponent = () => {

    return (
        <View>
            <OrderItemComponent 
                type="Food"
                resName="Pizza Hut"
                completed={ true }
                amount={32.25}
                details="29 JAN, 12:30 . 03 Items"
                status="Completed"
            />
            <OrderItemComponent 
                type="Drink"
                resName="Pizza Hut"
                completed={ true }
                amount={32.25}
                details="29 JAN, 12:30 . 03 Items"
                status="Completed"
            />
            <OrderItemComponent 
                type="Drink"
                resName="Pizza Hut"
                completed={ true }
                amount={32.25}
                details="29 JAN, 12:30 . 03 Items"
                status="Canceled"
            />
            <OrderItemComponent 
                type="Drink"
                resName="Pizza Hut"
                completed={ true }
                amount={32.25}
                details="29 JAN, 12:30 . 03 Items"
                status="Canceled"
            />
            <OrderItemComponent 
                type="Drink"
                resName="Pizza Hut"
                completed={ true }
                amount={32.25}
                details="29 JAN, 12:30 . 03 Items"
                status="Canceled"
            />
        </View>
    )
}
