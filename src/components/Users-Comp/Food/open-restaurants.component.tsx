
import { View, FlatList } from "react-native";

// Breaking down into simple data utility function
import { breakDownSimple } from '../../../Utils/primary.utils';

// Components
import { CategoriesHeaderText } from "../Categories/category-header-text.component";
import { RestaurantDetailComponent } from "../Restaurants/restaurant-details.component";

interface Data {
    UID: string,
    category: any,
    inner_id: any,
    name: any,
    type: any
}

interface Props {
    data: Data
}

export const OpenRestaurantscomponent: React.FC<Props> = ({ data }) => {

    return (
        <View style={{ marginTop: -24 }}>
            <CategoriesHeaderText 
                cateName="Open Restaurants" 
                seeAll={ false }
            />

            <FlatList 
                data={ data }
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
                            rating={ (Math.random() * (5.0 - 4.1) + 4.1).toFixed(1) }
                            time={20}
                            link=""
                        />
                    )
                } }
                keyExtractor={ item => item.ownerId }
            />
        </View>
    )
}
