import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCalendarCheck,
    faClipboardList,
    faBook,
    faFileAlt,
    faBookReader,
    faChalkboard,
    faClipboardCheck,
    faFilePowerpoint,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import './SubjectDetail.css'; // You can create a corresponding CSS file for styling
import StudentHeader from "../StudentHeader/StudentHeader";
import { Fragment } from "react";
import { usePageContext } from "../../Context/PageContext";

const SubjectDetail = () => {

    const buttonData = [
        { id: 1, icon: faBell, label: "Course Notification" },
        { id: 2, icon: faCalendarCheck, label: "Attendance" },
        { id: 3, icon: faClipboardList, label: "Marks Summary" },
        { id: 4, icon: faBook, label: "Learning resources" },
        { id: 5, icon: faFileAlt, label: "Assignments" },
        { id: 6, icon: faBookReader, label: "MDB" },
        { id: 7, icon: faChalkboard, label: "GDB" },
        { id: 8, icon: faClipboardCheck, label: "Quizzes" },
        { id: 9, icon: faFilePowerpoint, label: "Lecture Content" },
        { id: 10, icon: faInfoCircle, label: "Course information" },
    ];
    const [selectedButton, setSelectedButton] = useState(null);

    const { updateState } = usePageContext();
   

    const handleButtonClick = (buttonLabel,buttonId) => {
        setSelectedButton(buttonId);
        updateState(buttonLabel);
    };

    return (
        <Fragment>
            <StudentHeader />
            <div className="subject-detail-container">
                <div className="row">
                    <div className="course-detail">
                        {/* Include your course details here */}
                        <h2>Artificial Intelligence</h2>
                        <h4>Course Code : CSC462    Credit Hours : 3</h4>
                        <h4>Teacher : Umar Nauman</h4>
                    </div>

                    <div className="button-list">
                        {buttonData.map((button) => (
                            <button
                                key={button.id}
                                className={selectedButton === button.id ? "selected btn" : "btn"}
                                onClick={() => handleButtonClick(button.label,button.id)}
                            >
                                <FontAwesomeIcon className="btnIcon" icon={button.icon} size="2x" />
                                <p>{button.label}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="detail-section">
                    {selectedButton ? (
                        <div>
                            <h3>Button {selectedButton} Detail</h3>
                            {/* Include detailed information related to the selected button */}
                            {/* ... */}
                        </div>
                    ) : (
                        <p>Select a button to view details</p>
                    )}
                </div>
            </div>
        </Fragment>

    );
};

export default SubjectDetail;
