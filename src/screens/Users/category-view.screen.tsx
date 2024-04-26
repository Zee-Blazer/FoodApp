import React, { useContext } from 'react';

import { View, SafeAreaView, ScrollView } from "react-native";

// Details Context
import { DetailsContext } from '../../services/Context/details.context';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { SerachBarHeaderComponent } from "../../components/Users-Comp/Header/search-bar-header.component";
import { PopularMealComponent } from '../../components/Users-Comp/Food/popular-meal.component';

export const CategoryViewScreen = ({ route }) => {

    const { drinkRecords, foodRecords, snacksRecord } = useContext(DetailsContext);

    const { title } = route.params;

    let template;
    
    switch(title){
        case "All Categories":
            console.log("Category");
            template = (
                <>
                    <PopularMealComponent 
                        cateName='Food'
                        data={ foodRecords.slice(0,4) }
                    />

                    <PopularMealComponent 
                        cateName='Drinks'
                        data={ drinkRecords.slice(0,4) }
                    />

                    <PopularMealComponent 
                        cateName='Snacks'
                        data={ snacksRecord.slice(0,4) }
                    />
                </>
            )
            break;
        case "Drinks":
            console.log("Drinks"); 
            template = (
                <>
                    <PopularMealComponent 
                        cateName='Drinks'
                        data={ drinkRecords.slice(0,8) }
                    />
                </>
            )
            break;
        case "Food": 
            console.log("Food");
            template = (
                <>
                    <PopularMealComponent 
                        cateName='Food'
                        data={ foodRecords.slice(0,8) }
                    />
                </>
            )
            break
        case "Snacks":
            console.log("Category");
            template = (
                <>
                    <PopularMealComponent 
                        cateName='Snacks'
                        data={ snacksRecord.slice(0,8) }
                    />
                </>
            )
            break;
    }

    return (
        <SafeAreaView  style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <SerachBarHeaderComponent 
                    header={ title }
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    { template }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
