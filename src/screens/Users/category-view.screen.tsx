import React, { useContext } from 'react';

import { View, SafeAreaView } from "react-native";

// Details Context
import { DetailsContext } from '../../services/Context/details.context';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { SerachBarHeaderComponent } from "../../components/Users-Comp/Header/search-bar-header.component";

export const CategoryViewScreen = ({ route }) => {

    const { drinkRecords, foodRecords, snacksRecord } = useContext(DetailsContext);

    const { title } = route.params;

    let template;
    
    switch(title){
        case "All Categories":
            template = (
                <></>
            )
        case "Drinks": 
            template = (
                <></>
            )
        case "Food": 
            template = (
                <></>
            )
        case "Snacks":
            template = (
                <></>
            )
    }

    // console.log(drinkRecords[0]);
    // console.log(drinkRecords.length);

    return (
        <SafeAreaView  style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>
                <SerachBarHeaderComponent 
                    header={ title }
                />
            </View>
        </SafeAreaView>
    )
}
