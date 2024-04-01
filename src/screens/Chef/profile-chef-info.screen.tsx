
import { View, SafeAreaView } from "react-native"

// Stylings
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Components
import { ProfileDetailsComponent } from "../../components/Users-Comp/Profile Section/profile-details.component";
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { InfoDisplayComponent } from "../../components/Users-Comp/Profile Info/info-display.component";

export const ProfileChefInfoScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
            <View  style={[ homeChefScreenStyles.body, {  backgroundColor: "white" }  ]}>

                <View style={ homeChefScreenStyles.horiSpacer }>

                    <UsersCartHeaderComponent 
                        title="Profile Info"
                        screenType="ProfileInfo"
                    />

                    <ProfileDetailsComponent 
                        screen="chef"
                    />

                    <InfoDisplayComponent 
                        screen="chef"
                    />

                </View>
            
            </View>
        </SafeAreaView>
    )
}
