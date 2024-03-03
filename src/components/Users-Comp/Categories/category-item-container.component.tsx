
import { View, ScrollView } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "./category-header-text.component";
import { CategoryOptionsComponent } from "./category-options.component";

export const CategoryItemContainerComponent = () => {

    return (
        <View>
            <CategoriesHeaderText 
                cateName="All Categories"
                seeAll={ true }
            />
            <ScrollView 
                style={[ homeUsersScreenStyles.boxSpacing, homeUsersScreenStyles.innerSpace ]} 
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <CategoryOptionsComponent 
                    snackName="All"
                    start={ true }
                    uri={ require("../../../../assets/Images/Restaurants/camp.jpg") }
                />

                <CategoryOptionsComponent 
                    snackName="Hot Dog"
                    start={ false }
                    uri={ require("../../../../assets/Images/Hot-Dog/dog1.jpg") }
                />

                <CategoryOptionsComponent 
                    snackName="Burger"
                    start={ false }
                    uri={ require("../../../../assets/Images/Burger/burger1.jpg") }
                />

                <CategoryOptionsComponent 
                    snackName="Pizza"
                    start={ false }
                    uri={ require("../../../../assets/Images/Pizza/pizza1.jpg") }
                />
            </ScrollView>
        </View>
    )
}
