import "./RegistrationTable.css";

const TableRow = ({ data }) => (
    <tr>
        {data.map((cell, index) => (
            <td key={index}>
                {cell} 
            </td>
        ))}
    </tr>
);

const RegistrationTable=(props)=>{

    

    const tableData = props.data;
    return (
        <div className="reg-table-container">
            <table className="reg-custom-table">
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
}
// const tableData = [
//     ['S.NO', 'Course Code', 'Course Title', 'Credit Hours', 'Teacher', 'Class(Program-Semester-Description-Section)'],
//     ['1', 'Mathematics', 'Prof. Smith', '3', 'Room 201', '87'],
//     ['2', 'History', 'Dr. Johnson', '4', 'Room 304', '90'],
//     ['3', 'Biology', 'Dr. White', '3', 'Room 102', '50'],
//     ['4', 'Physics', 'Prof. Brown', '3', 'Room 205', '79'],
//     ['5', 'Chemistry', 'Dr. Adams', '4', 'Room 301', '87'],
// ];


export default RegistrationTable;