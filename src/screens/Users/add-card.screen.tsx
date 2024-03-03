
import { View, SafeAreaView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { AddCartFormComponent } from "../../components/Users-Comp/Add Cart/add-cart-form-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const AddCardScreen: React.FC = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Add Card"
                    icon={ false }
                />

                <AddCartFormComponent />

            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="ADD & MAKE PAYMENT"
                    func={ () => navigation.goBack() }
                />
            </View>

        </SafeAreaView>
    )
}
