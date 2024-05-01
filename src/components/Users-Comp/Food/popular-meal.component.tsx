
import { View, FlatList } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { FastFoodComponent } from "../Search/fast-food.component";

interface Data {
    name: string,
    UID: string,
    inner_id: any,
    type: any,
    category: any
}

interface Props {
    cateName: string,
    data?: Data[]
}

export const PopularMealComponent: React.FC<Props> = ({ cateName, data }) => {

    // console.log(data && data[0]);

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
                { 
                    data ? 
                        <FlatList 
                            contentContainerStyle={[
                                homeUsersScreenStyles.flexDisplay, 
                                homeUsersScreenStyles.flexDesign,
                                homeUsersScreenStyles.flexWrap
                            ]}
                            data={ data }
                            renderItem={ ({item}) => (
                                <FastFoodComponent 
                                    foodType="European Pizza"
                                    resName="Uttora Coffe House"
                                    amount={ 40 }
                                    imgUri={ require("../../../../assets/Images/Restaurants/resturant1.jpg") }
                                    link="RestaurantView"
                                    uid={ item.UID }
                                    inner_id={ item.inner_id }
                                    category={ item.category }
                                />
                            ) }
                            keyExtractor={ item => `${item.UID}-${item.inner_id}` }
                        />
                    : 

                        <>
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
                        </>
                }

            </View>

        </View>
    )
}
