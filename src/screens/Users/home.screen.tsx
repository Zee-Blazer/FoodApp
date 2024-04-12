import React, { useContext } from 'react';

import { SafeAreaView, View, ScrollView, } from "react-native";

// Authentication User Details Context
import { AuthContext } from '../../services/Context/auth.context';

// Stylings
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Component 
import { DashboardHeaderComponent } from "../../components/Users-Comp/Header/dashboard-header.component";
import { Greetingscomponent } from "../../components/Users-Comp/greetings.component";
import { SearchBarContComponent } from "../../components/Users-Comp/search-bar-cont.component";
import { CategoryItemContainerComponent } from "../../components/Users-Comp/Categories/category-item-container.component";
import { RestaurantDetailContainerComponent } from "../../components/Users-Comp/Restaurants/restaurant-details-container.component";

export const HomeScreen = () => {

    const { user } = useContext(AuthContext);

    console.log(user)

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
                        name={ user && user.username }
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
