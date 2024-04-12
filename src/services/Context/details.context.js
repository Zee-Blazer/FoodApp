import React, { useState, createContext, useEffect } from 'react';

// Firebase Functionalities
import { getAllRestaurantsForUser } from '../Firebase/User/Restaurants/details.restaurants';


export const DetailsContext = createContext();

export const DetailsContextProvider = ({ children }) => {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect( () => {
        getAllRestaurantsForUser(setRestaurantData);
    }, [] )

    return (
        <DetailsContext.Provider
            value={{
                restaurantData
            }}
        >
            { children }
        </DetailsContext.Provider>
    )
}
