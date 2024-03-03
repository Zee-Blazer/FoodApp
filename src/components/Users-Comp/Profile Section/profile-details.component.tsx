
import { View, Image, Text, TouchableOpacity } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

export const ProfileDetailsComponent = () => {

    return (
        <TouchableOpacity 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                profileUsersStyles.profileDetailCont 
            ]}
        >
            <Image 
                source={ require("../../../../assets/Images/Profile/profile2.jpg") }
                style={ profileUsersStyles.profileDetailImg }
            />

            <View>
                <Text style={ profileUsersStyles.profileNameDetailTxt }>Vishal Khadok</Text>
                <Text style={ profileUsersStyles.profileSubtitleDetailTxt }>I love fast food</Text>
            </View>
        </TouchableOpacity>
    )
}
