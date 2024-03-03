
import { View, Text } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";
import { foodDetailsChefStyles } from "../../../styles/screens/food-details-chef.styles";

export const MealDescriptionComponent = () => {

    return (
        <View>
            <View style={[ homeChefScreenStyles.flexDesign, { marginHorizontal: 34 } ]}>
                <Text 
                    style={ foodDetailsChefStyles.mealDescriptTitleTxt }
                >Chicken Thai Biriyani</Text>
                <Text
                    style={ foodDetailsChefStyles.mealDescriptTitleTxt }
                >$60</Text>
            </View>

            <View style={[ homeChefScreenStyles.flexDesign, { marginHorizontal: 34, marginTop: 9 } ]}>
                <View style={ homeChefScreenStyles.flexDisplay }>
                    <FontAwesome 
                        name="map-marker" size={12} color="#AFAFAF" 
                        style={{ marginTop: 3, marginRight: 2 }} 
                    />
                    <Text style={ foodDetailsChefStyles.mealDescriptLocateTxt }
                    >Kentucky 39495</Text>
                </View>

                <View style={[ homeChefScreenStyles.flexDesign, { alignItems: "center" } ]}>
                    <Entypo name="star" size={16} color="#FB6D3A" />
                    <Text style={ detailsChefStyles.mealRatingTxt }>4.9</Text>
                    <Text style={ detailsChefStyles.mealRatingDetailsRec }>(10 Review)</Text>
                </View>
            </View>
        </View>
    )
}
