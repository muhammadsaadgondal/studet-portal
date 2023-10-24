import React from "react";
import StudentPage from "../StudentPage/StudentPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Registration from "../Registration/Registration";
import { usePageContext } from "../../Context/PageContext";

const CondRender = () => {
  const { activePage, updateState } = usePageContext();
 
  React.useEffect(() => {
    updateState(activePage);
  }, [activePage]);

  switch (activePage) {
    case "Dashboard":
      return <StudentPage />;
    case "Profile":
      return <ProfilePage />;
    case "Reg Card":
      return <Registration />;
    default:
      return null; // Handle the default case if necessary
  }
};

export default CondRender;
