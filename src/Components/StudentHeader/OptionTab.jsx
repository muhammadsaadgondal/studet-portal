import classes from "./OptionTab.module.css";


const OptionTab = (props) => {

    return (
        <div className={classes['info-item']}>
            <img src={props.imgSrc} alt="Image 2" />
            <p>{props.text}</p>
        </div>
    );
}

export default OptionTab;