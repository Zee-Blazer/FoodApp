
import { View, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { RestaurantDetailComponent } from "../Restaurants/restaurant-details.component";

export const OpenRestaurantscomponent = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={[ homeUsersScreenStyles.body, { marginTop: -24 } ]}>
                <CategoriesHeaderText 
                    cateName="Open Restaurants"
                    seeAll={ false }
                />

                <RestaurantDetailComponent 
                    restaurantName="Pansi Restaurant"
                    restaurantItems="Pizza - Pie - Sandwitch - Wings"
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant2.jpg") }
                    rating="3.2"
                    time={30}
                    link="FoodDetails"
                />
            </View>
        </SafeAreaView>
    )
}
