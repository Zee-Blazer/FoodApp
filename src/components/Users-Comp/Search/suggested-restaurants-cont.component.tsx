
import { View } from "react-native";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { MiniRestaurantSuggestioncomponent } from "./mini-restaurant-suggestion.component";

export const SuggestedRestaurantContainerComponent = () => {

    return (
        <View>
            <CategoriesHeaderText 
                cateName="Suggested Restaurants"
                seeAll={ false }
            />
            <View style={{ marginTop: 8 }}></View>

            <MiniRestaurantSuggestioncomponent 
                resName="Pansi Restaurant"
                rating="4.7"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant2.jpg") }
            />
            <MiniRestaurantSuggestioncomponent 
                resName="American Spicy Burger Shop"
                rating="4.3"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant3.jpg") }
            />
            <MiniRestaurantSuggestioncomponent 
                resName="Cafenio Coffee Club"
                rating="4.0"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant4.jpg") }
            />
            
        </View>
    )
}
