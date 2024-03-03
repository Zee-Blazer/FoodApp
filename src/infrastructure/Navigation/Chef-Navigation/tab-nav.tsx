
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// React Native Component
import { View, StyleSheet, Platform } from 'react-native';

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Theme
import { theme } from '../../Theme';

// Screens
import { ChefHomeScreen } from '../../../screens/Chef/home.screen';
import { ChefDetailsScreen } from '../../../screens/Chef/details.screen';
import { ChefProfileScreen } from '../../../screens/Chef/profile.screen';
import { ChefNotificationScreen } from '../../../screens/Chef/notification.screen';
import { ChefAddScreen } from '../../../screens/Chef/add.screen';

const ChefTab = createBottomTabNavigator();

export const ChefTabNavigation = () => {

    return (
        <ChefTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: theme.colors.icons.primary, //theme.colors.dark.bg.common,
                tabBarInactiveTintColor: "#AFAFAF",
                tabBarStyle: { 
                    backgroundColor: theme.colors.bg.primary, 
                    borderRadius: 32,
                    height: 109,
                    position: "absolute",
                    paddingTop: 14,
                    ...Platform.select({
                        android: {
                          elevation: 5,
                        },
                        ios: {
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.2,
                          shadowRadius: 4,
                        },
                      }),
                },
                headerShown: false,
                tabBarIconStyle: { fontSize: 25 }
            }}
        >

            <ChefTab.Screen name="Home" component={ ChefHomeScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-dashboard-outline" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Details" component={ ChefDetailsScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Add" component={ ChefAddScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <View style={ styles.addIcon }>
                            <MaterialIcons name="add" size={ size } color={ color } 
                                style={ styles.icon }
                            />
                        </View>
                    ),
                }}
            />

            <ChefTab.Screen name="Notification" component={ ChefNotificationScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="notifications-none" size={ size } color={ color } />
                    ),
                }}
            />

            <ChefTab.Screen name="Profile" component={ ChefProfileScreen } 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={ size } color={ color } />
                    ),
                }}
            />

        </ChefTab.Navigator>
    )
}

const styles = StyleSheet.create({
    addIcon: {
        // padding: 16,
        backgroundColor: "#FFF1F2",
        borderColor: "#FF7622",
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 4,
        marginHorizontal: 7
    },
    icon: {
        margin: 10,
        marginTop: 12,
        fontSize: 37,
        color: "#FF7622",
        minWidth: 36,
        minHeight: 36
    }
})
