import React, { useContext } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Styling 
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Component
import { RestaurantViewHeaderComponent } from "../../components/Users-Comp/Header/restaurant-view-header.component";
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";
import { ProfileActionComponent } from "../../components/Users-Comp/Profile Section/profile-action.component";

export const ProfileScreen = () => {

    const { user } = useContext(AuthContext);

    console.log(user);

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
