import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const setData = (user) => {
        setUserData(user);
    };

    const deleteData = () => {
        setUserData(null);
    };

    return (
        <SessionContext.Provider value={{ userData, setData, deleteData }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    return useContext(SessionContext);
};