import React, { useState, useEffect } from "react";
import RollNumberInput from "./RollNumberInput";
import classes from "./Login.module.css";
import Captcha from "./Captcha/Captcha";
import { useLoginContext } from "../../../Context/LoginContext";
import { usePageContext } from "../../../Context/PageContext";

const Login = () => {
    const { loggedIn, setLoggedIn } = useLoginContext();
    const { activePage, updateState } = usePageContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://your-server-url/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const { token } = await response.json();
                // Assuming your authController sends back a JWT token
                // Store the token in localStorage or another secure storage method
                localStorage.setItem('token', token);

                // Update the loggedIn state in your React context
                setLoggedIn(true);

                // Redirect to the dashboard or another page
                updateState("Dashboard");
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div className={classes["main-container"]}>
            <form onSubmit={submitHandler}>
                <button onClick={() => { }} className={`${classes.btn} ${classes.btn1}`} >By Roll No</button>
                <button onClick={() => { }} className={`${classes.btn} ${classes.btn2}`} >By List</button>
                <RollNumberInput />
                <input
                    className={classes.email}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
