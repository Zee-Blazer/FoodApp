
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { EditProfilePicComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-pic.component";
import { EditProfielFormComponent } from "../../components/Users-Comp/Edit Profile/edit-profile-form.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";

export const EditProfileScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Edit Profile"
                    icon={ true }
                />

                <ScrollView 
                    showsVerticalScrollIndicator={ false }
                >

                    <EditProfilePicComponent />

                    <EditProfielFormComponent />

                </ScrollView>
                
            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="SAVE"
                    func={ () => {} }
                />
            </View>
        </SafeAreaView>
    )
}
