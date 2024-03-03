
import { Text, TouchableOpacity, Image } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styyling 
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// component
import { DeliveryDetailsComponent } from "./delivery-detail.component";

interface Props {
    restaurantName: string,
    restaurantItems: string,
    imgUri: string,
    rating: string,
    time: number,
    link: string
}

export const RestaurantDetailComponent: React.FC<Props> = ({ 
    restaurantName, restaurantItems, imgUri, rating, time, link
}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={ homeUsersScreenStyles.restaurantCont }
            onPress={ () => link && navigation.navigate(link) }
        >
            <Image 
                source={ imgUri }
                style={ homeUsersScreenStyles.restaurantImg }
            />
            <Text style={ homeUsersScreenStyles.restaurantContHeaderTxt }>
                { restaurantName }
            </Text>
            <Text style={ homeUsersScreenStyles.restaurantContSubHeaderTxt }>
                { restaurantItems }
            </Text>

            <DeliveryDetailsComponent 
                rating={ rating }
                time={ time }
            />
            
        </TouchableOpacity>
    )
}
