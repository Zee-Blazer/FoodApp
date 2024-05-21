import React, { useContext } from 'react';

import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";

// Firebase Function
import { becomeAdmin } from "../../services/Firebase/Chef/profile";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Styling
import { profileUsersStyles } from "../../styles/screens/profile-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";
import { InfoDisplayComponent } from "../../components/Users-Comp/Profile Info/info-display.component";

// Would add become admin function to this component

export const ProfileInfoScreen = () => {

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={[ homeUsersScreenStyles.body ]}>

                <UsersCartHeaderComponent 
                    title="Profile Info"
                    screenType="ProfileInfo"
                />

                <ProfileDetailsComponent />

                <InfoDisplayComponent />
            </View>

            <TouchableOpacity
                onPress={ () => becomeAdmin(user.uid, user) }
            >
                <Text
                    style={ profileUsersStyles.becomeAdmin }
                >BECOME A CHEF</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
