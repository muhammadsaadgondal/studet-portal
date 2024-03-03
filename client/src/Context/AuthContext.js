import React, { useContext, useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
/* FIREBASE DATABASE  */
import datafetch from "../services/dataFetch";

const auth = getAuth();
const AuthContext = React.createContext({
    currentUser: {},
    login: () => { console.log("Same old shit"); }
});

export const useAuthContext = () => {
    return useContext(AuthContext);
}


const fetchData = async (reg, password) => {

    try {
        const data = await datafetch();
        console.log(data);
        // Now you can iterate over the data
        for (let item in data) {
            console.log(data[item].pwd);
            if (data[item].reg === reg && data[item].pwd === password) {
                console.log("True ha vro");
                return data[item];
            }
        }
        return null;
    } catch (error) {
        // Handle errors here
        console.error('Error in fetchData:', error);
    }

};

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    const customLogin = async (reg, password) => {
        try {
            console.log("Idr to ya ha");
            const userData = await fetchData(reg, password);
            if (userData != null) {
                console.log(userData);
                // console.log(`Here it is ${userData.name}`);
                /* Msla ha user state updation ont workig */
                

                setCurrentUser(userData)
                // const tempUser=userData;
            }
            console.log(`Checking the state updation ${currentUser}`);
            return userData;

        } catch (error) {
            // Handle login errors
            console.error("Error during login:", error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])


    return <AuthContext.Provider value={{ currentUser, login: customLogin }}>{children}</AuthContext.Provider>;
};
