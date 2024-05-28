import React, { useState, useEffect, useContext } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

// Firebase function to get total cart items
import { getTotalCartItems } from '../../../services/Firebase/User/Cart/getCart';

// Authentication Context
import { AuthContext } from '../../../services/Context/auth.context';

// Icon
import { Feather } from '@expo/vector-icons';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling 
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

export const CartRecordNavComponent = () => {

    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    const [total, setTotal] = useState<number>(0);

    useEffect( () => {
        getTotalCartItems(user.uid, setTotal);
    }, [] )

    return (
        <TouchableOpacity 
            style={ homeUsersScreenStyles.shopChartNote }
            onPress={ () => navigation.navigate("UsersCart") }
        >
            <Feather 
                name="shopping-bag" size={24} color="white" 
                style={ homeUsersScreenStyles.shopChartNoteIcon }
            />
            {
                total > 0 &&
                <View style={ homeUsersScreenStyles.shopChartNoteMsg }>
                    <Text style={ homeUsersScreenStyles.shopChartNoteMsgTxt }>{ total && total }</Text>
                </View>
            }
        </TouchableOpacity>
    )
}
