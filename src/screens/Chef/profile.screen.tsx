
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Component
import { ProfileHeaderContainerComponent } from "../../components/Chef-Comp/Profile/profile-header-container.component";
import { ChefProfileActionContainerComponent } from "../../components/Chef-Comp/Profile/chef-profile-action-container.component";

export const ChefProfileScreen = () => {

    return (
        // <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <ProfileHeaderContainerComponent />

                <ChefProfileActionContainerComponent />

                {/* <Text>Profile Chef Screen</Text> */}
            </View>
        // </SafeAreaView>
    )
}
