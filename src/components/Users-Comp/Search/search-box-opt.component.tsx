
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Stylings
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

// The Item structure
interface Item {
    name: string,
    UID: string,
    inner_id: any,
    type: string,
    category: any
}

// List of items structure
interface Props {
    data: Item[]
}

export const SearchBoxOptComponent: React.FC<Props> = ({ data }) => {

    return (
        <>
            <TouchableOpacity 
                style={[ searchUsersStyles.searchBoxOpt ]}
                onPress={ () => console.log(data) }
            >
                <AntDesign 
                    name="search1" size={14} color="#A0A5BA" 
                    style={[ searchUsersStyles.searchBoxOptIcon ]}
                />
                <Text
                    style={[ searchUsersStyles.searchBoxOptTxt ]}
                >
                    { data.name }
                </Text>

                {
                    // Reading the data and checking for the ones that belong to restaurant and the 
                    // ones that belong to a category of meal
                    data.type === "category" ?
                    <Ionicons 
                        name="fast-food" size={16} color="#FF7622" 
                        style={[ searchUsersStyles.searchBoxOptRightIcon ]} 
                    />
                    :
                    <Ionicons 
                        name="restaurant" size={16} color="#FF7622" 
                        style={[ searchUsersStyles.searchBoxOptRightIcon ]} 
                    />
                }
            </TouchableOpacity>
        </>
    )
}
