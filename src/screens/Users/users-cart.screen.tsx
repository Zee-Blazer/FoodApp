import React, { useState, useEffect, useMemo, useRef, useContext } from 'react';

import { View, SafeAreaView } from "react-native";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

// Firebase functionality
import { getAllCartItems } from '../../services/Firebase/User/Cart/getCart';

// Styling
import { usersCartUsersStyles } from "../../styles/screens/users-cart-users.styles";

// Component
import { UsersCartHeaderComponent } from "../../components/Users-Comp/Header/users-cart-header.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";
import { BottomSheetUserCartComponent } from '../../components/Users-Comp/Users Cart/bottom-sheet-user-cart.component';
import { DisplayCartItemsComponent } from '../../components/Users-Comp/Add Cart/display-cart-items.component';

export const UsersCartScreen = () => {

    const snapPoints = useMemo( () => ["40%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const { user } = useContext(AuthContext);

    const [dataStore, setDataStore] = useState<any>([]);
    const [edit, setEdit] = useState<boolean>(false);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

    const snapToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index);

    useEffect( () => {
        getAllCartItems(user.uid, setDataStore);
    }, [] ) 

    return (
        <SafeAreaView style={{ backgroundColor: "#121223", flex: 1 }}>
            <View style={ usersCartUsersStyles.body }>

                <UsersCartHeaderComponent 
                    title="Cart"
                    screenType='Cart'
                    action={ false }
                    edit={ edit }
                    setEdit={ setEdit }
                />

                <View style={{ marginVertical: 12 }}></View>
                
                <DisplayCartItemsComponent 
                    edit={ edit }
                    data={ dataStore }
                />

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
