import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

// Details User Context Provider
import { DetailsContextProvider } from "../../services/Context/details.context";

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

    // Context
    const { isAuthenticated, isAdmin } = useContext(AuthContext);

    return (
        <GestureHandlerRootView  style={{ flex: 1 }}>
            <NavigationContainer>
                { 
                    // isAuthenticated is checking if the value is undefined 
                    // to load the appropriate page
                    isAuthenticated == undefined ?
                        // Loading Navigation helps the app stay in section 
                        // so it can display the appropriate page 
                        // for either the user, chef or login
                        <LoadingNavigation /> 
                        :
                        // Is Authenticated is checking if there is a active user logged In
                        // So it can redirect to the appropriate screen
                        isAuthenticated ? 
                            !isAdmin ? 
                                    // The Details Context Provider is raping the User Navigation
                                    <DetailsContextProvider>
                                        <UsersNavigation />
                                    </DetailsContextProvider>
                                :
                                    <MainNavigation /> 
                            :
                                <AuthNavigation /> 
                }
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
