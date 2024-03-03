
import { View, Text } from "react-native";

// Styling
import { foodDetailsChefStyles } from "../../../styles/screens/food-details-chef.styles";

export const MainDescriptionContainerComponent = () => {

    return (
        <View style={ foodDetailsChefStyles.descriptionCont }>
            <Text style={ foodDetailsChefStyles.descriptionMainTxt }>Description</Text>
            <Text style={ foodDetailsChefStyles.descriptionParaTxt }>
                Lorem ipsum dolor sit amet, consetdur Maton adipiscing elit. 
                Bibendum in vel, mattis et amet dui mauris turpis.
            </Text>
        </View>
    )
}
