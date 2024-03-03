
import { View, SafeAreaView } from 'react-native';

// Styling
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';

// Component 
import { RestaurantViewHeaderComponent } from '../../components/Users-Comp/Header/restaurant-view-header.component';
import { OrdersMainContainerComponent } from '../../components/Users-Comp/Orders/orders-main-container.component';

export const OrdersScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <RestaurantViewHeaderComponent 
                    title="My Orders"
                    func={ () => {} }
                />

                <OrdersMainContainerComponent />
            </View>
        </SafeAreaView>
    )
}
