
import { View } from "react-native";

// Components
import { FoodRestaurantInfo } from "./food-restaurant-info.component";
import { RestaurantDetailInfoComponent } from "./restaurant-detail.component";

export const FoodDetailContainerComponent = () => {

    return (
        <View>
            <FoodRestaurantInfo />
            <RestaurantDetailInfoComponent 
                restaurantName="Pizza Calzone European"
                restaurantItems="Prosciutto e funghi is a pizza variety that is topped with tomato sauce."
                rating="4.7"
                time={ 20 }
            />
        </View>
    )
}
