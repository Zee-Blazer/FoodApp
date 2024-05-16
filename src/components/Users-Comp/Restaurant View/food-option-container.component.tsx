
import { ScrollView, FlatList } from "react-native";

// Component 
import { FoodOptionComponent } from "./food-option.component";

interface Item {
    item_category?: string,
    item_img?: string,
    item_name?: string
    item_price?: any,
    item_uri?: string
}

interface Props {
    data: Item[]
}

export const FoodOptionContainer: React.FC<Props> = ({ data }) => {

    console.log(data);

    return (
        <ScrollView 
            style={[ { marginTop: 12, maxHeight: 50 } ]}
            horizontal
            showsHorizontalScrollIndicator={ false }
        >
            
            <FoodOptionComponent 
                itemName="Burger"
                active={ true }
            />

            {/* <FlatList 
                data={ data }
                renderItem={ ({ item }) => (
                    <FoodOptionComponent 
                        itemName="Data Center" 
                        active={ false }
                    />
                ) }
                // keyExtractor={ item => item.item_img}
            /> */}

            <FoodOptionComponent 
                itemName="Pizza"
                active={ false }
            />

            <FoodOptionComponent 
                itemName="Sandwich"
                active={ false }
            />

            <FoodOptionComponent 
                itemName="Pie"
                active={ false }
            />

            <FoodOptionComponent 
                itemName="Meat Pie"
                active={ false }
            />

        </ScrollView>
    )
}
