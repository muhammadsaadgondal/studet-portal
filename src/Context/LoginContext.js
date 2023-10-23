import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
    // console.log("Setting it to true");
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
