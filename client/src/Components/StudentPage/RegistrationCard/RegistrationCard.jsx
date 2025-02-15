import React, { useRef } from 'react';
import StudentDetailRow from './StudentDetailRow';
import "./RegistrationCard.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useAuthContext } from '../../../Context/AuthContext';
import RegistrationTable from './RegistrationTable';

const RegistrationCard = () => {
    const { currentUser } = useAuthContext();
    const componentRef = useRef();
    const cleanedCoursesString = currentUser.courses.replace(/'/g, '"');
    const coursesArray = JSON.parse(cleanedCoursesString);

    const studentData = {
        name: currentUser.name,
        registrationNo: currentUser.reg,
        program: currentUser.program,
        session: currentUser.session,
        courses: coursesArray.length-1,
        campus: currentUser.campus,
    };

    const handlePrintCard = async (e) => {
        e.preventDefault();
        const input = componentRef.current;
        
        try {
            const canvas = await html2canvas(input, {
                scale: 2, // Increase for better resolution
                logging: true,
                useCORS: true
            });
            
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190; // Max width for A4
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save(`${studentData.registrationNo}_registration_card.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="registration-card" ref={componentRef}>
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
