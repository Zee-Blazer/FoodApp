
import { createStackNavigator } from "@react-navigation/stack";

// Dashboard Drawer Navigation
import { DashboardNavigation } from "./dashboard.nav";

// Screens 
import { SearchScreen } from "../../../screens/Users/search.screen";
import { FoodScreen } from "../../../screens/Users/food.screen";
import { FoodDetailsScreen } from "../../../screens/Users/food-details.screen";
import { RestaurantViewScreen } from "../../../screens/Users/restaurant-view.screen";
import { UsersCartScreen } from "../../../screens/Users/users-cart.screen";
import { PaymentScreen } from "../../../screens/Users/payment.screen";
import { AddCardScreen } from "../../../screens/Users/add-card.screen";
import { SuccessScreen } from "../../../screens/Users/success.screen";
import { OrdersScreen } from "../../../screens/Users/orders.screen";
import { ProfileScreen } from "../../../screens/Users/profile.screen";
import { ProfileInfoScreen } from "../../../screens/Users/profile-info.screen";
import { AddressUsersScreen } from "../../../screens/Users/address.users.screen";
import { EditProfileScreen } from "../../../screens/Users/edit-profile.screen";

const UsersStack = createStackNavigator();

export const UsersNavigation = () => {

    return (
        <UsersStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <UsersStack.Screen name="Dashboard" component={ DashboardNavigation } />
            {/* <UsersStack.Screen name="Home" component={ HomeScreen } /> */}
            <UsersStack.Screen name="Search" component={ SearchScreen } />
            <UsersStack.Screen name="Food" component={ FoodScreen } />
            <UsersStack.Screen name="FoodDetails" component={ FoodDetailsScreen } />
            <UsersStack.Screen name="RestaurantView" component={ RestaurantViewScreen } />
            <UsersStack.Screen name="UsersCart" component={ UsersCartScreen } />
            <UsersStack.Screen name="Payment" component={ PaymentScreen } />
            <UsersStack.Screen name="AddCart" component={ AddCardScreen } />
            <UsersStack.Screen name="Success" component={ SuccessScreen } />
            <UsersStack.Screen name="Orders" component={ OrdersScreen } />
            <UsersStack.Screen name="Profile" component={ ProfileScreen } />
            <UsersStack.Screen name="ProfileInfo" component={ ProfileInfoScreen } />
            <UsersStack.Screen name="Address" component={ AddressUsersScreen } />
            <UsersStack.Screen name="EditProfile" component={ EditProfileScreen } />
        </UsersStack.Navigator>
    )
}
