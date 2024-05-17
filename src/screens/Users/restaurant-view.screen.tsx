import React, { useState, useEffect } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Firebase function
import { 
    getRestaurantInfo,
    getRestaurantItems 
} from '../../services/Firebase/User/Restaurants/restaurant-details';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { RestaurantViewHeaderComponent } from "../../components/Users-Comp/Header/restaurant-view-header.component";
import { RestaurantViewInfoContainer } from "../../components/Users-Comp/Restaurant View/restaurant-view-info-container.component";
import { FoodOptionContainer } from "../../components/Users-Comp/Restaurant View/food-option-container.component";
import { PopularMealSecondComponent } from "../../components/Users-Comp/Food/popular-meal-second.component";
import { CoverBgContainerComponent } from "../../components/Users-Comp/Restaurant View/cover-bg-container.component";

export const RestaurantViewScreen: React.FC = ({ route }) => {

    const { params } = route;

    const [showCover, setShowCover] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [list, setList] = useState<any>([]);

    const showFilter = () => setShowCover(!showCover);

    useEffect( () => {
        getRestaurantInfo(params.uid, setData);
        getRestaurantItems(params.uid, setList);
    }, [] )

    return (
        <>
            <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
                <View style={ homeUsersScreenStyles.body }>
                    
                    <RestaurantViewHeaderComponent 
                        title={ data ? data.restaurant_name : "Restaurant View" }
                        func={ showFilter }
                    />

                    <ScrollView
                        showsVerticalScrollIndicator={ false }
                    >

                        <RestaurantViewInfoContainer 
                            restaurant_name={ data && data.restaurant_name }
                            restaurant_logo={ data && data.restaurant_logo }
                        />

                        {/* <FoodOptionContainer 
                            data={ list && list } // Error line
                        /> */}

                        <PopularMealSecondComponent 
                            cateName={ 
                                data ? 
                                    `Avaliable Meals (${data.item && Object.keys(data.item).length})` 
                                    : 
                                    "Burger (10)" 
                                }
                            data={ list && list }
                            extraRestaurantName={ data && data.restaurant_name }
                            extraUid={ data && params.uid }
                        />

                    </ScrollView>
                </View>
            </SafeAreaView>

            {
                showCover && <CoverBgContainerComponent func={ showFilter } />
            }
        </>
    )
}
