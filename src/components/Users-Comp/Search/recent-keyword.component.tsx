import React, { useContext } from 'react';

import { View, ScrollView, Text, TouchableOpacity } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Authentication Context
import { AuthContext } from '../../../services/Context/auth.context';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

export const RecentKeywordComponent = () => {

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    console.log(user.uid);

    return (
        <View>
            <CategoriesHeaderText 
                cateName="Recent Keywords"
                seeAll={ false }
            />

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={ false }
                style={[ homeUsersScreenStyles.innerSpace, homeUsersScreenStyles.boxSpacing2 ]}
            >
                <TouchableOpacity style={ searchUsersStyles.searchKeyWordCont } onPress={ () => navigation.navigate("Food") }>
                    <Text style={ searchUsersStyles.searchKeyWords }>Burger</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ searchUsersStyles.searchKeyWordCont }>
                    <Text style={ searchUsersStyles.searchKeyWords }>Pizza</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ searchUsersStyles.searchKeyWordCont }>
                    <Text style={ searchUsersStyles.searchKeyWords }>Hot Dog</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ searchUsersStyles.searchKeyWordCont }>
                    <Text style={ searchUsersStyles.searchKeyWords }>Sandwich</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ searchUsersStyles.searchKeyWordCont }>
                    <Text style={ searchUsersStyles.searchKeyWords }>Coffee</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}
