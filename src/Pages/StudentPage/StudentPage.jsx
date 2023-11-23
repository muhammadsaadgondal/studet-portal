import { Fragment } from "react";
import ReactDOM from "react-dom";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import Table from "../../Components/StudentHeader/Table";
import datafetch from "../../services/dataFetch";

const StudentPage = () => {
    /* for FireBase Data */
    const data = datafetch;
    


    return <Fragment>
        <StudentHeader />
        <Table />
    </Fragment>
}

export default StudentPage;