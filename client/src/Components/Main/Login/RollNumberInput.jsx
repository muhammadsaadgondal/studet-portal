import React, { useState } from "react";
import "./RollNumberInput.css";


const RollNumberInput = () => {
    const [rollNumber, setRollNumber] = useState("");
    const validFormatRegex = /^[a-zA-Z]{0,2}\d{0,2}-[a-zA-Z]{0,3}-\d{0,3}$/;

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 7) {
            if (validFormatRegex.test(inputValue) || inputValue === "") {
                setRollNumber(inputValue);
            }
        } else if (inputValue.length > 4) {
            const newRegex = /^[a-zA-Z]{0,2}\d{0,2}-[a-zA-Z]{0,3}$/;
            if (newRegex.test(inputValue) || inputValue === "") {
                setRollNumber(inputValue);
            }
        } else if (inputValue.length > 2) {
            const newRegex = /^[a-zA-Z]{0,2}\d{0,2}$/;
            if (newRegex.test(inputValue) || inputValue === "") {
                setRollNumber(inputValue);
            }
        } else if (inputValue.length <= 2) {
            const newRegex = /^[a-zA-Z]{0,2}$/;
            if (newRegex.test(inputValue) || inputValue === "") {
                setRollNumber(inputValue);
            }
        }

        // if (validFormatRegex.test(newValue) || newValue === "") {
        //     setRollNumber(newValue);
        // }
    };

    return (
        <input
            className="rollNoInput"
            type="text"
            placeholder="Enter your roll number"
            value={rollNumber}
            onChange={handleInputChange}
        />
    );
};

export default RollNumberInput;
