import React from 'react';
import { Link } from 'react-router-dom';
import './Table.css';

const TableRow = ({ data }) => (
    <tr className='rowItem'>
        {data.map((cell, index) => (
            <td key={index}>
                <Link to={`/SubjectDetail`}>
                    {index === data.length - 1 && (
                        <div className="progress-bar">
                            <div className="filled-bar" style={{ width: `${data[data.length - 1]}%` }}>
                                {data[data.length - 1]}%
                            </div>
                        </div>
                    )}
                    {index !== data.length - 1 && cell}
                </Link>
            </td>
        ))}
    </tr>
);

const Table = (props) => {
    const coursesString = props.data;
    const cleanedCoursesString = coursesString.replace(/'/g, '"');
    const coursesArray = JSON.parse(cleanedCoursesString);
    const tableData = coursesArray;

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
