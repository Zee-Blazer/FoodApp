
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { MainFoodContainerComponent } from "../../components/Chef-Comp/Food Details/main-food-container.component";

export const ChefFoodDetails = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View style={[ homeChefScreenStyles.body, { backgroundColor: "#FFFFFF" } ]}>

                <View style={ homeChefScreenStyles.horiSpacer }>
                    <UsersCartHeaderComponent 
                        title="Food Details"
                        screenType="ProfileInfo"
                    />
                </View>

                <MainFoodContainerComponent />

                
            </View>
        </SafeAreaView>
    )
}
