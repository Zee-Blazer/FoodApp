import React, { useState, useEffect, useContext } from 'react';

import { View, FlatList } from "react-native";

// Details Context
import { DetailsContext } from '../../../services/Context/details.context';

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { MiniRestaurantSuggestioncomponent } from "./mini-restaurant-suggestion.component";

export const SuggestedRestaurantContainerComponent = () => {

    const { restaurantsRecord } = useContext(DetailsContext);

    const [data, setData] = useState();

    useEffect( () => {
        setData(restaurantsRecord.slice(0,3));
    }, [] )
    // console.log(data);

    return (
        <View style={{ marginTop: -10 }}>
            <CategoriesHeaderText 
                cateName="Suggested Restaurants"
                seeAll={ false }
            />
            <View style={{ marginTop: 8 }}></View>

            <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <MiniRestaurantSuggestioncomponent 
                        item={ item }
                    />
                ) }
                keyExtractor={ item => `${ item.uid }-${ item.name }` }
            />
            
        </View>
    )
}
