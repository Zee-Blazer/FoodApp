
import { View, TouchableOpacity, Image } from "react-native";

// Image picker library
import * as ImagePicker from "expo-image-picker";

// Styling 
import { editProfileUsersStyles } from "../../../styles/screens/edit-profile-users.styles";

interface Props {
    userPic: any,
    pic: any,
    setPic: React.Dispatch<React.SetStateAction<any>>,
    setProceed: React.Dispatch<React.SetStateAction<any>>,
    screen?: string
}

export const EditProfilePicComponent: React.FC<Props> = ({ userPic, pic, setPic, setProceed, screen }) => {

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            const source = { uri: result.assets[0].uri };
            const response = await fetch(source.uri);
            const blob = await response.blob();
            
            setPic(result.assets[0].uri);
            setProceed(true);
        }
    }

    return (
        <View style={ editProfileUsersStyles.properAlignment }>

            {
                !pic ?
                <Image 
                    source={ 
                        userPic ? 
                            { uri: userPic } : 
                            !screen ?
                                require('../../../../assets/Images/Profile/profile2.jpg') 
                                :
                                require('../../../../assets/Images/Restaurants/RestaurantPlaceholder.jpg') 
                    }
                    style={[ editProfileUsersStyles.editableImg ]}
                /> :
                <Image 
                    source={{ uri: pic }}
                    style={[ editProfileUsersStyles.editableImg ]}
                />
            }

            <TouchableOpacity
                style={[ editProfileUsersStyles.editIcon ]}
                onPress={ () => pickImage() }
            >
                <Image 
                    source={ require('../../../../assets/Images/Icons/edit.png') }
                />
            </TouchableOpacity>
        </View>
    )
}
