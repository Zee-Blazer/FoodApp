
import { TouchableOpacity, Text } from "react-native";

// Styling
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";
import { foodDetailsUserStyles } from "../../../styles/screens/food-details-users.styles";
import { foodUserStyles } from "../../../styles/screens/food-users.styles";

interface Props {
    itemName: string,
    active: boolean
}

export const FoodOptionComponent: React.FC<Props> = ({ itemName, active }) => {

    return (
        <TouchableOpacity 
            style={[ 
                !active ? searchUsersStyles.searchKeyWordCont : 
                { backgroundColor: "#F58D1D", marginRight: 10, borderRadius: 33, },
                foodUserStyles.optionHighlight,
                { paddingBottom: 12, marginTop: 6 }
            ]}
        >
            <Text style={[ foodDetailsUserStyles.resTextCheff, { fontSize: 16 }, active && { color: "white" } ]}>
                { itemName }
            </Text>
        </TouchableOpacity>
    )
}
