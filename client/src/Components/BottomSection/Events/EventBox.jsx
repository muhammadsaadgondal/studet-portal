import { Fragment } from "react";
import classes from "./EventBox.module.css";

const EventBox = (props) => {
    // console.log(props.currObj);
    return (
        <div className={classes.eventBoxMain}>
            <div className={classes.eventDate}>
                <h2>{props.currObj.date}</h2>
                <p>{props.currObj.period}</p>
            </div>
            <div>
                <h3>{props.currObj.description}</h3>
                <a href="#">Read More</a>
            </div>
        </div>
    );
}

export default EventBox;