
import { createStackNavigator } from "@react-navigation/stack";

// Tab Navigation
import { ChefTabNavigation } from "./tab-nav";

// Review Screen
import { ReviewsScreen } from "../../../screens/Chef/reviews.screen";

// Food Details Screen
import { ChefFoodDetails } from "../../../screens/Chef/food-details.screen";

// Profile Info Screen
import { ProfileChefInfoScreen } from "../../../screens/Chef/profile-chef-info.screen";

// Profile Edit Restaurant Screen
import { EditChefRestaurant } from "../../../screens/Chef/edit-chef-restaurant";

const MainNav = createStackNavigator();

export const MainNavigation = () => {

    return (
        <MainNav.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MainNav.Screen name="TabNav" component={ ChefTabNavigation } />
            <MainNav.Screen name="Reviews" component={ ReviewsScreen } />
            <MainNav.Screen name="FoodDetails" component={ ChefFoodDetails } />
            <MainNav.Screen name="ProfileChefInfo" component={ ProfileChefInfoScreen } />
            <MainNav.Screen name="RestaurantEdit" component={ EditChefRestaurant } />
        </MainNav.Navigator>
    )
}
