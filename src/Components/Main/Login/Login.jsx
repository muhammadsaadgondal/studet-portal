import React, { useState } from "react";
import classes from "./Login.module.css";
import Captcha from "./Captcha/Captcha";
import { useLoginContext } from "../../../Context/LoginContext";
import { usePageContext } from "../../../Context/PageContext";
import { useAuthContext } from "../../../Context/AuthContext"; // Update the path accordingly

const Login = () => {
    const {  login: Loggingin } = useLoginContext();
    const { updateState } = usePageContext();
    const { currentUser, login } = useAuthContext();

    const [reg, setReg] = useState('fa21-bcs-035');
    const [password, setPassword] = useState('saadstar1');

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            // Call the login function from the AuthContext
            const tempUser = await login(reg, password);

            if (tempUser != null) {
                // console.log(`Hui Hui welcome :${tempUser.name} plus ${currentUser}`);
                Loggingin();
                // Redirect to the dashboard or another page
                updateState("Dashboard");
            }
            else{
                setReg("");
                setPassword("")
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className={classes["main-container"]}>
            <form onSubmit={submitHandler}>
                <button onClick={() => { }} className={`${classes.btn} ${classes.btn1}`} >By Roll No</button>
                <button onClick={() => { }} className={`${classes.btn} ${classes.btn2}`} >By List</button>
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
    );
}

export default Login;
