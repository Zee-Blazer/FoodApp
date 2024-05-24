
import { FlatList } from "react-native";

// Components
import { CartOptionContainer } from "../Users Cart/cart-options-container";

interface Props {
    edit: boolean,
    data?: any[]
}

export const DisplayCartItemsComponent: React.FC<Props> = ({ edit, data }) => {

    return (
        <>
            <FlatList 
                data={data}
                renderItem={ ({ item }) => {
                    console.log(item.key);
                    
                    return (
                        <CartOptionContainer 
                            uid={ item.uid }
                            num={ item.num }
                            path={ item.path }
                            key={ item.key }
                            edit={ edit }
                        />
                    )
                } }
                keyExtractor={ item => item.key }
            />

        </>
    )
}
