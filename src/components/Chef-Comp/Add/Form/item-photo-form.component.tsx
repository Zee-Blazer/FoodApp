
import { View, Text, Image, TouchableOpacity } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

export const ItemPhotoFormComponent = () => {

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginVertical: 10 } ]}>
            <Text style={ addScreenChefStyles.formLabelTxt }>UPLOAD PHOTO</Text>
            
            <View style={[ homeChefScreenStyles.flexDisplay, { marginTop: 8 } ]}>

                <Image 
                    source={ require('../../../../../assets/Images/Hot-Dog/dog1.jpg') }
                    style={ addScreenChefStyles.selectedImg }
                />

                <TouchableOpacity style={[ addScreenChefStyles.uploadCont ]}>
                    <Image 
                        source={ require('../../../../../assets/Images/Upload.png') }
                    />
                    <Text style={ addScreenChefStyles.uploadContTxt }>Add</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
