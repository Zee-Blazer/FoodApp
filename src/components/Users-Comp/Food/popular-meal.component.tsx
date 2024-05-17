import React, { useState, useEffect } from 'react';

import { View, FlatList, Text } from "react-native";

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
    data?: Data[],
    extraUid?: string,
    extraRestaurantName?: string
}

export const PopularMealComponent: React.FC<Props> = ({ 
    cateName, data, extraUid, extraRestaurantName 
}) => {

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
                    data?.length !==0 ? 
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
                                    resName={ extraRestaurantName }
                                    amount={ 40 }
                                    imgUri={ require("../../../../assets/Images/Restaurants/resturant1.jpg") }
                                    link="RestaurantView"
                                    uid={ extraUid }
                                    inner_id={ item.inner_id }
                                    category={ item.category }
                                />
                            ) }
                            keyExtractor={ item => `${item.UID}-${item.inner_id}` }
                        />
                    : 

                        <Text
                            style={ homeUsersScreenStyles.notAvailableMsg }
                        >Not Available Currently</Text>
                }

            </View>

        </View>
    )
}
