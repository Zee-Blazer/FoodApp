
import { View, SafeAreaView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../../components/Users-Comp/Categories/category-header-text.component";
import { RestaurantDetailContainerComponent } from "../../components/Users-Comp/Restaurants/restaurant-details-container.component";
import { SerachBarHeaderComponent } from "../../components/Users-Comp/Header/search-bar-header.component";

export const OnlyRestaurantScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>

            <View style={ homeUsersScreenStyles.body }>

                <SerachBarHeaderComponent 
                    header="All Restaurants"
                />

                <RestaurantDetailContainerComponent 
                    show={ true }
                />

            </View>

        </SafeAreaView>
    )
}
