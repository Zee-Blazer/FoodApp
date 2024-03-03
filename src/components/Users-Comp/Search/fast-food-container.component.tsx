
import { View } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { FastFoodComponent } from "./fast-food.component";

export const FastFoodContainerComponent = () => {

    return (
        <View>
            <CategoriesHeaderText 
                cateName="Popular Fast Food"
                seeAll={ false }
            />

            <View style={{ marginTop: 24 }}></View>

            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    homeUsersScreenStyles.flexDesign,
                    { flexWrap: "wrap" }
                ]}
            >

                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 40 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant1.jpg") }
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 30 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant2.jpg") }
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 45 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant4.jpg") }
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 54 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant3.jpg") }
                />

            </View>
            
        </View>
    )
}
