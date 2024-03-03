
import { View, Image } from "react-native";

// Styling
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";

// Component
import { RestaurantDetailInfoComponent } from "../Food Details/restaurant-detail.component";

export const RestaurantViewInfoContainer = () => {

    return (
        <View style={{ marginTop: 24 }}>
            <Image 
                source={ require("../../../../assets/Images/Burger/burger1.jpg") }
                style={ restaurantViewUsersStyles.displayImg }
            />
            
            <RestaurantDetailInfoComponent 
                restaurantName="Spicy restaurant"
                restaurantItems="Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                rating="4.7"
                time={ 20 }
            />
        </View>
    )
}
