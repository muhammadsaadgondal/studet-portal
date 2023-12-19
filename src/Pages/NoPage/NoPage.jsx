import { Fragment } from "react";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";

const NoPage = () => {
    return <Fragment>
        <StudentHeader />
        <h4 style={{color:"red"}}>No page Found</h4>
    </Fragment>
}

export default NoPage;