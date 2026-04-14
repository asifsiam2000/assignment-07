'use client'
import React, { createContext, useState } from 'react';


export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
    
    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);
    const [allData, setAllData] = useState([]);

    const data = {
        call, setCall, text, setText, video, setVideo, allData , setAllData,
    };

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;