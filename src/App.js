import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import StudentPage from "./Pages/StudentPage/StudentPage";
import Registration from "./Pages/Registration/Registration";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";

function App() {
  const [loggedIn, setLogin] = useState(false); // Fixed the typo in variable name

  return (
    <Fragment>
      <Registration />
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
