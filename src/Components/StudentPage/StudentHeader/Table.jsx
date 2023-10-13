// Table.js
import React from 'react';
import './Table.css'; // Import the CSS file

const generateRandomAttendance = () => Math.floor(Math.random() * 100); // Generates random attendance (0-100%)

const TableRow = ({ data }) => (
    <tr>
        {data.map((cell, index) => (
            <td key={index}>
                {index === data.length - 1 && ( // Check if it's the "Attendance" column
                    <div className="progress-bar">
                        <div className="filled-bar" style={{ width: `${data[data.length - 1]}%` }}>
                            {data[data.length - 1]}%
                        </div>
                    </div>
                )}
                {index !== data.length - 1 && cell} 
            </td>
        ))}
    </tr>
);


const Table = () => {
    const tableData = [
        ['Course ID', 'Course Name', 'Instructor', 'Credit Hours', 'Location', 'Attendance'],
        ['101', 'Mathematics', 'Prof. Smith', '3', 'Room 201', '87'],
        ['102', 'History', 'Dr. Johnson', '4', 'Room 304', '90'],
        ['103', 'Biology', 'Dr. White', '3', 'Room 102', '50'],
        ['104', 'Physics', 'Prof. Brown', '3', 'Room 205', '79'],
        ['105', 'Chemistry', 'Dr. Adams', '4', 'Room 301', '87'],
    ];

    return (
        <div className="table-container">
            <h2>Registered Courses List</h2>
            <table className="custom-table">
                <thead>
                    <tr>
                        {tableData[0].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.slice(1).map((rowData, index) => (
                        <TableRow key={index} data={rowData} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
