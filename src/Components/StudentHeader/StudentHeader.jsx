import React, { Fragment, useEffect, useState } from 'react';
import './StudentHeader.css';
import OptionBar from './OptionBar';
import ToggleButton from './ToggleButton';


const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

const StudentHeader = (props) => {
    const [tabIsOpen, setTabIsOpen] = useState(true);
    // console.log(props.activePage);
    const updateWindowWidth = () => {
        if (window.innerWidth <= 990) {
            // console.log("Goori");
            setTabIsOpen(false);
        } else {
            // console.log("GooriX");
            setTabIsOpen(true);
        }
    };

    const debouncedResizeHandler = debounce(updateWindowWidth, 250); // Adjust the debounce delay as needed

    useEffect(() => {
        // console.log("in Effect");
        window.addEventListener('resize', debouncedResizeHandler);

        return () => {
            window.removeEventListener('resize', debouncedResizeHandler);
        };
    }, [debouncedResizeHandler]);


    return (
        <Fragment>
            <div className="student-header">
                <div className="logo">
                    <img src="./assets/images/logo_with_text.png" alt="Logo" />
                </div>
                {tabIsOpen ?
                    <OptionBar />
                    :
                    <ToggleButton />
                }
                <div className="student-image">
                    <img src="./assets/images/StudentHeader/profile.jpeg" alt="Student" />
                </div>
            </div>
        </Fragment>

    );
}

export default StudentHeader;
