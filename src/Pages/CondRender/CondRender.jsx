import React from "react";
import StudentPage from "../StudentPage/StudentPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Registration from "../Registration/Registration";

const CondRender = (props) => {
  const [pageName, setPageName] = React.useReducer((state, action) => {
    return action;
  }, props.activePage);

  React.useEffect(() => {
    setPageName(props.activePage);
    // props.updateState(pageName);
  }, [pageName,props]);

  switch (pageName) {
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
