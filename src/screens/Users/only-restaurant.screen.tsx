
import { View } from "react-native";

// Components
import { CategoriesHeaderText } from "../../components/Users-Comp/Categories/category-header-text.component";
import { RestaurantDetailContainerComponent } from "../../components/Users-Comp/Restaurants/restaurant-details-container.component";

export const OnlyRestaurantScreen = () => {

    return (
        <>
            <CategoriesHeaderText 
                cateName="All Restaurants"
                seeAll={ false }
            />

            <RestaurantDetailContainerComponent />

        </>
    )
}
