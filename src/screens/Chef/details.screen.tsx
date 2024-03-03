import React, { useState } from "react";

import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { MainNotificationContainerComponent } from "../../components/Chef-Comp/Notification/main-notification-container.component";
import { NavItemDetailsContainerComponent } from "../../components/Chef-Comp/Details/nav-item-details-container.component";
import { DefinePickerContainerComponent } from "../../components/Chef-Comp/Details/define-picker-container.component";

export const ChefDetailsScreen = () => {

    const [screen, setScreen] = useState("All");

    const changeScreen = (e: string) => setScreen(e);

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <MainNotificationContainerComponent 
                    title="My Food List"
                />

                <NavItemDetailsContainerComponent 
                    screen={ screen }
                    func={ changeScreen }
                />

                <DefinePickerContainerComponent 
                    screen={ screen }
                />
            </View>
        </SafeAreaView>
    )
}
