import React, { useState, useMemo, useRef } from 'react';

import { View, ScrollView, SafeAreaView } from "react-native";

// Navigation
import { useNavigation } from "@react-navigation/native";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

// Styling
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { CartOptionContainer } from "../../components/Users-Comp/Users Cart/cart-options-container";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";
import { BottomSheetUserCartComponent } from '../../components/Users-Comp/Users Cart/bottom-sheet-user-cart.component';

export const UsersCartScreen = () => {

    // const navigation = useNavigation();

    const snapPoints = useMemo( () => ["40%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

    const snapToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index);

    return (
        <SafeAreaView style={{ backgroundColor: "#121223", flex: 1 }}>
            <View style={ usersCartUsersStyles.body }>

                <UsersCartHeaderComponent 
                    title="Cart"
                    screenType='Cart'
                    action={ false }
                />

                <View style={{ marginVertical: 12 }}></View>
                
                <ScrollView>
                    <CartOptionContainer 
                        price={64}
                        resName="Pizza Calzone European"
                        size={14}
                        amount={2}
                        imgUri={ require("../../../assets/Images/Burger/burger1.jpg") }
                    />
                    <CartOptionContainer 
                        price={95}
                        resName="Spicy Restaurant"
                        size={16}
                        amount={3}
                        imgUri={ require("../../../assets/Images/Hot-Dog/dog1.jpg") }
                    />
                </ScrollView>

            </View>

            <View style={ usersCartUsersStyles.wildSpace }>
                <FormBtnComponent 
                    title="PLACE ORDER"
                    func={ () => {
                        setShowBottomSheet(true);
                        snapToIndex(0);
                        // navigation.navigate("Payment")
                    } }
                />
            </View>

            { showBottomSheet && 
                <BottomSheet
                    snapPoints={ snapPoints } 
                    enablePanDownToClose
                    ref={ bottomSheetRef }
                    backgroundStyle={{ backgroundColor: "#FFFFFF" }}
                >
                    <View style={[ usersCartUsersStyles.wildSpace, { marginTop: 12 } ]}>
                        <BottomSheetUserCartComponent />
                    </View>
                </BottomSheet>
            }

        </SafeAreaView>
    )
}
