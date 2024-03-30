import React, { useState, useEffect, createContext } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {

    return (
        <RestaurantContext.Provider
            value={{}}
        >
            { children }
        </RestaurantContext.Provider>
    )
}
