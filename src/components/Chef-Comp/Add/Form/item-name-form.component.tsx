
import { View, Text, TextInput } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

export const ItemNameFormComponent = () => {

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginVertical: 10 } ]}>
            <Text style={ addScreenChefStyles.formLabelTxt }>ITEM NAME</Text>
            <TextInput 
                placeholder="Mazalichiken Halim"
                style={ addScreenChefStyles.textInputItem }
            />
        </View>
    )
}
