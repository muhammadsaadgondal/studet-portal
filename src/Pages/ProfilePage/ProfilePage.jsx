import { Fragment } from "react";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import Profile from "../../Components/StudentPage/Profile/Profile";
import { useAuthContext } from "../../Context/AuthContext";

const ProfilePage = () => {
    
    const { currentUser } = useAuthContext();
    return <Fragment>
        <StudentHeader profileUrl={currentUser.imgUrl}/>
        <Profile />
    </Fragment>
}

export default ProfilePage;