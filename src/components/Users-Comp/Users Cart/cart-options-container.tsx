import React, { useState, useEffect, useContext } from 'react';

import { View, Text, Image, TouchableOpacity } from "react-native";

// Firebase function to get as specific restaurant
import { 
    getCartItem,
    addItemAndIncrement,
    subItemAndDecrement,
    deleteItemFromCart
} from '../../../services/Firebase/User/Cart/getCart';

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";

interface Props {
    uid: string,
    num: number | any,
    path: string,
    edit: boolean,
    cart?: string | any
}

export const CartOptionContainer: React.FC<Props> = ({ uid, num, path, edit, cart }) => {

    const [itemName, setItemName] = useState();
    const [itemRestaurant, setItemRestaurant] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemUri, setItemUri] = useState();

    useEffect( () => {
        getCartItem(
            path, setItemUri, setItemPrice, setItemRestaurant, setItemName
        );
    }, [] )

    return (
        <TouchableOpacity 
            style={[ 
                usersCartUsersStyles.cartOptionCont, 
                homeUsersScreenStyles.flexDisplay ,
            ]}
        >
            <Image 
                source={{ uri: itemUri }}
                style={ usersCartUsersStyles.cartOptionImg }
            />

            <View style={{ width: 232 }}>

                <View 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay, 
                        homeUsersScreenStyles.flexDesign, 
                        { flex: 1 } 
                    ]}
                >
                    <View style={{ marginRight: 42 }}>
                        <Text style={[ usersCartUsersStyles.mainRestTxt ]}>
                            { itemName }
                        </Text>
                        <Text style={ usersCartUsersStyles.mainRestTxtPrc }>
                            ${ itemPrice }
                        </Text>
                    </View>
                    { 
                        !edit 
                        &&
                        <TouchableOpacity
                            onPress={ () => deleteItemFromCart(cart, uid) }
                        >
                            <MaterialIcons name="cancel" size={27} color="#E04444" />
                        </TouchableOpacity>
                    }
                </View>

                <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                    <Text style={ usersCartUsersStyles.quantTxt }>
                        <Text style={{ fontSize: 14 }}>Pay: </Text>
                        <Text style={{ color: "#059C6A" }}>${ itemPrice && itemPrice * num }</Text>
                    </Text>

                    <View style={[ homeUsersScreenStyles.flexDisplay, homeUsersScreenStyles.flexDesign ]}>
                        <TouchableOpacity
                            onPress={ () => subItemAndDecrement(cart, num, uid) }
                        >
                            <Entypo name="circle-with-minus" size={22} color="rgba(255,255,255,0.5)" />
                        </TouchableOpacity>

                        <Text style={ usersCartUsersStyles.quantAmtTxt }>
                            { num }
                        </Text>

                        <TouchableOpacity
                            onPress={ () => addItemAndIncrement(cart, num, uid) }
                        >
                            <Entypo name="circle-with-plus" size={22} color="rgba(255,255,255,0.5)" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
