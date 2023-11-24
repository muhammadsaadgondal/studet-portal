import React, { Fragment, useEffect, useState } from 'react';
import './StudentHeader.css';
import OptionBar from './OptionBar';
import ToggleButton from './ToggleButton';



const StudentHeader = (props) => {



    return (
        <Fragment>
            <nav className="student-header">
                <div className="logo">
                    <img src="./assets/images/logo_with_text.png" alt="Logo" />
                </div>
                    <OptionBar />
                <div className="student-image">
                    <img src="./assets/images/StudentHeader/profile.jpeg" alt="Student" />
                </div>
            </nav>
        </Fragment>

    );
}

export default StudentHeader;
