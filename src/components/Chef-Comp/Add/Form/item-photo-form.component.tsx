
import { View, Text, Image, TouchableOpacity } from "react-native";

// Image picker library
import * as ImagePicker from "expo-image-picker";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

interface Props {
    pic: string,
    setPic: React.Dispatch<React.SetStateAction<string>>
}

export const ItemPhotoFormComponent: React.FC<Props> = ({ pic, setPic }) => {

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
            // setProceed(true);
        }
    }

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginVertical: 10 } ]}>
            <Text style={ addScreenChefStyles.formLabelTxt }>UPLOAD PHOTO</Text>
            
            <View style={[ homeChefScreenStyles.flexDisplay, { marginTop: 8 } ]}>

                {
                    pic && 
                    <Image 
                        // source={ require('../../../../../assets/Images/Hot-Dog/dog1.jpg') }
                        source={{ uri: pic }}
                        style={ addScreenChefStyles.selectedImg }
                    />
                }

                <TouchableOpacity 
                    style={[ addScreenChefStyles.uploadCont ]}
                    onPress={ pickImage }
                >
                    <Image 
                        source={ require('../../../../../assets/Images/Upload.png') }
                    />
                    <Text style={ addScreenChefStyles.uploadContTxt }>
                        { pic.length > 0 ? "Edit" : "Add" }
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
