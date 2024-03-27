import React, { useState, useMemo, useRef } from 'react';

import { View, SafeAreaView, Text, ScrollView } from "react-native";

// Styling
import { homeChefScreenStyles } from "../../styles/screens/home-chef.styles";

// Bottom Sheet
import BottomSheet from '@gorhom/bottom-sheet';

// Components
import { DashboardHeaderComponent } from "../../components/Users-Comp/Header/dashboard-header.component";
import { StatsContainerComponent } from '../../components/Chef-Comp/Home/Statistics/stats-container.component'; 
import { ChartRevenueContainerComponent } from '../../components/Chef-Comp/Home/Statistics/Chart Revenue/chart-revenue-container.component';
import { ReviewsInfoComponent } from '../../components/Chef-Comp/Home/Statistics/reviews-info.component';
import { PopularItemsContainerComponent } from '../../components/Chef-Comp/Home/Popular Items/popular-items-container.component';
import { RunningOrdersContainerComponent } from '../../components/Chef-Comp/Home/Running Orders/running-order-container.component';

export const ChefHomeScreen = () => {

    const snapPoints = useMemo( () => ["80%"], [] );
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

    const snapToIndex = (index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
        setShowBottomSheet(false);
    }

    const openBottomSheet = () => {
        setShowBottomSheet(true);
        bottomSheetRef.current?.expand();
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#F7F8F9", flex: 1 }}>
            <View style={ homeChefScreenStyles.body }>

                <View style={ homeChefScreenStyles.horiSpacer }>
                    <DashboardHeaderComponent 
                        isAdmin={ true }
                    />
                </View>

                <ScrollView style={ homeChefScreenStyles.statsMarginBottom }>

                    <StatsContainerComponent 
                        func={ openBottomSheet }
                    />

                    <ChartRevenueContainerComponent />

                    <ReviewsInfoComponent />

                    <PopularItemsContainerComponent />

                </ScrollView>

                <Text onPress={ () => setShowBottomSheet(true) }>Open Bottom Sheet</Text>
            </View>

            {
                showBottomSheet && 
                <BottomSheet
                    snapPoints={ snapPoints } 
                    enablePanDownToClose  
                    ref={ bottomSheetRef }
                    backgroundStyle={{ backgroundColor: "#FFFFFF" }}
                >
                    <RunningOrdersContainerComponent />
                </BottomSheet>
            }
        </SafeAreaView>
    )
}
