
import { View } from "react-native";

// Components
import { FoodRestaurantInfo } from "./food-restaurant-info.component";
import { RestaurantDetailInfoComponent } from "./restaurant-detail.component";

interface Category {
    item_category: string | any,
    item_delivery: string | any,
    item_details: string | any,
    item_img: string | any,
    item_name: string | any,
    item_price: any
}

interface Props {
    categoryData?: Category
}

export const FoodDetailContainerComponent: React.FC<Props> = ({ categoryData }) => {

    // console.log(categoryData);

    return (
        <View>
            <FoodRestaurantInfo 
                resName={ categoryData?.item_name }
                resImg={ categoryData?.item_img }
            />
            <RestaurantDetailInfoComponent 
                restaurantName={ categoryData?.item_name }
                restaurantItems={ categoryData?.item_details }
                rating="4.7"
                time={ 20 }
            />
        </View>
    )
}
