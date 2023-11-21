import React, { Fragment, useEffect, useState } from "react";
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
import database from "./services/firebase";
import { ref, get, set, push } from 'firebase/database';

function App() {
  const { loggedIn } = useLoginContext();
  /* To FireBase Data */
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the 'students' node in your database
        const dbRef = ref(database, 'students');

        // Fetch data
        const snapshot = await get(dbRef);

        // Handle the data
        if (snapshot.exists()) {
          setData(snapshot.name);
          console.log('Data exists:', snapshot.val());
        } else {
          console.log('No data available');

          const studentKey = push(dbRef).key;

          await push(dbRef, {

            name: 'Muhammad Saad Gondal',
            fName: "Muhammad Pervaiz",
            reg: 'fa21-bcs-035',
            contact: '0320-1054643',
            nationality: 'Pakistani',
            dob: '08-02-2002',
            email: 'saadgondal203@gmail.com'

          }
          );
        }
      } catch (error) {
        console.log("REal");
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [loggedIn]);
  return (

    <Router>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById('back')
      )}
      <Routes>
        <Route path="/" element={loggedIn ? <StudentPage /> : <LoginPage />} />
        <Route path="dashboard" element={<StudentPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>


      <Footer />
    </Router>

  );
}
export default App;
