import React, { useState, createContext, useEffect } from 'react';

// Firebase Functionalities
import { 
    getAllRestaurantsForUser,
    generalGetAllInfoSearch
} from '../Firebase/User/Restaurants/details.restaurants';

export const DetailsContext = createContext();

export const DetailsContextProvider = ({ children }) => {

    const [restaurantsData, setRestaurantsData] = useState([]);
    const [drinkRecords, setDrinkRecords] = useState();
    const [foodRecords, setFoodRecords] = useState();
    const [snacksRecord, setSnacksRecord] = useState();
    const [restaurantsRecord, setRestaurantsRecord] = useState(); 
    const [allItemRecord, setAllItemRecord] = useState();

    const [totalAmt, setTotalAmt] = useState(0);

    const [searchResult, setSearchResult] = useState();

    const getDataMain = () => {
        setDrinkRecords(generalGetAllInfoSearch("drinks"));
        setFoodRecords(generalGetAllInfoSearch("food"));
        setSnacksRecord(generalGetAllInfoSearch("snacks"));
        setRestaurantsRecord(generalGetAllInfoSearch("restaurants"));
        setAllItemRecord(generalGetAllInfoSearch("all"));
    }

    const addAllAmount = (price, num) => {
        // setTotalAmt( totalAmt + ( price * num ) );
        // console.log(totalAmt)
    }

    useEffect( () => {
        getAllRestaurantsForUser(setRestaurantsData);
        getDataMain();
    }, [] )

    return (
        <DetailsContext.Provider
            value={{
                restaurantsData,
                drinkRecords,
                foodRecords,
                snacksRecord,
                allItemRecord,
                restaurantsRecord,
                getDataMain,
                searchResult, 
                setSearchResult,
                totalAmt,
                setTotalAmt,
                addAllAmount
            }}
        >
            { children }
        </DetailsContext.Provider>
    )
}
