import React, { createContext, useState, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userLevelData, setUserLevelData] = useState(null);

    const setData = (user) => {
        setUserData(user);
    };

    const deleteData = () => {
        setUserData(null);
    };

    const setLevelData = (levelData) => {
        setUserLevelData(levelData);
    }
    
    const deleteLevelData = () => {
        setUserLevelData(null);
    }

    return (
        <SessionContext.Provider value={{ userData, setData, deleteData, userLevelData, setLevelData, deleteLevelData}}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    return useContext(SessionContext);
};