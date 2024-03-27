
import { View, SafeAreaView, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { MainNotificationContainerComponent } from "../../components/Chef-Comp/Notification/main-notification-container.component";
import { NotificationContainerComponent } from "../../components/Chef-Comp/Notification/notification-container.component";

export const ChefNotificationScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>
                <MainNotificationContainerComponent 
                    title="Notifications"
                />

                
                <ScrollView>

                    <NotificationContainerComponent 
                        name="Tanbir Ahmed"
                        msg="Place a new order"
                        time={ 20 }
                    />

                    <NotificationContainerComponent 
                        name="Salim Smith"
                        msg="left a 5 star review"
                        time={ 22 }
                    />

                    <NotificationContainerComponent 
                        name="Royal Bengol"
                        msg="agreed to cancel"
                        time={ 23 }
                    />

                    <NotificationContainerComponent 
                        name="Pabel Vuiya"
                        msg="Placed a new order"
                        time={ 23 }
                    />

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
