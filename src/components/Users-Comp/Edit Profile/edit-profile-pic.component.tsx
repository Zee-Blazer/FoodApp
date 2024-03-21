
import { View, TouchableOpacity, Image } from "react-native";

// Image picker library
import * as ImagePicker from "expo-image-picker";

// Styling 
import { editProfileUsersStyles } from "../../../styles/screens/edit-profile-users.styles";

interface Props {
    pic: any,
    setPic: React.Dispatch<React.SetStateAction<any>>
}

export const EditProfilePicComponent: React.FC<Props> = ({ pic, setPic }) => {

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        // console.log(result);

        if (!result.canceled) {
            const source = { uri: result.assets[0].uri };
            const response = await fetch(source.uri);
            const blob = await response.blob();
            // if(id, user_id){
            //     sendPic(source, blob, [id, user_id].sort());
            // }
            setPic(result.assets[0].uri);
            // console.log(result);
        }
    }

    console.log(pic);

    return (
        <View style={ editProfileUsersStyles.properAlignment }>

            {
                !pic ?
                <Image 
                    source={ require('../../../../assets/Images/Profile/profile2.jpg') }
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
