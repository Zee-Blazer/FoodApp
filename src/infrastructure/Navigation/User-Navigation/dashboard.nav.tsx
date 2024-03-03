
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styled Nav Component
import { ProfileStyledComponent } from "./profile-styled-component";

// Screen 
import { HomeScreen } from "../../../screens/Users/home.screen";

const DashboardDrawer = createDrawerNavigator();

export const DashboardNavigation = () => {

    return (
        <DashboardDrawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: "white",
                    width: 250
                }
            }}
            drawerContent={
                (props) => {
                    return (
                        <>
                            <ProfileStyledComponent />
                            <DrawerItemList { ...props } />
                        </>
                    )
                }
            }
        >
            <DashboardDrawer.Screen 
                name="Home" 
                options={{
                    drawerActiveBackgroundColor: "#FF7622",
                    drawerActiveTintColor: "white",
                    drawerLabel: "Dashboard",
                    title: "Dashboard",
                    drawerIcon: () => (
                        <FontAwesome name="dashboard" size={24} color="white" style={{ marginLeft: 4 }} />
                    )
                }}
                component={ HomeScreen } 
            />
        </DashboardDrawer.Navigator>
    )
}
