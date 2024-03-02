import EventBox from "./EventBox";
import classes from "./Events.module.css";

const eveList = [
    {
        period: "22-31 July, 2019",
        date: "22 July",
        description: "COMSATS Summer Workshops Art, Design & Architecture"
    },
    {
        period: "11-12 July, 2019",
        date: "11 July",
        description: "Training Workshop on 'PYTHON: Data Analysis and Visualization'"
    }, {
        period: "11-12 July, 2019",
        date: "11 July",
        description: "Training Workshop on 'PYTHON: Data Analysis and Visualization'"
    }, {
        period: "11-12 July, 2019",
        date: "11 July",
        description: "Training Workshop on 'PYTHON: Data Analysis and Visualization'"
    }
];

const Events = () => {
    return (
        <div className={classes.eventsMain}>
            <h2>Events</h2>
            <hr />
            <div className={classes.scrollContainer}>
                {eveList.map((obj, index) => (
                    <EventBox key={index} currObj={obj} />
                ))}
            </div>
        </div>
    );
};

export default Events;
