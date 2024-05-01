
import { View, SafeAreaView, ScrollView } from 'react-native';

// Styling
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';

// Components
import { SerachBarHeaderComponent } from '../../components/Users-Comp/Header/search-bar-header.component';
import { SearchBarContComponent } from '../../components/Users-Comp/search-bar-cont.component';
import { RecentKeywordComponent } from '../../components/Users-Comp/Search/recent-keyword.component';
import { SuggestedRestaurantContainerComponent } from '../../components/Users-Comp/Search/suggested-restaurants-cont.component';
import { FastFoodContainerComponent } from '../../components/Users-Comp/Search/fast-food-container.component';

export const SearchScreen = () => {

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={ homeUsersScreenStyles.body }>

                <SerachBarHeaderComponent />
                
                <SearchBarContComponent 
                    redirect={ false }
                />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >

                    <RecentKeywordComponent />

                    <SuggestedRestaurantContainerComponent />

                    <FastFoodContainerComponent />

                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
}
