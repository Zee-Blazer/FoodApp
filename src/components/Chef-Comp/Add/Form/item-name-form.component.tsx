
import { View, Text, TextInput } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

interface Props {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

export const ItemNameFormComponent: React.FC<Props> = ({ name, setName }) => {

    return (
        <View style={[ homeChefScreenStyles.horiSpacer, { marginVertical: 10 } ]}>
            <Text style={ addScreenChefStyles.formLabelTxt }>ITEM NAME</Text>
            <TextInput 
                placeholder="Mazalichiken Halim"
                style={ addScreenChefStyles.textInputItem }
                value={ name }
                onChangeText={ setName }
            />
        </View>
    )
}
