
import { View, Text, Image } from "react-native";

// Styling
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";

interface Props {
    name: string,
    imgUri: string,
}

export const IngridentIcon: React.FC<Props> = ({ name, imgUri }) => {

    return (
        <View style={{ marginRight: 20, marginTop: 12 }}>
            <Image 
                source={ imgUri } 
            />
            <Text style={ foodDetailsUserStyles.ingridentTxt }>{ name }</Text>
        </View>
    )
}
