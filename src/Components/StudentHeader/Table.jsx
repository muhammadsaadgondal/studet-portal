// Table.js
import React from 'react';
import './Table.css'; // Import the CSS file
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const generateRandomAttendance = () => Math.floor(Math.random() * 100); // Generates random attendance (0-100%)
{/* <Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>

  <Switch>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/" component={Home} />
  </Switch>
</div>
</Router> */}
const TableRow = ({ data }) => (
    <tr className='rowItem'>
        {data.map((cell, index) => (
            <td key={index} >
                <a href='#'>
                    {index === data.length - 1 && ( // Check if it's the "Attendance" column
                        <div className="progress-bar">
                            <div className="filled-bar" style={{ width: `${data[data.length - 1]}%` }}>
                                {data[data.length - 1]}%
                            </div>
                        </div>
                    )}
                    {index !== data.length - 1 && cell}
                </a>
            </td>
        ))}

    </tr>


);


const Table = (props) => {
    
    /* Since data obtained is considering courses as a string we need to parse it to arrays structure */
    const coursesString = props.data;
    // console.log(props.data);
    const cleanedCoursesString = coursesString.replace(/'/g, '"');
    const coursesArray = JSON.parse(cleanedCoursesString);

    const tableData = coursesArray;
    console.log(coursesArray);
    console.log(tableData);

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
