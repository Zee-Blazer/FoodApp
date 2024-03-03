
import { View, Text } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";

// Component
import { FoodOptionComponent } from "./food-option.component";

interface Props {
    title: string,
    data: { item: string, active: boolean }
}

export const CoverBgContentComponent = () => {

    return (
        <View style={ restaurantViewUsersStyles.uniqueCont }>
            <Text style={ restaurantViewUsersStyles.littleOptHeaderTxt }>OFFERS</Text>

            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    { marginTop: 12, flexWrap: "wrap" } 
                ]}
            >
                <FoodOptionComponent 
                    itemName="Delivery"
                    active={ false }
                />
                <FoodOptionComponent 
                    itemName="Pick Up"
                    active={ false }
                />
                <FoodOptionComponent 
                    itemName="Offer"
                    active={ false }
                />
                <FoodOptionComponent 
                    itemName="Online payment available"
                    active={ false }
                />
            </View>
        </View>
    )
}
