import React, { useRef, useState, useEffect, useContext } from 'react';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Navigation 
import { useNavigation } from '@react-navigation/native';

// Details Context ("For all important information")
import { DetailsContext } from '../../services/Context/details.context';

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

    const textInputRef = useRef<TextInput | null>(null);

    const [searchItemTxt, setSearchItemTxt] = useState();

    const searchVal = (e: string) => {
        setSearchItemTxt(e);

        const lowCaseQuery = e.toLowerCase();

        const dataRecord = allItemRecord.filter( records => {
            return records.name.toLowerCase().includes(lowCaseQuery);
        } )

        setSearchResult(dataRecord);
    }

    useEffect(() => {
        // Automatically focus on the TextInput when the component mounts
        if (textInputRef.current && !redirect) {
          textInputRef.current.focus();
        }
    }, []);

    useEffect( () => {
        getDataMain();
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
                />
                {/* <MaterialIcons name="cancel" size={15} color="#CDCDCF" /> */}
            </View>

            {
                !redirect && searchItemTxt && searchItemTxt.length > 1 && 
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
