import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { AntDesign } from '@expo/vector-icons';

// Navigation
import { useNavigation } from "@react-navigation/native";

// Styling
import { usersCartUsersStyles } from "../../../styles/screens/users-cart-users.styles";
import { homeUsersScreenStyles } from "../../../styles/screens/home-users.styles";
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";

// Component
import { FormBtnComponent } from "../../Auth-Comp/form-btn.component";

interface Props {
    price?: any
}

export const BottomSheetCartComponent: React.FC<Props> = ({ price }) => {

    const navigation = useNavigation();

    const [num, setNum] = useState(0);

    const addNum = () => setNum(num + 1);
    const subNum = () => num !== 0 && setNum( num - 1 );

    return (
        <View>
            <View 
                style={[ 
                    homeUsersScreenStyles.flexDesign, 
                    homeUsersScreenStyles.flexDisplay,
                    usersCartUsersStyles.wildSpace,
                    { marginTop: 14 }
                ]}
            >

                <Text style={ foodDetailsUserStyles.bottomSheetAmountTxt }>${ price }</Text>
                <View 
                    style={[ 
                        homeUsersScreenStyles.flexDisplay,
                        foodDetailsUserStyles.bottomSheetAmountCont
                    ]}
                >
                    <TouchableOpacity onPress={ subNum } >
                        <AntDesign name="minuscircle" size={24} color="rgba(255, 255, 255, 0.6)" />
                    </TouchableOpacity>

                    <Text style={ foodDetailsUserStyles.bottomSheetAmountNumTxt }>{ num }</Text>

                    <TouchableOpacity onPress={ addNum } >
                        <AntDesign name="pluscircle" size={24} color="rgba(255, 255, 255, 0.6)" />
                    </TouchableOpacity>
                </View>

            </View>
            

            <View style={[ usersCartUsersStyles.wildSpace, { marginTop: 12 } ]}>
                <FormBtnComponent 
                    title="ADD TO CART"
                    func={ () => navigation.navigate("UsersCart") }
                />
            </View>
            
        </View>
    )
}
