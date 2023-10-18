import React from 'react';
import StudentDetailRow from './StudentDetailRow';
import "./RegistrationCard.css";
import Table from '../../StudentHeader/Table';
import RegistrationTable from './RegistrationTable';

const RegistrationCard = () => {
    // Define sample student data
    const studentData = {
        name: 'Muhammad Saad Gondal',
        registrationNo: 'FA21-BCS-035',
        program: 'Computer Science',
        session: '2023',
        courses: '5',
        campus: 'ISB',
    };

    // Function to handle printing the card
    const handlePrintCard = () => {
        window.print(); // This will open the browser's print dialog
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
                <RegistrationTable />
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
