
import { View, Text, TextInput } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

export const ItemDetailsFormComponent = () => {

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginVertical: 10 } ]}>
            <Text style={ addScreenChefStyles.formLabelTxt }>Details</Text>
            
            <TextInput 
                placeholder="Enter details about meal"
                multiline
                numberOfLines={3}
                style={[ addScreenChefStyles.textInputItem, { paddingTop: 18, maxHeight: 78 } ]}
            />
        </View>
    )
}
