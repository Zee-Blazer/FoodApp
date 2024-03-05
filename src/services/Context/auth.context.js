import React, { useState, createContext, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    return (
        <AuthContext.Provider
            value={{}}
        >
            { children }
        </AuthContext.Provider>
    )
}
