import React, { useContext } from 'react';

import { View, Text, TouchableOpacity, TextInput } from "react-native";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Details Context
import { DetailsContext } from '../../../services/Context/details.context';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { addCartUsersStyles } from "../../../styles/screens/add-cart-users.styles";
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

// Component
import { FormBtnComponent } from "../../Auth-Comp/form-btn.component";

export const BottomSheetUserCartComponent = () => {

    const navigation = useNavigation();

    const { totalAmt } = useContext(DetailsContext);

    return (
        <View>
            <View style={[ homeUsersScreenStyles.flexDesign, homeUsersScreenStyles.flexDisplay ]}>
                <Text style={ addCartUsersStyles.formInputLabel }>DELIVERY ADDRESS</Text>
                <Text 
                    style={[ 
                        usersCartUsersStyles.upperEditTxt, { color: "#FF7622", marginTop: 0 } 
                    ]}
                >EDIT</Text>
            </View>
            <TextInput 
                placeholder="2118 Thornridge Cir, Syracuse" 
                // defaultValue="2118 Thornridge Cir, Syracuse"
                autoCorrect={ false }
                autoComplete='off'
                style={[ addCartUsersStyles.formInputField ]}
            />

            <View 
                style={[ 
                    homeUsersScreenStyles.flexDisplay, 
                    homeUsersScreenStyles.flexDesign,
                    { marginTop: 30 }
                ]}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={ paymentUsersStyles.placeBarTxt }>TOTAL: </Text>
                    <Text style={ paymentUsersStyles.placeBarTxtPrice }>${ totalAmt }</Text>
                </View>
                
                <TouchableOpacity style={[ homeUsersScreenStyles.flexDisplay, { marginTop: 12 } ]}>
                    <Text
                        style={ usersCartUsersStyles.colorBottomSheetTxt }
                    >Breakdown</Text>
                    <AntDesign 
                        name="right" size={10} color="#181C2E" 
                        style={{ marginTop: 4, marginLeft: 4 }} 
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 24 }}>
                <FormBtnComponent 
                    title="PLACE ORDER"
                    func={ () => navigation.navigate("Payment") }
                />
            </View>
        </View>
    )
}
