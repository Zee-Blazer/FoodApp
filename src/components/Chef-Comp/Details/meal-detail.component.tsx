
import { View, TouchableOpacity, Text, Image } from "react-native";

// Icons
import { Entypo } from '@expo/vector-icons';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { detailsChefStyles } from "../../../styles/screens/details-chef.styles";

export const MealDetailComponent = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[
                homeChefScreenStyles.flexDisplay,
                { marginVertical: 10 }
            ]}
            onPress={ () => navigation.navigate('FoodDetails') }
        >
            <Image 
                source={ require('../../../../assets/Images/Pizza/pizza1.jpg') }
                style={ detailsChefStyles.mealDetailImg }
            />

            <View style={[ detailsChefStyles.properSection ]}>

                <View style={[ homeChefScreenStyles.flexDesign, { alignItems: "center" } ]}>
                    <Text style={ detailsChefStyles.mealDetailTxt }>
                        Chicken Thai Biriyani
                    </Text>
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={21} color="#32343E" />
                    </TouchableOpacity>
                </View>

                <View 
                    style={[ 
                        homeChefScreenStyles.flexDesign, 
                        { alignItems: "center", marginVertical: 12 } 
                    ]}
                >
                    <View style={ detailsChefStyles.mealDetailTypeBox }>
                        <Text style={ detailsChefStyles.mealDetailTypeTxt }>Breakfast</Text>
                    </View>
                    <Text style={ detailsChefStyles.mealDetailTypePriceTxt }>$60</Text>
                </View>

                <View style={[ homeChefScreenStyles.flexDesign, { alignItems: "center" } ]}>
                    <View style={[ homeChefScreenStyles.flexDesign, { alignItems: "center" } ]}>
                        <Entypo name="star" size={16} color="#FB6D3A" />
                        <Text style={ detailsChefStyles.mealRatingTxt }>4.9</Text>
                        <Text style={ detailsChefStyles.mealRatingDetailsRec }>(10 Review)</Text>
                    </View>
                    <Text style={ detailsChefStyles.mealRatingDetailsRec }>Pick up</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
