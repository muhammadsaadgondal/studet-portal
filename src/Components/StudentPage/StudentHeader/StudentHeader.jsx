import React, { Fragment } from 'react';
import './StudentHeader.css'; // Import your CSS file for styling
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OptionTab from './OptionTab';
import Table from './Table';

const barData = [{
    imgSrc: "./assets/images/StudentHeader/house.png",
    text: "Dashboard"
}, {
    imgSrc: "./assets/images/StudentHeader/reading.png",
    text: "Reg Card"
}, {
    imgSrc: "./assets/images/StudentHeader/money.png",
    text: "Fees"
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Result Card"
}, {
    imgSrc: "./assets/images/StudentHeader/boy.png",
    text: "Profile"
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Clearance"
}, {
    imgSrc: "./assets/images/StudentHeader/logout.png",
    text: "Logout"
}]

library.add(fas);
const StudentHeader = () => {
    return (
        <Fragment>
            <div className="student-header">
                <div className="logo">
                    <img src="./assets/images/logo_with_text.png" alt="Logo" />
                </div>
                <div className="info">
                    {barData.map(tab => (
                        <OptionTab
                            imgSrc={tab.imgSrc}
                            text={tab.text}
                        />
                    ))}
                </div>
                <div className="student-image">
                    <img src="./assets/images/StudentHeader/profile.jpeg" alt="Student" />
                </div>
            </div>
        </Fragment>

    );
}

export default StudentHeader;
