import React, { useState } from 'react';

import { View, ScrollView } from "react-native";

// Component
import { HeaderNavComponent } from "./header-nav.component";
import { HistorySectionComponent } from './history-section.component';
import { OngoingSectionComponent } from './ongoing-section.component';

export const OrdersMainContainerComponent = () => {

    const [view, setView] = useState("Ongoing");

    const changeView = (e: string) => setView(e);

    return (
        <View>
            <HeaderNavComponent 
                func={ changeView }
                view={ view }
            />
            
            <ScrollView 
                style={{ paddingBottom: 200, marginBottom: 107 }}
                showsVerticalScrollIndicator={ false }
            >
                {
                    view == "Ongoing" ?
                        <OngoingSectionComponent />
                    :
                        <HistorySectionComponent />
                }
            </ScrollView>
        </View>
    )
}
