
import { View, TouchableOpacity, Text } from "react-native";

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styling
import { homeChefScreenStyles } from "../../../../styles/screens/home-chef.styles";

interface Props {
    title: string,
    link: string,
    amount?: number,
    type?: string
}

export const ItemHeaderContainerComponent: React.FC<Props> = ({ title, link, amount, type }) => {

    return (
        <View style={ homeChefScreenStyles.flexDesign }>
            <View>
                <Text style={ homeChefScreenStyles.blockContTxt }>{ title }</Text>
                { 
                    amount && 
                    <Text 
                        style={ homeChefScreenStyles.moneyStyles }
                    >
                        $ { amount.toLocaleString() }
                    </Text> 
                }
            </View>

            {
                type &&
                <TouchableOpacity
                    style={[ 
                        homeChefScreenStyles.flexDisplay, 
                        homeChefScreenStyles.optionIconCont
                    ]}
                >
                    <Text style={ homeChefScreenStyles.optionContTxt }>{ type }</Text>
                    <AntDesign 
                        name="down" size={10} color="black" 
                        style={ homeChefScreenStyles.downIconMenu } 
                    />
                </TouchableOpacity>
            }

            <TouchableOpacity>
                <Text style={ homeChefScreenStyles.blockContTxtAll }>{ link }</Text>
            </TouchableOpacity>
        </View>
    )
}
