
import { ScrollView } from "react-native";

// Component 
import { FoodOptionComponent } from "./food-option.component";

export const FoodOptionContainer = () => {

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
