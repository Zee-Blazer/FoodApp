
import { TouchableOpacity, Text } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { DeliveryDetailsComponent } from "../Restaurants/delivery-detail.component";

interface Props {
    restaurantName: string,
    restaurantItems: string,
    rating: string,
    time: number
}

export const RestaurantDetailInfoComponent: React.FC<Props> = ({ restaurantItems, restaurantName,time, rating }) => {

    return (
        <TouchableOpacity 
            style={ homeUsersScreenStyles.restaurantCont }
        >
            <Text style={ homeUsersScreenStyles.restaurantContHeaderTxt }>
                { restaurantName }
            </Text>
            <Text style={[ homeUsersScreenStyles.restaurantContSubHeaderTxt, { lineHeight: 24, marginTop: 7 } ]}>
                { restaurantItems }
            </Text>

            <DeliveryDetailsComponent 
                rating={ rating }
                time={ time }
            />
            
        </TouchableOpacity>
    )
}
