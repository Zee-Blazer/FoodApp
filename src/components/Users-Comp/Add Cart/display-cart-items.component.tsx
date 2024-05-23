
import { FlatList, ScrollView } from "react-native";

// Components
import { CartOptionContainer } from "../Users Cart/cart-options-container";

interface Props {
    edit: boolean,
    data?: any[]
}

export const DisplayCartItemsComponent: React.FC<Props> = ({ edit, data }) => {

    console.log(data);

    return (
        <>
            <FlatList 
                data={data}
                renderItem={ ({ item }) => {
                    console.log(item)
                    
                    return (
                        <CartOptionContainer 
                            price={64}
                            resName="Pizza Calzone European"
                            size={14}
                            amount={2}
                            imgUri={ require("../../../../assets/Images/Burger/burger1.jpg") }
                        />
                    )
                } }
                keyExtractor={ item => item.key }
            />
            
        </>
    )
}
