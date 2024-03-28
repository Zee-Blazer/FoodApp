import React, { useContext } from "react";

import { View, Image, Text, TouchableOpacity } from "react-native";

// Authentication Context
import { AuthContext } from "../../../services/Context/auth.context";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { profileUsersStyles } from "../../../styles/screens/profile-users.styles";

interface Props {
    screen?: string
}

export const ProfileDetailsComponent: React.FC<Props> = ({ screen }) => {

    const { user } = useContext(AuthContext);

    return (
        <TouchableOpacity 
            style={[ 
                homeUsersScreenStyles.flexDisplay, 
                profileUsersStyles.profileDetailCont
            ]}
        >
            <Image 
                source={ 
                    user.photoURL ? 
                        { uri: user.photoURL } : 
                        require("../../../../assets/Images/Profile/profile2.jpg") 
                }
                style={ profileUsersStyles.profileDetailImg }
            />

            <View>
                <Text style={ profileUsersStyles.profileNameDetailTxt }>{ user.username }</Text>
                <Text style={ profileUsersStyles.profileSubtitleDetailTxt }>
                    { user.bio }
                </Text>
            </View>
        </TouchableOpacity>
    )
}
