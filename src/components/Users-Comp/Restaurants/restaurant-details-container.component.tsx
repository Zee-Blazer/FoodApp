import React, { useContext } from 'react';

// Default React Native Components
import { View, FlatList, Text } from "react-native";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Details Context for Users Food ordering 
import { DetailsContext } from '../../../services/Context/details.context';

// Breaking down into simple data utility function
import { breakDownSimple } from '../../../Utils/primary.utils';

// Component
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { RestaurantDetailComponent } from "./restaurant-details.component"; 

interface Props {
    show?: boolean
}

export const RestaurantDetailContainerComponent: React.FC<Props> = ({ show }) => {

    // const navigation = useNavigation();

    const { restaurantsData } = useContext(DetailsContext);

    return (
        <View style={ show && { paddingBottom: 54 } }>
            <CategoriesHeaderText 
                cateName={ !show ? "Open Restaurants" : "" }
                seeAll={ show ? false : true }
                screen="OnlyRestaurant"
            />

            <View style={ show && { marginTop: -36 } }></View>

            <FlatList 
                showsVerticalScrollIndicator={false}
                data={restaurantsData}
                renderItem={ ({ item }) => {

                    const data = breakDownSimple(item.item_obj);
                    const dataList = data.length > 3 ? data.slice(0,3) : data;

                    let descrip:string [] = [];
                    dataList.forEach( e => descrip.push(e.item_name) );
                    const textDescrip = descrip.join(" - ");

                    return (
                        <RestaurantDetailComponent 
                            restaurantName={ item.restaurant_name }
                            restaurantItems={ textDescrip }
                            imgUri={ item.restaurant_logo }
                            rating="4.7"
                            time={20}
                            link=""
                        />
                    )
                } }
                keyExtractor={ item => item.ownerId }
                // style={ show && { paddingBottom: 102 } }
            />

        </View>
    )
}
