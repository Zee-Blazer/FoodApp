import React, { useState, useEffect, useContext, createContext } from 'react';

// Authentication Context
import { AuthContext } from './auth.context';

// Firebase function
import { restaurantInfoDetails } from '../Firebase/Chef/Restaurant/restaurant-info';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {

    // Authentication Context instance of the user
    const { user } = useContext(AuthContext);

    // State management
    const [restaurantInfo, setRestaurantInfo] = useState();

    useEffect( () => {
        user && restaurantInfoDetails(user.uid, setRestaurantInfo);
    }, [ user ] )   

    return (
        <RestaurantContext.Provider
            value={{
                restaurantInfo
            }}
        >
            { children }
        </RestaurantContext.Provider>
    )
}
