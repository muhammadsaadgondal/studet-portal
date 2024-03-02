import React, { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext({
  loggedIn: false,
  login: () => { },
  logout: () => { },
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    
  }, [loggedIn]);

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
