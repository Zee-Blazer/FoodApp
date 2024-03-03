
import { TouchableOpacity, Text } from "react-native";

// Icon
import { AntDesign } from '@expo/vector-icons';

// Styling
import { paymentUsersStyles } from "../../../styles/screens/payment-users.styles";

interface Props {
    title: string,
    func: () => void
}

export const TransparentBtnComponent: React.FC<Props> = ({ title, func }) => {

    return (
        <TouchableOpacity 
            style={[ paymentUsersStyles.submitBtn, { flexDirection: "row" } ]}
            onPress={ func }
        >
            <AntDesign 
                name="plus" size={24} color="#FF7622" 
                style={{ marginTop: -4, marginRight: 12 }} 
            />
            <Text style={ paymentUsersStyles.submitBtnText }>{ title }</Text>
        </TouchableOpacity>
    )
}
