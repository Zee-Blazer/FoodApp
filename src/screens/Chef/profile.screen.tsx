
import { View, SafeAreaView, Text } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Component
import { ProfileHeaderContainerComponent } from "../../components/Chef-Comp/Profile/profile-header-container.component";
import { ChefProfileActionContainerComponent } from "../../components/Chef-Comp/Profile/chef-profile-action-container.component";

export const ChefProfileScreen = () => {

    return (
        <View style={ homeChefScreenStyles.body }>

            <ProfileHeaderContainerComponent />

            <ChefProfileActionContainerComponent />

        </View>
    )
}
