import { Fragment } from "react";
import classes from "./VideoBox.module.css";
import IFrameComponent from "../../../UI/IFrame/IFrameComponent";


const VideoBox = (props) => {
    // console.log(props.currObj);
    return (
        <div className={classes.imageContainer}>
            <h3>{props.currObj.title}</h3>
            <IFrameComponent url={props.currObj.url} />
            <p>{props.currObj.description}</p>
            <a href="https://www.wikipedia.org/"> Learn More</a>
        </div>
    );
}

export default VideoBox;