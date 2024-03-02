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
import { useAuthContext } from "../../Context/AuthContext";

const SubjectDetail = () => {
    const { currentUser } = useAuthContext();
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


    const handleButtonClick = (buttonLabel, buttonId) => {
        setSelectedButton(buttonId);
        updateState(buttonLabel);
    };

    return (
        <div>
            <StudentHeader profileUrl={currentUser.imgUrl} />
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
                                onClick={() => handleButtonClick(button.label, button.id)}
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
                            {selectedButton === 2 && (
                                <p>Receive notifications about important course updates, deadlines, and announcements.</p>
                            )}
                            {selectedButton === 1 && (
                                <div
                                    style={{
                                        display: 'block' ,
                                        padding: '20px',
                                        margin: '10px 0',
                                        backgroundColor: '#FFC107', // Amber color for important notifications
                                        color: '#333',
                                        borderRadius: '5px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <strong>Important:</strong>  <p>Track your attendance and view attendance records for the Artificial Intelligence course.</p>
                                </div>
                            )}
                            {selectedButton === 3 && (
                                <p>Check your marks summary for quizzes, assignments, and exams in the Artificial Intelligence course.</p>
                            )}
                            {selectedButton === 4 && (
                                <p>Access learning resources such as readings, articles, and additional materials for the course.</p>
                            )}
                            {selectedButton === 5 && (
                                <p>View and submit assignments for the Artificial Intelligence course.</p>
                            )}
                            {selectedButton === 6 && (
                                <p>Explore the content related to the MDB (Multi-Dimensional Book) for Artificial Intelligence.</p>
                            )}
                            {selectedButton === 7 && (
                                <p>Participate in Group Discussion Boards (GDBs) to discuss topics related to Artificial Intelligence.</p>
                            )}
                            {selectedButton === 8 && (
                                <p>Take quizzes and check your performance in the quizzes conducted for the course.</p>
                            )}
                            {selectedButton === 9 && (
                                <p>Access lecture content, slides, and materials used during the Artificial Intelligence lectures.</p>
                            )}
                            {selectedButton === 10 && (
                                <p>Get detailed information about the Artificial Intelligence course, including syllabus and policies.</p>
                            )}
                        </div>
                    ) : (
                        <p>Select a button to view details</p>
                    )}

                </div>
            </div>
        </div>

    );
};

export default SubjectDetail;
