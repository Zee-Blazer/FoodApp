import React, { useRef, useState, useEffect } from 'react';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Navigation 
import { useNavigation } from '@react-navigation/native';

import { View, TextInput, Text } from 'react-native';

// Styling 
import { homeUsersScreenStyles } from '../../styles/screens/home-users.styles';
import { searchUsersStyles } from '../../styles/screens/serach-users.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBoxOptComponent } from './Search/search-box-opt.component'; // For the search options

interface Props {
    redirect: boolean
}

export const SearchBarContComponent: React.FC<Props> = ({ redirect }) => {

    const navigation = useNavigation();

    const textInputRef = useRef<TextInput | null>(null);

    const [searchItemTxt, setSearchItemTxt] = useState();

    useEffect(() => {
        // Automatically focus on the TextInput when the component mounts
        if (textInputRef.current && !redirect) {
          textInputRef.current.focus();
        }
      }, []);

    return (
        <>
            <View style={ homeUsersScreenStyles.searchBarCont }>
                <AntDesign name="search1" size={15} color="#A0A5BA" />
                <TextInput 
                    ref={textInputRef}
                    placeholder="Search"
                    placeholderTextColor="#676767"
                    style={ homeUsersScreenStyles.searchBarTxt }
                    onChangeText={ setSearchItemTxt }
                    value={ searchItemTxt }
                    onFocus={ () => redirect && navigation.navigate("Search") }
                />
                {/* <MaterialIcons name="cancel" size={15} color="#CDCDCF" /> */}
            </View>

            {
                !redirect && 
                <View style={[ searchUsersStyles.searchBoxOptCont ]}>
                    <ScrollView>

                        <SearchBoxOptComponent />
                        <SearchBoxOptComponent />
                        
                    </ScrollView>
                </View>
            }
        </>
    )
}
