
import { View, ScrollView } from "react-native";

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

// Component
import { CardTypeComponent } from "./card-type.component";
import { NoCardComponent } from "./no-card.component";
import { PresentCardComponent } from "./present-card.component";

export const PaymentCardTypeContainerComponent = () => {

    return (
        <View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={ false }
            >

                <CardTypeComponent 
                    imgUri={ require("../../../../assets/Images/Payment-Icon/Cash.png") }
                    text="Cash"
                />

                <CardTypeComponent   
                    imgUri={ require("../../../../assets/Images/Payment-Icon/Visa.png") }
                    text="Visa"
                />

                <CardTypeComponent 
                    imgUri={ require("../../../../assets/Images/Payment-Icon/Mastercard.png") }
                    text="MasterCard"
                />

                <CardTypeComponent 
                    imgUri={ require("../../../../assets/Images/Payment-Icon/paypal-icon.png") }
                    text="PayPal"
                />

            </ScrollView>

            {/* <NoCardComponent /> */}

            <PresentCardComponent />

            {/* <Text>Payment Card Type Component</Text> */}
        </View>
    )
}
