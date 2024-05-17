import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Firebase Function to get the specific category data
import { getSpecificCategoryRecord } from '../../../services/Firebase/User/Restaurants/get-record.category';

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styling
import { searchUsersStyles } from '../../../styles/screens/serach-users.styles';
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

interface Props {
    resName: string,
    foodType: string,
    imgUri: string,
    amount: number,
    link: string,
    uid?: string,
    inner_id?: string,
    category?: any
}

export const FastFoodComponent: React.FC<Props> = ({ 
    resName, foodType, imgUri, amount, link, uid, inner_id, category
}) => {

    const navigation = useNavigation();

    const [itemName, setItemName] = useState();
    const [itemRestaurant, setItemRestaurant] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemUri, setItemUri] = useState();

    useEffect( () => {
        getSpecificCategoryRecord(
            uid, inner_id, category, setItemUri, setItemPrice, setItemRestaurant, setItemName
        );
    }, [] )

    return (
        <TouchableOpacity 
            onPress={ () => link && navigation.navigate(link) }
        >
            <Image 
                source={ uid ? { uri: itemUri && itemUri } : imgUri }
                style={ searchUsersStyles.foodPackImg }
            />
            <View 
                style={[ 
                    searchUsersStyles.foodPackInfoCont, 
                    homeUsersScreenStyles.boxShadow,
                    { maxWidth: 174, width: 174 }
                ]}
            >
                <Text style={ searchUsersStyles.foodPackMainTxt }>
                    { uid ? itemName && itemName : foodType }
                </Text>
                <Text style={ searchUsersStyles.foodPackSubTxt }>
                    { uid ? itemRestaurant && itemRestaurant :resName }
                </Text>
                <View 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.flexDesign,
                        { marginTop: 8 }
                    ]}
                >
                    <Text>
                        ${ uid ? itemPrice && itemPrice : amount }
                    </Text>
                    <TouchableOpacity>
                        <MaterialIcons name="add-circle" size={30} color="#F58D1D" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}
