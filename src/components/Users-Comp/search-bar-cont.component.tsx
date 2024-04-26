import React, { useRef, useState, useEffect, useContext } from 'react';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Navigation 
import { useNavigation } from '@react-navigation/native';

// Firebase function to save new keyword
import { saveNewKeyWord } from '../../services/Firebase/User/Restaurants/details.restaurants';

// Details Context ("For all important information")
import { DetailsContext } from '../../services/Context/details.context';

// Authentication Context
import { AuthContext } from '../../services/Context/auth.context';

import { View, TextInput, FlatList } from 'react-native';

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

    const { allItemRecord, getDataMain, setSearchResult, searchResult } = useContext(DetailsContext);

    const { user } = useContext(AuthContext);

    const textInputRef = useRef<TextInput | null>(null);

    const [searchItemTxt, setSearchItemTxt] = useState();

    const searchVal = (e: string) => {
        // Stores the text input value in a state variable ("Which is not really necessary")
        setSearchItemTxt(e);

        // Coverts the value of the input all to lower case characters
        const lowCaseQuery = e.toLowerCase();

        const dataRecord = allItemRecord.filter( records => {
            return records.name.toLowerCase().includes(lowCaseQuery);
        } )

        setSearchResult(dataRecord);
    }

    const getKeyWord = () => {
        saveNewKeyWord(user.uid, searchItemTxt.length > 1 && searchItemTxt)
    }

    useEffect(() => {
        // Automatically focus on the TextInput when the component mounts
        if (textInputRef.current && !redirect) {
          textInputRef.current.focus();
        }
    }, []);

    useEffect( () => {
        getDataMain(); // Not fully necessary but just for incasity
    }, [] )

    return (
        <>
            <View style={ homeUsersScreenStyles.searchBarCont }>
                <AntDesign name="search1" size={15} color="#A0A5BA" />
                <TextInput 
                    ref={textInputRef}
                    placeholder="Search"
                    placeholderTextColor="#676767"
                    style={ homeUsersScreenStyles.searchBarTxt }
                    onChangeText={ e => searchVal(e) }
                    value={ searchItemTxt }
                    onFocus={ () => redirect && navigation.navigate("Search") }
                    onSubmitEditing={ getKeyWord }
                />
            </View>

            {
                // First checks if the search bar doesn't want to navigate to another parth
                !redirect && 
                // Checking for a variable created Ganiyu Bolaji(Nigerian)
                searchItemTxt && searchItemTxt.length > 0 && 
                <View style={[ searchUsersStyles.searchBoxOptCont ]}>
                    <ScrollView>

                        <FlatList 
                            data={ searchResult }
                            renderItem={ ({ item }) => (
                                <SearchBoxOptComponent 
                                    data={ item }
                                />
                            ) }
                            key={ item => `${item.UID}-${item.name}` }
                        />
                        
                    </ScrollView>
                </View>
            }
        </>
    )
}
