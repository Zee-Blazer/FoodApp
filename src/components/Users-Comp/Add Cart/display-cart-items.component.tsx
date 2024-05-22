
import { ScrollView } from "react-native";

// Components
import { CartOptionContainer } from "../Users Cart/cart-options-container";

interface Props {
    edit: boolean
}

export const DisplayCartItemsComponent: React.FC<Props> = ({ edit }) => {

    return (
        <>
            <ScrollView>
                <CartOptionContainer 
                    price={64}
                    resName="Pizza Calzone European"
                    size={14}
                    amount={2}
                    imgUri={ require("../../../../assets/Images/Burger/burger1.jpg") }
                />
                <CartOptionContainer 
                    price={95}
                    resName="Spicy Restaurant"
                    size={16}
                    amount={3}
                    imgUri={ require("../../../../assets/Images/Hot-Dog/dog1.jpg") }
                />
            </ScrollView>
        </>
    )
}
