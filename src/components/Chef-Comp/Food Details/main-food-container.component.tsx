
import { View, Text, Image } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../../styles/screens/home-chef.styles";
import { foodDetailsChefStyles } from "../../../styles/screens/food-details-chef.styles";

// Component
import { MealDescriptionComponent } from "./meal-description.component";
import { MainDescriptionContainerComponent } from "./main-description-container.component";

export const MainFoodContainerComponent = () => {

    return (
        <View style={[ { marginTop: 32 } ]}>
            <Image 
                source={ require('../../../../assets/Images/Pizza/pizza1.jpg') }
                style={ foodDetailsChefStyles.mainFoodDetailImg }
            />

            <View style={[ homeChefScreenStyles.flexDesign, foodDetailsChefStyles.imgInnerBox ]}>
                <View style={ foodDetailsChefStyles.insideImgBox }>
                    <Text style={ foodDetailsChefStyles.insideImgBoxTxt }>Breakfast</Text>
                </View>

                <View style={ foodDetailsChefStyles.insideImgBox }>
                    <Text style={ foodDetailsChefStyles.insideImgBoxTxt }>Delivery</Text>
                </View>
            </View>

            <MealDescriptionComponent />

            <MainDescriptionContainerComponent />

        </View>
    )
}
