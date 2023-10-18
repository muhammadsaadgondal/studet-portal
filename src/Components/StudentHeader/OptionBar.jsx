import OptionTab from "./OptionTab";
import classes from "./OptionBar.module.css";

const barData = [{
    imgSrc: "./assets/images/StudentHeader/house.png",
    text: "Dashboard"
}, {
    imgSrc: "./assets/images/StudentHeader/reading.png",
    text: "Reg Card"
}, {
    imgSrc: "./assets/images/StudentHeader/money.png",
    text: "Fees"
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Result Card"
}, {
    imgSrc: "./assets/images/StudentHeader/boy.png",
    text: "Profile"
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Clearance"
}, {
    imgSrc: "./assets/images/StudentHeader/logout.png",
    text: "Logout"
}]

const OptionBar = (props) => {
    return (
        <div className={classes.info}>
            {barData.map(tab => (
                <OptionTab
                    imgSrc={tab.imgSrc}
                    text={tab.text}
                />
            ))}
        </div>

    );
}

export default OptionBar;