
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component
import { RestaurantViewHeaderComponent } from "../../components/Users-Comp/Header/restaurant-view-header.component";
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";
import { ProfileActionComponent } from "../../components/Users-Comp/Profile Section/profile-action.component";

export const ProfileScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <RestaurantViewHeaderComponent 
                    title="Profile"
                    func={ () => {} }
                />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <ProfileDetailsComponent />

                    <ProfileActionComponent />
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
