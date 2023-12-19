import React from 'react';
import StudentDetailRow from './StudentDetailRow';
import "./RegistrationCard.css";
import Table from '../../StudentHeader/Table';
import RegistrationTable from './RegistrationTable';
import { useAuthContext } from '../../../Context/AuthContext';

const RegistrationCard = () => {
    
    const { currentUser } = useAuthContext();
    const cleanedCoursesString = currentUser.courses.replace(/'/g, '"');
    const coursesArray = JSON.parse(cleanedCoursesString);
    // Define sample student data
    const studentData = {
        name: currentUser.name,
        registrationNo: currentUser.reg,
        program: currentUser.program,
        session: currentUser.session,
        courses: coursesArray.length-1,
        campus: currentUser.campus,
    };

    // Function to handle printing the card
    const handlePrintCard = () => {
        // window.print(); 
    };

    return (
        <div className="registration-card">
            <div className="top-section">
                <a href="#" onClick={handlePrintCard} className="print-link">
                    Print Registration Card
                </a>
                <h2>Student Registration Card</h2>
            </div>
            <div className='detail-section'>
                <StudentDetailRow
                    title="Name :"
                    titleText={studentData.name}
                    title2="Registration No :"
                    title2Text={studentData.registrationNo}
                /><StudentDetailRow
                    title="Program :"
                    titleText={studentData.program}
                    title2="Courses :"
                    title2Text={studentData.courses}
                /><StudentDetailRow
                    title="Session :"
                    titleText={studentData.session}
                    title2="Campus :"
                    title2Text={studentData.campus}
                />
                <RegistrationTable data={coursesArray}/>
            </div>
            <div >
                <div className='reg-card-bottom-hr'>
                    <hr /> <hr />
                </div>
                <div className='reg-card-bottom'>
                    <p >Student Signature</p>
                    <p>Head Signature</p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationCard;
