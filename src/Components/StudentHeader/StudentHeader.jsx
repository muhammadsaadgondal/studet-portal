import React, { Fragment} from 'react';
import './StudentHeader.css';
import OptionBar from './OptionBar';


const StudentHeader = (props) => {
    return (
        <Fragment>
            <nav className="student-header">
                <div className="logo">
                    <img src="./assets/images/logo_with_text.png" alt="Logo" />
                </div>
                <OptionBar />
                <div className="student-image">
                    <img src={props.profileUrl} alt="Student" />
                </div>
            </nav>
        </Fragment>

    );
}

export default StudentHeader;
