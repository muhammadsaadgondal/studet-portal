import { Fragment } from "react";
import ReactDOM from "react-dom";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import Table from "../../Components/StudentHeader/Table";
import { useAuthContext } from "../../Context/AuthContext"; // Update the path accordingly


const StudentPage = () => {
    const { currentUser } = useAuthContext();

    return <Fragment>
        <StudentHeader profileUrl={currentUser.imgUrl} />
        <Table data={currentUser.courses} />
    </Fragment>
}

export default StudentPage;