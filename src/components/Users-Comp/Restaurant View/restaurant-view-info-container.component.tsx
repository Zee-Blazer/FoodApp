
import { View, Image } from "react-native";

// Styling
import { restaurantViewUsersStyles } from "../../../styles/screens/restaurant-view-users.styles";

// Component
import { RestaurantDetailInfoComponent } from "../Food Details/restaurant-detail.component";

interface Props {
    restaurant_name: string,
    restaurant_logo: string
}

export const RestaurantViewInfoContainer: React.FC<Props> = ({ restaurant_name, restaurant_logo }) => {

    return (
        <View style={{ marginTop: 24 }}>
            <Image 
                source={ 
                    restaurant_logo ? 
                            { uri: restaurant_logo } 
                        :
                            require("../../../../assets/Images/Burger/burger1.jpg") 
                }
                style={ restaurantViewUsersStyles.displayImg }
            />
            
            <RestaurantDetailInfoComponent 
                restaurantName={ restaurant_name && restaurant_name }
                // restaurantItems="Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                rating="4.7"
                time={ 20 }
            />
        </View>
    )
}
