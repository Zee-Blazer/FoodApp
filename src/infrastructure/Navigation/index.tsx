
import { NavigationContainer } from "@react-navigation/native";

// Auth Stack Navigation
import { AuthNavigation } from "./auth.nav";

// Users Stack Navigation
import { UsersNavigation } from "./User-Navigation";

// Chef Tab Navigation
import { MainNavigation } from "./Chef-Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Navigation = () => {

    const isAuthenticated = !!false;
    const isAdmin = false;

    return (
        <GestureHandlerRootView  style={{ flex: 1 }}>
            <NavigationContainer>
                { 
                    isAuthenticated ? 
                        <AuthNavigation /> : 
                        isAdmin ? 
                            <UsersNavigation /> : <MainNavigation /> 
                }
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}
