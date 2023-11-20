import { Fragment } from "react";
import ReactDOM from "react-dom";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import Table from "../../Components/StudentHeader/Table";

const StudentPage = () => {
    return <Fragment>
        <StudentHeader />
        <Table />
    </Fragment>
}

export default StudentPage;