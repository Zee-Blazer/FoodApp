
import { View, TouchableOpacity, Image } from "react-native";

// Styling 
import { editProfileUsersStyles } from "../../../styles/screens/edit-profile-users.styles";

export const EditProfilePicComponent = () => {

    return (
        <View style={ editProfileUsersStyles.properAlignment }>
            <Image 
                source={ require('../../../../assets/Images/Profile/profile2.jpg') }
                style={[ editProfileUsersStyles.editableImg ]}
            />
            <TouchableOpacity
                style={[ editProfileUsersStyles.editIcon ]}
            >
                <Image 
                    source={ require('../../../../assets/Images/Icons/edit.png') }
                />
            </TouchableOpacity>
        </View>
    )
}
