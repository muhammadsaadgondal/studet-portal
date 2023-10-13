import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import LoginPage from "./Pages/LoginPage/LoginPage";
import StudentPage from "./Pages/StudentPage/StudentPage";


function App() {
  const [logedIn, setLogin] = useState(false);

  return logedIn ? <LoginPage /> : <StudentPage />;
}

export default App;
