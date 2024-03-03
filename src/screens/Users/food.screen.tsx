
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { FoodHeaderComponent } from "../../components/Users-Comp/Header/food-header.component";
import { PopularMealComponent } from "../../components/Users-Comp/Food/popular-meal.component";
import { OpenRestaurantscomponent } from "../../components/Users-Comp/Food/open-restaurants.component";

export const FoodScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodHeaderComponent />
                
                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >

                    <PopularMealComponent 
                        cateName="Polpular Burgers"
                    />

                    <OpenRestaurantscomponent />

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
