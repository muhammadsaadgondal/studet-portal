import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext({
    activePage: 'Dashboard', // Default value
    updateState: () => { }, // Default function
});

export const usePageContext = () => {
    return useContext(PageContext);
};


export const PageProvider = ({ children }) => {
    const [pageName, setPageName] = useState('Dashboard');

    const updateState = (activeState) => {
        setPageName(activeState);
        console.log("Updating state:", activeState);
    };

    const page = {
        activePage: pageName,
        updateState: updateState
    }

    return (
        <PageContext.Provider value={page}>
            {children}
        </PageContext.Provider>
    );
};
