import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

// Authentication Context
import { AuthContext } from "../../services/Context/auth.context";

// Auth Stack Navigation
import { AuthNavigation } from "./auth.nav";

// Users Stack Navigation
import { UsersNavigation } from "./User-Navigation";

// Chef Tab Navigation
import { MainNavigation } from "./Chef-Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Loading Food App Stack Navigation
import { LoadingNavigation } from "./Utils";

export const Navigation = () => {

    // Constext
    const { isAuthenticated } = useContext(AuthContext);

    // const isAuthenticated = !!true;
    const isAdmin = true;

    return (
        <GestureHandlerRootView  style={{ flex: 1 }}>
            <NavigationContainer>
                { 
                    isAuthenticated ? 
                        isAdmin ? 
                        <UsersNavigation /> : <MainNavigation /> 
                        :
                        <AuthNavigation /> 
                }
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
