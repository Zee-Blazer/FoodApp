
import { Text, TouchableOpacity } from "react-native";

// Styling
import { addScreenChefStyles } from "../../../../styles/screens/add-screen-chef.styles";

interface Props {
    val: string,
    stateVal: string,
    stateObj: React.Dispatch<React.SetStateAction<string>>
}

export const SelectOptContComponent: React.FC<Props> = ({ stateVal, stateObj, val }) => {

    return (
        <TouchableOpacity 
            style={[ 
                addScreenChefStyles.checkableOption, 
                stateVal == val && addScreenChefStyles.checkableOptionActive 
            ]}
            onPress={ () => stateObj(val) }
        >
            <Text 
                style={[
                    addScreenChefStyles.checkableOptionTxt,
                    stateVal == val && addScreenChefStyles.checkableOptionTxtActive
                ]}
            >{ val }</Text>
        </TouchableOpacity>
    )
}
