import { Fragment } from "react";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import RegistrationCard from "../../Components/StudentPage/RegistrationCard/RegistrationCard";
import { useAuthContext } from "../../Context/AuthContext";


const Registration = () => {

    const { currentUser } = useAuthContext();
    return <Fragment>
        <StudentHeader profileUrl={currentUser.imgUrl} />
        <RegistrationCard />
    </Fragment>
}

export default Registration;