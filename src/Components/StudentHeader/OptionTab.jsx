import classes from "./OptionTab.module.css";


const OptionTab = (props) => {
    // const classAddition = props.activePage;
    const classNames = `${classes['info-item']} ${props.active ? classes['active-item'] : ''}`;

    const updating = () => {
        props.updateState(props.text);
        /* Logic for updating Route */
        if (props.text === "Logout") {
            props.logoutUser();
        }
    }

    return (
        <a onClick={updating} className={classNames}>
            <img src={props.imgSrc} alt="Image 2" />
            <p>{props.text}</p>
        </a>
    );
}

export default OptionTab;