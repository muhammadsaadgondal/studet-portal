import React, { Fragment } from 'react';
import classes from "./BackDrop.module.css";

const BackDrop = () => {
    return (
        <Fragment>
            <div className={classes.overlay}>
                <img src="./assets/images/backGround2.jpg" alt="Background" />
            </div>
            <div className={classes.backdrop}>
                <img src="./assets/images/backGround.jpg" alt="Background" />
            </div>
        </Fragment>

    );
};

export default BackDrop;
