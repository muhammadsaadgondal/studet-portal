import { useReducer, useState } from "react";
import StudentPage from "../StudentPage/StudentPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Registration from "../Registration/Registration";

const CondRender = (props) => {
    const [pageName, setPageName] = useState('profile');


    switch (pageName) {
        case 'dashboard': return <StudentPage />;
        case 'profile': return <ProfilePage />;
        case 'registration': return <Registration />

    }

}

export default CondRender;