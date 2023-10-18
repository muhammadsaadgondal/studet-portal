import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import CondRender from "./Pages/CondRender/CondRender";

function App() {
  const [loggedIn, setLogin] = useState(false); // Fixed the typo in variable name

  return (
    <Fragment>
      <CondRender />
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
