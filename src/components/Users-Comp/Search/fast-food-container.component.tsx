import React, { useContext } from 'react';

import { View } from "react-native";

// Details Context 
import { DetailsContext } from '../../../services/Context/details.context';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { FastFoodComponent } from "./fast-food.component";
import { PopularMealComponent } from "../Food/popular-meal.component";

export const FastFoodContainerComponent = () => {

    const { foodRecords } = useContext(DetailsContext);

    return (
        <>
            <PopularMealComponent 
                cateName='Popular Fast Food'
                data={ foodRecords.slice(0,4) }
            />  
        </>
    )
}
