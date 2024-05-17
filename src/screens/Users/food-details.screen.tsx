import React, { useMemo, useState, useEffect, useRef } from "react";

import { View, SafeAreaView, ScrollView } from "react-native";

// Firebase function
import { getSpecificCategoryData } from "../../services/Firebase/User/Restaurants/category-details";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

// Styling
import { homeUsersScreenStyles } from "../../styles/screens/home-users.styles";

// Components
import { FoodDetailsHeaderComponent } from "../../components/Users-Comp/Header/food-details-header.component";
import { FoodDetailContainerComponent } from "../../components/Users-Comp/Food Details/food-detail-container.component";
import { FoodSizeComponent } from "../../components/Users-Comp/Food Details/food-sizes.component";
import { FoodIngridentComponent } from "../../components/Users-Comp/Food Details/food-ingridents.component";
import { FormBtnComponent } from "../../components/Auth-Comp/form-btn.component";
import { BottomSheetCartComponent } from "../../components/Users-Comp/Food Details/bottom-sheet-cart.component";

export const FoodDetailsScreen = ({ route }) => {

    const { inner_id, uid, category } = route.params;

    const [categoryData, setCategoryData] = useState<any>([]);

    const snapPoints = useMemo( () => ["25%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

    const snapToIndex = (index: number) => bottomSheetRef.current?.snapToIndex(index);

    useEffect( () => {
        getSpecificCategoryData(uid, inner_id, category, setCategoryData);
    }, [] )

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <FoodDetailsHeaderComponent 
                    screen="Details"
                    icon={ true }
                />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <FoodDetailContainerComponent 
                        categoryData={ categoryData }
                    />

                    {/* <FoodSizeComponent /> */}

                    {/* <FoodIngridentComponent /> */}

                </ScrollView>

                <FormBtnComponent 
                    title="ADD TO CART"
                    func={ () => {
                        setShowBottomSheet(true);
                        snapToIndex(0);
                    } }
                />

            </View>
            {
                showBottomSheet &&
                <BottomSheet 
                    snapPoints={ snapPoints } 
                    enablePanDownToClose
                    ref={ bottomSheetRef }
                    backgroundStyle={{ backgroundColor: "#F0F5FA" }}
                >
                    <BottomSheetCartComponent 
                        price={ categoryData.item_price }
                    />
                </BottomSheet>
            }
        </SafeAreaView>
    )
}
