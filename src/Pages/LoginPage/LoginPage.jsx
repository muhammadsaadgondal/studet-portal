import BackDrop from "../../UI/BackDrop/BackDrop";
import Footer from "../../UI/Footer/Footer";
import BottomSection from "../../Components/BottomSection/BottomSection";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import ReactDOM from "react-dom";
import React from "react";

const LoginPage = () => {
  // console.log("Inside the login page bela waja");
  return (
    <React.Fragment>
      <Header />
      <Main />
      <BottomSection />
    </React.Fragment>

  );
}

export default LoginPage;