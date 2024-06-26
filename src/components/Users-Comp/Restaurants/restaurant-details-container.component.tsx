import React, { useContext } from 'react';

// Default React Native Components
import { View, FlatList, Platform, Text } from "react-native";

// Details Context for Users Food ordering 
import { DetailsContext } from '../../../services/Context/details.context';

// Breaking down into simple data utility function
import { breakDownSimple } from '../../../Utils/primary.utils';

// Styling
import { homeUsersScreenStyles } from '../../../styles/screens/home-users.styles';

// Component
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { RestaurantDetailComponent } from "./restaurant-details.component"; 

interface Props {
    show?: boolean
}

export const RestaurantDetailContainerComponent: React.FC<Props> = ({ show }) => {

    const { restaurantsData } = useContext(DetailsContext);

    return (
        <View style={ show && { paddingBottom: Platform.OS == "android"? 74:  54 } }>
            <CategoriesHeaderText 
                cateName={ !show ? "Open Restaurants" : "" }
                seeAll={ show ? false : true }
                screen="OnlyRestaurant"
            />

            <View style={ show && { marginTop: -36 } }></View>

            {
                restaurantsData.length !== 0 ? 
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={restaurantsData}
                    renderItem={ ({ item }) => {

                        const data = breakDownSimple(item.item_obj);
                        const dataList = data.length > 3 ? data.slice(0,3) : data;

                        let descrip:string [] = [];
                        dataList.forEach( e => descrip.push(e.item_name) );
                        const textDescrip = descrip.join(" - ");

<<<<<<< HEAD
                        return (
                            <RestaurantDetailComponent 
                                restaurantName={ item.restaurant_name }
                                restaurantItems={ textDescrip }
                                imgUri={ item.restaurant_logo }
                                uid={ item.ownerId }
                                rating="4.7"
                                time={20}
                                link=""
                            />
                        )
                    } }
                    keyExtractor={ item => item.ownerId }
                    // style={ show && { paddingBottom: 102 } }
                />
                :
                // Error display message when there is no database or the internet can't get the data
                <Text
                    style={ homeUsersScreenStyles.noAvailableRestaurantError }
                >No Available Restaurant At The Moment</Text>
            }
=======
                    return (
                        <RestaurantDetailComponent 
                            restaurantName={ item.restaurant_name }
                            restaurantItems={ textDescrip }
                            imgUri={ item.restaurant_logo }
                            rating="4.7"
                            time={20}
                            link="RestaurantView"
                        />
                    )
                } }
                keyExtractor={ item => item.ownerId }
                // style={ show && { paddingBottom: 102 } }
            />
>>>>>>> ec5a056 (About to work on the restaurant view screen)

        </View>
    )
}
