
import { View } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { FastFoodComponent } from "../Search/fast-food.component";

interface Props {
    cateName: string
}

export const PopularMealComponent: React.FC<Props> = ({ cateName }) => {

    return (
        <View>
            <CategoriesHeaderText 
                cateName={ cateName }
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
                    link="RestaurantView"
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 30 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant2.jpg") }
                    link="RestaurantView"
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 45 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant4.jpg") }
                    link="RestaurantView"
                />
                <FastFoodComponent 
                    foodType="European Pizza"
                    resName="Uttora Coffe House"
                    amount={ 54 }
                    imgUri={ require("../../../../assets/Images/Restaurants/resturant3.jpg") }
                    link="RestaurantView"
                />

            </View>

        </View>
    )
}
