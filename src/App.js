import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import CondRender from "./Pages/CondRender/CondRender";
import StudentHeader from "./Components/StudentHeader/StudentHeader";
/* Context to update page */
import { useContext } from 'react';
import { usePageContext } from "./Context/PageContext"; 

function App() {
  const [loggedIn, setLogin] = useState(false); // Fixed the typo in variable name

  const { activePage, updateState } = usePageContext(); 


  return (
    <Fragment>
      <StudentHeader  />
      <CondRender activePage={activePage} updateState={updateState} />
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
