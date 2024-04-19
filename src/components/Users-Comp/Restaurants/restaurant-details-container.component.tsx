import React, { useContext } from 'react';

// Default React Native Components
import { View, FlatList, Text } from "react-native";

// Details Context for Users Food ordering 
import { DetailsContext } from '../../../services/Context/details.context';

// Breaking down into simple data utility function
import { breakDownSimple } from '../../../Utils/primary.utils';

// Component
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { RestaurantDetailComponent } from "./restaurant-details.component";

export const RestaurantDetailContainerComponent = () => {

    const { restaurantsData } = useContext(DetailsContext);

    return (
        <View>
            <CategoriesHeaderText 
                cateName="Open Restaurants"
                seeAll={ true }
            />

            <FlatList 
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
            />

            {/* <RestaurantDetailComponent 
                restaurantName="Rose Garden Restaurant"
                restaurantItems="Burger - Chiken - Riche - Wings"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant1.jpg") }
                rating="4.7"
                time={20}
                link=""
            />
            <RestaurantDetailComponent 
                restaurantName="Pansi Restaurant"
                restaurantItems="Pizza - Pie - Sandwitch - Wings"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant2.jpg") }
                rating="3.2"
                time={30}
                link=""
            />
            <RestaurantDetailComponent 
                restaurantName="American Spicy Burger Shop"
                restaurantItems="Burger - Chiken - Pie - Rice"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant3.jpg") }
                rating="4.9"
                time={12}
                link=""
            />
            <RestaurantDetailComponent 
                restaurantName="Cafenio Coffee Club"
                restaurantItems="Hot Dog - Chiken - Pizza - Burger"
                imgUri={ require("../../../../assets/Images/Restaurants/resturant4.jpg") }
                rating="3.6"
                time={18}
                link=""
            /> */}

        </View>
    )
}
