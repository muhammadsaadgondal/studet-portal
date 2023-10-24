import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import CondRender from "./Pages/CondRender/CondRender";
import StudentHeader from "./Components/StudentHeader/StudentHeader";
import LoginPage from "./Pages/LoginPage/LoginPage";
/* Context to update page */
import { useLoginContext } from "./Context/LoginContext";

function App() {
  const { loggedIn } = useLoginContext();

  useEffect(() => {
  }, [loggedIn]);

  return (
    <Fragment>
      {loggedIn === true ?

        <div>
          
          <StudentHeader />
          <CondRender />
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
