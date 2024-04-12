import React, { useState, createContext, useEffect } from 'react';

// Firebase Functionalities
import { getAllRestaurantsForUser } from '../Firebase/User/Restaurants/details.restaurants';


export const DetailsContext = createContext();

export const DetailsContextProvider = ({ children }) => {

    const [restaurantsData, setRestaurantsData] = useState([]);

    useEffect( () => {
        getAllRestaurantsForUser(setRestaurantsData);
    }, [] )

    return (
        <DetailsContext.Provider
            value={{
                restaurantsData
            }}
        >
            { children }
        </DetailsContext.Provider>
    )
}
