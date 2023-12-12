import VideoBox from "./VideoBox";
import classes from "./Latest.module.css";

const latestObject = [{
    title: "CRP Guide",
    description: "How to do CPR on an Adult over 12 years age.",
    thumbnailURL: "https://youtu.be/bAM0YkNLf7M",
    url: "https://youtu.be/bAM0YkNLf7M"
}, {
    title: "COMSATS",
    description: "COMSATS University Islamabad Intro,duction.",
    thumbnailURL: "https://youtu.be/bAM0YkNLf7M",
    url: "https://youtu.be/8kJAeYR7-xw"
}, {
    title: "NEWS",
    description: "Eagle Eye With Moazam Shahbaz, 20 Oct 2019",
    thumbnailURL: "https://youtu.be/bAM0YkNLf7M",
    url: "https://youtu.be/r9jgXMq7Iaw"
}]

const Latest = () => {
    return <div className={classes.mainContainer}>
        <h2>Latest</h2>
        <hr />
        <div className={classes.container}>
            {latestObject.map((obj,index) => (
                <VideoBox key={index} currObj={obj}
                />
            ))}
        </div>


    </div>
}

export default Latest;