import { Fragment } from "react";
import ReactDOM from "react-dom";
import Footer from "../../UI/Footer/Footer";
import BackDrop from "../../UI/BackDrop/BackDrop";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";
import Table from "../../Components/StudentHeader/Table";

const StudentPage = () => {
    return <Fragment>
        <Table />
        {/* <Footer /> */}
        {ReactDOM.createPortal(
            <BackDrop />,
            document.getElementById('back')
        )}
    </Fragment>
}

export default StudentPage;