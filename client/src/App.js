import React, { Fragment, useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useLoginContext } from "./Context/LoginContext";
import StudentPage from "./Pages/StudentPage/StudentPage";

function App() {
  const { loggedIn } = useLoginContext();
  useEffect(() => {
    // fetchData();
  }, [loggedIn]);
  return (
    <div>
      <BackDrop />
      {loggedIn ? <StudentPage /> : <LoginPage />}
      <Footer />
    </div>
  );
}

export default App;
