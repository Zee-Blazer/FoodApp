
import { createStackNavigator } from "@react-navigation/stack";

// Tab Navigation
import { ChefTabNavigation } from "./tab-nav";

// Review Screen
import { ReviewsScreen } from "../../../screens/Chef/reviews.screen";

// Food Details Screen
import { ChefFoodDetails } from "../../../screens/Chef/food-details.screen";

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
        </MainNav.Navigator>
    )
}
