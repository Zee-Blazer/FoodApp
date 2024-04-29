import React, { useState, useEffect, useContext } from 'react';

import { View, Text, TouchableOpacity, FlatList } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Firebase function to get the all the searched keywords
import { getAllSearchKeyword } from '../../../services/Firebase/User/Restaurants/get-record.category';

// Authentication Context
import { AuthContext } from '../../../services/Context/auth.context';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

export const RecentKeywordComponent = () => {

    // Navigation
    const navigation = useNavigation();

    // User Context
    const { user } = useContext(AuthContext);

    // Use state Declaration
    const [searchedKeywords, setSearchKeywords] = useState();

    // Use Effect declaration
    useEffect( () => {
        getAllSearchKeyword(user.uid, setSearchKeywords);
    }, [] )

    return (
        <>
            {
                searchedKeywords &&
                    <View>
                        <CategoriesHeaderText 
                            cateName="Recent Keywords"
                            seeAll={ false }
                        />

                        <FlatList 
                            horizontal
                            showsHorizontalScrollIndicator={ false }
                            data={ searchedKeywords }
                            renderItem={ ({ item }) => (
                                <TouchableOpacity 
                                    style={ searchUsersStyles.searchKeyWordCont } 
                                    onPress={ () => navigation.navigate("Food") }
                                >
                                    <Text style={ searchUsersStyles.searchKeyWords }>{ item.keyword }</Text>
                                </TouchableOpacity>
                            ) }
                            keyExtractor={ item => `${item.key}` }
                            contentContainerStyle={[ homeUsersScreenStyles.innerSpace, homeUsersScreenStyles.boxSpacing2 ]}
                        />

                    </View>
            }
        </>
    )
}
