
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { AntDesign } from '@expo/vector-icons';

// Stylings
import { searchUsersStyles } from "../../../styles/screens/serach-users.styles";

export const SearchBoxOptComponent = () => {

    return (
        <>
            <TouchableOpacity style={[ searchUsersStyles.searchBoxOpt ]}>
                <AntDesign 
                    name="search1" size={14} color="#A0A5BA" 
                    style={[ searchUsersStyles.searchBoxOptIcon ]}
                />
                <Text
                    style={[ searchUsersStyles.searchBoxOptTxt ]}
                >Working perfectly well!!</Text>
            </TouchableOpacity>
        </>
    )
}
