import OptionTab from "./OptionTab";
import classes from "./OptionBar.module.css";
/* Context to update page */
import { usePageContext } from "../../Context/PageContext";
import { useLoginContext } from "../../Context/LoginContext";
import { useState } from "react";

const barData = [{
    imgSrc: "./assets/images/StudentHeader/house.png",
    text: "dashboard",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/reading.png",
    text: "registration",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/money.png",
    text: "Fees",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Result Card",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/boy.png",
    text: "profile",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/contact.png",
    text: "Clearance",
    active: false
}, {
    imgSrc: "./assets/images/StudentHeader/logout.png",
    text: "Logout",
    active: false
}]

const OptionBar = () => {
    const { activePage, updateState } = usePageContext();
    const { logout } = useLoginContext();

    const updatedList = barData.map(dataUnit => {
        if (dataUnit.text === activePage) {
            return { ...dataUnit, active: true };
        }
        return dataUnit;
    })
    const logoutHandler=()=>{
        logout();
    }
        return (
            <div className={classes.info}>
                {updatedList.map(tab => (
                    <OptionTab
                        key={tab.text}
                        updateState={updateState}
                        imgSrc={tab.imgSrc}
                        text={tab.text}
                        active={tab.active}
                        logoutUser={logoutHandler}
                    />
                ))}
            </div>

        );
}

export default OptionBar;