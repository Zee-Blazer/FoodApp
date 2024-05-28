import React, { useContext } from 'react';

import { View, Text, SafeAreaView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Details Context
import { DetailsContext } from '../../services/Context/details.context';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";
import { paymentUsersStyles } from "../../styles/screens/payment-users.styles";

// Component
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { PaymentCardTypeContainerComponent } from "../../components/Users-Comp/Payment/payment-card-type-container.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";
import { TransparentBtnComponent } from "../../components/Users-Comp/Payment/transparent-btn.component";

export const PaymentScreen: React.FC = () => {

    const navigation = useNavigation();

    const { totalAmt } = useContext(DetailsContext);

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Payment"
                    icon={ true }
                />
                <View style={{ marginVertical: 12 }}></View>

                <PaymentCardTypeContainerComponent />

                <TransparentBtnComponent 
                    title="ADD NEW"
                    func={ () => navigation.navigate("AddCart") }
                />

            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <View style={{ flexDirection: "row" }}>
                    <Text style={ paymentUsersStyles.placeBarTxt }>TOTAL: </Text>
                    <Text style={ paymentUsersStyles.placeBarTxtPrice }>${ totalAmt }</Text>
                </View>
                <FormBtnComponent 
                    title="PAY & CONFIRM"
                    func={ () => navigation.navigate("Success") }
                />
            </View>
        </SafeAreaView>
    )
}
 