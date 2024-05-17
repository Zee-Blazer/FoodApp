import React, { useState, useEffect } from 'react';

import { View, FlatList, Text } from "react-native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { FastFoodComponent } from "../Search/fast-food.component";

interface Data {
    name?: string,
    UID?: string,
    inner_id?: any,
    type?: any,
    category?: any,
    item_category?: string,
    item_img?: string,
    item_name?: string,
    item_price?: any,
    item_uri?: string
}

interface Props {
    cateName: string,
    data?: Data[],
    extraUid?: string,
    extraRestaurantName?: string
}

export const PopularMealSecondComponent: React.FC<Props> = ({ 
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
                            renderItem={ ({item}) => {

                                console.log(item);

                                return (
                                    <FastFoodComponent 
                                        foodType={ item.item_name }
                                        resName={ extraRestaurantName }
                                        amount={ item.item_price }
                                        imgUri={ item.item_img }
                                        link="RestaurantView"
                                        personalUID={ extraUid }
                                        inner_id={ item.item_uri }
                                        category={ item.category }
                                    />
                                )
                            } }
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
