import RollNumberInput from "./RollNumberInput";
import classes from "./Login.module.css";
import Captcha from "./Captcha/Captcha";
import { useLoginContext } from "../../../Context/LoginContext";

const Login = () => {
    const { loggedIn, login } = useLoginContext();

    console.log("Initially it is :" + loggedIn);
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Value is :" + loggedIn);
        console.log("----");
        login();
        console.log("Value is :" + loggedIn);
    }

    return <div className={classes["main-container"]}>
        <form onSubmit={submitHandler}>
            <button className={`${classes.btn} ${classes.btn1}`} >By Roll No</button>
            <button className={`${classes.btn} ${classes.btn2}`} >By List</button>
            <RollNumberInput />
            <input
                className={classes.pswd}
                type="password"
                placeholder="Password"
            ></input>
            <Captcha />
            <div className={classes.loginSection}>
                <div>
                    <p className={classes.forgotPwd}>Forgot Password ?<a href="#">Click Here!</a></p>
                    <a className={classes.parentConsole}>FOR PARENT CONSOLE</a>
                </div>
                <button className={classes.submitBtn} type="submit">Login</button>
            </div>
        </form>

    </div>
}

export default Login;
