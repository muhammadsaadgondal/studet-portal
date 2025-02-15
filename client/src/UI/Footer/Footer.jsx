import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footerMain}>
            <p>
                <a href="https://cms.comsats.edu.pk:8083/">CUOnline</a> , Principal Seat © 2018-COMSATS ®
            </p>
        </div>
    );
};

export default Footer;