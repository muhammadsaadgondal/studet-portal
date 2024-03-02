import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ToggleButton.module.css";

const ToggleButton = () => {
    return (
        <div className={classes["btn-main"]}>
            <div className={classes['btn-back']}>
                <button className={classes['toggle-button']}>
                    <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} />
                </button>
            </div>

        </div>

    );
}

export default ToggleButton;