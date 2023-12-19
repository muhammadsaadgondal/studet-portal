import React, { useState } from "react";
import classes from "./Login.module.css";
import Captcha from "./Captcha/Captcha";
import { useLoginContext } from "../../../Context/LoginContext";
import { usePageContext } from "../../../Context/PageContext";
import { useAuthContext } from "../../../Context/AuthContext";

const Login = () => {
    const { login: Loggingin } = useLoginContext();
    const { updateState } = usePageContext();
    const { currentUser, login } = useAuthContext();

    const [reg, setReg] = useState('');
    const [password, setPassword] = useState('');
    const [captchaSelected, setCaptchaSelected] = useState(false); // Default to true to avoid immediate error

    const handleCaptchaChange = (selected) => {
        // console.log("ho to gya bhai");
        setCaptchaSelected(selected);
    };

    const [error, setError] = useState(null);

    const submitHandler = async (event) => {
        event.preventDefault();
        if (!captchaSelected) {
            setError("Please select the captcha.");
            return;
        }
        try {
            // Call the login function from the AuthContext
            const tempUser = await login(reg, password);
            if (tempUser != null) {
                // console.log(`Hui Hui welcome: ${tempUser.name} plus ${currentUser}`);
                if (captchaSelected) {
                    Loggingin();
                    // Redirect to the dashboard or another page
                    updateState("Dashboard");
                }
            } else {
                setError("Invalid username or password. Please try again.");
                setReg("");
                setPassword("");
            }
        } catch (error) {
            setError("Error signing in. Please try again later.");
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className={classes["main-container"]}>
            <form onSubmit={submitHandler}>
                {error && <div className={classes.error}>{error}</div>}
                <button className={`${classes.btn} ${classes.btn1}`} >By Roll No</button>
                <button className={`${classes.btn} ${classes.btn2}`} >By List</button>
                <input
                    className={classes.text}
                    type="text"
                    placeholder="Registration No"
                    value={reg}
                    onChange={(e) => setReg(e.target.value)}
                ></input>
                <input
                    className={classes.pswd}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div className={`${classes.capt} ${classes['captcha-container']}`}>
                    <Captcha className={classes.capt} onChange={handleCaptchaChange} />
                </div>
                <div className={classes.loginSection}>
                    <div>
                        <p className={classes.forgotPwd}>Forgot Password ?<a href="#">Click Here!</a></p>
                        <a className={classes.parentConsole}>FOR PARENT CONSOLE</a>
                    </div>
                    <button className={classes.submitBtn} type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
