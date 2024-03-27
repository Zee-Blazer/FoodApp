
import { SafeAreaView, View, ScrollView, } from "react-native";

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/Header/dashboard-header.component";
import { Greetingscomponent } from "../../components/Users-Comp/greetings.component";
import { SearchBarContComponent } from "../../components/Users-Comp/search-bar-cont.component";
import { CategoryItemContainerComponent } from "../../components/Users-Comp/Categories/category-item-container.component";
import { RestaurantDetailContainerComponent } from "../../components/Users-Comp/Restaurants/restaurant-details-container.component";

export const HomeScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <DashboardHeaderComponent 
                    isAdmin={ false }
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <Greetingscomponent 
                        name="Halal"
                    />

                    <SearchBarContComponent 
                        redirect={ true }
                    />

                    <CategoryItemContainerComponent />

                    <RestaurantDetailContainerComponent />

                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
}
