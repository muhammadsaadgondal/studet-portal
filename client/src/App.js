import React, {  useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom";
import Footer from "./UI/Footer/Footer";
import BackDrop from "./UI/BackDrop/BackDrop";
import LoginPage from "./Pages/LoginPage/LoginPage";
/* Context to update page */
import { useLoginContext } from "./Context/LoginContext";
import StudentPage from "./Pages/StudentPage/StudentPage";
import Registration from "./Pages/Registration/Registration";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import NoPage from "./Pages/NoPage/NoPage";
/* FIREBASE DATABASE  */
import SubjectDetail from "./Components/SubjectDetail/SubjectDetail";


function App() {
  const { loggedIn } = useLoginContext();
  useEffect(() => {
    // fetchData();
  }, [loggedIn]);
  return (

    <Router>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('back')
      )}
      <Routes>
        <Route path="/"
          element={loggedIn ?
            <StudentPage /> :
            <LoginPage />
          } />
        <Route path="dashboard" element={<StudentPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="SubjectDetail" element={<SubjectDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>


      <Footer />
    </Router>

  );
}
export default App;
