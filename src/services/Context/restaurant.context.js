import React, { useState, useEffect, useContext, createContext } from 'react';

// Authentication Context
import { AuthContext } from './auth.context';

// Firebase function
import { restaurantInfoDetails } from '../Firebase/Chef/Restaurant/restaurant-info';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {

    // Authentication Context instance of the user
    const { user } = useContext(AuthContext);

    const [restaurantInfo, setRestaurantInfo] = useState();

    useEffect( () => {
        restaurantInfoDetails(user.uid, setRestaurantInfo);
    }, [] )

    console.log(restaurant);

    return (
        <RestaurantContext.Provider
            value={{
                restaurant
            }}
        >
            { children }
        </RestaurantContext.Provider>
    )
}
