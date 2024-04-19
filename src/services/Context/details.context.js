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

    useEffect( () => {
        getAllRestaurantsForUser(setRestaurantsData);
        setDrinkRecords(generalGetAllInfoSearch("drinks"));
        setFoodRecords(generalGetAllInfoSearch("food"));
        setSnacksRecord(generalGetAllInfoSearch("snacks"));
        setRestaurantsRecord(generalGetAllInfoSearch("restaurants"));
        setAllItemRecord(generalGetAllInfoSearch("all"));
    }, [] )

    // console.log(drinkRecords);
    // console.log(foodRecords);
    // console.log(snacksRecord);
    // console.log(restaurantsRecord);
    // console.log(allItemRecord);

    return (
        <DetailsContext.Provider
            value={{
                restaurantsData,
                drinkRecords,
                foodRecords,
                snacksRecord,
                allItemRecord,
                restaurantsRecord
            }}
        >
            { children }
        </DetailsContext.Provider>
    )
}
