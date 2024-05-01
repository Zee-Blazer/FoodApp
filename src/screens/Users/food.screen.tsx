import React, { useState, useEffect, useContext } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Router Info (Navigation)
import { useRoute } from "@react-navigation/native";

// Details Context
import { DetailsContext } from '../../services/Context/details.context';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { FoodHeaderComponent } from "../../components/Users-Comp/Header/food-header.component";
import { PopularMealComponent } from "../../components/Users-Comp/Food/popular-meal.component";
import { OpenRestaurantscomponent } from "../../components/Users-Comp/Food/open-restaurants.component";

export const FoodScreen = () => {

    // Route 
    const route = useRoute();
    const { params } = route;

    const { keyword } = params;

    // Details Context
    const { allItemRecord } = useContext(DetailsContext);

    // State variables
    const [data, setData] = useState();

    useEffect( () => {
        const dataRecord = allItemRecord.filter( records => {
            return records.name.toLowerCase().includes(keyword.toLowerCase()) 
                    && 
                    records.inner_id !== undefined;
        } )

        setData(dataRecord.slice(0,4));
    }, [] )

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodHeaderComponent 
                    keyword={ keyword }
                />
                
                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >

                    <PopularMealComponent 
                        cateName={ `Popular ${ keyword.toUpperCase() }` }
                        data={ data }
                    />

                    <OpenRestaurantscomponent />

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
