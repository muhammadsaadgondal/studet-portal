import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import CondRender from "./Pages/CondRender/CondRender";
import StudentHeader from "./Components/StudentHeader/StudentHeader";
import LoginPage from "./Pages/LoginPage/LoginPage";
/* Context to update page */
import { usePageContext } from "./Context/PageContext";
import {  useLoginContext } from "./Context/LoginContext";

function App() {
  const { loggedIn } = useLoginContext();
  const { activePage, updateState } = usePageContext();

  useEffect(() => {
    console.log("I'm insude useEffect with value :", loggedIn);
  }, [loggedIn]);

  return (
    <Fragment>
      {loggedIn === true ?
        <div>
          <StudentHeader />
          <CondRender activePage={activePage} updateState={updateState} />
        </div>
        :
        <LoginPage />
      }

      <Footer />
      {
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById('back')
        )
      }
    </Fragment>
  );
}

export default App;
