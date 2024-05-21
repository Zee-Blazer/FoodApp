import React, { useState, useEffect } from 'react';

import { View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Firebase function
import { getSpecificRestaurant } from "../../../services/Firebase/User/Restaurants/get-record.restaurant";

// Styling
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";

interface Item {
    UID: string,
    category: any,
    inner_id: any,
    name: any,
    type: any
}

interface Props {
    item?: Item
}

export const MiniRestaurantSuggestioncomponent: React.FC<Props> = ({ item }) => {

    const navigation = useNavigation();

    const [resName, setResName] = useState();
    const [resUri, setResUri] = useState();

    useEffect( () => {
        getSpecificRestaurant(item.UID, setResName, setResUri);
    }, [] )

    return (
        <TouchableOpacity 
            style={ searchUsersStyles.miniRestCont }
            onPress={ () => navigation.navigate("RestaurantView", { uid: item?.UID }) }
        >
            <Image 
                source={{ uri: resUri }}
                style={ searchUsersStyles.miniResImg }
            />
            <View>
                <Text style={ searchUsersStyles.minResDescrip }>{ resName }</Text>
                <View
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.iconTextCont 
                    ]}
                >
                    <FontAwesome name="star-o" size={20} color="#FF7622" />
                    <Text style={ searchUsersStyles.iconText }>
                        { (Math.random() * (5.0 - 4.1) + 4.1).toFixed(1) }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
