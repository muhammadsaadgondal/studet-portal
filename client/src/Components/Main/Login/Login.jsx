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
    const [captchaSelected, setCaptchaSelected] = useState(false);
    const [selectedList1, setSelectedList1] = useState('');
    const [selectedList2, setSelectedList2] = useState('');
    const [listInput, setListInput] = useState('');
    const [inputMode, setInputMode] = useState('rollno'); // 'rollno' or 'list'
    const [error, setError] = useState(null);

    const handleCaptchaChange = (selected) => {
        setCaptchaSelected(selected);
    };

    const handleRegChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (value.length <= 12) { // Ensure the length is 11 characters (e.g., sp21-bcs-035)
            let formattedValue = value;
            if (value.length > 4 && value[4] !== '-') {
                formattedValue = value.slice(0, 4) + '-' + value.slice(4);
            }
            if (value.length > 8 && value[8] !== '-') {
                formattedValue = formattedValue.slice(0, 8) + '-' + formattedValue.slice(8);
            }
            setReg(formattedValue);
        }
    };

    const handleListChange = () => {
        // Combine selected options and input into the reg format (e.g., fa21-bcs-035)
        if (selectedList1 && selectedList2 && listInput) {
            setReg(`${selectedList1}-${selectedList2}-${listInput}`);
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (!captchaSelected) {
            setError("Please select the captcha.");
            return;
        }
        if (inputMode === 'list' && (!selectedList1 || !selectedList2 || !listInput)) {
            setError("Please fill all fields for 'By List'.");
            return;
        }
        try {
            // console.log(`PWD ${password} REG ${reg.toLowerCase()}`);
            
            const tempUser = await login(reg.toLowerCase(), password);
            if (tempUser != null) {
                if (captchaSelected) {
                    Loggingin();
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
                <button
                    className={`${classes.btn} ${classes.btn1}`}
                    type="button"
                    onClick={() => setInputMode('rollno')}
                >
                    By Roll No
                </button>
                <button
                    className={`${classes.btn} ${classes.btn2}`}
                    type="button"
                    onClick={() => setInputMode('list')}
                >
                    By List
                </button>

                {inputMode === 'rollno' ? (
                    <input
                        className={classes.text}
                        type="text"
                        placeholder="Registration No (e.g., sp21-bcs-035)"
                        value={reg}
                        onChange={handleRegChange}
                    />
                ) : (
                    <div className={classes.listRow}>
                        <select
                            className={classes.text}
                            value={selectedList1}
                            onChange={(e) => {
                                setSelectedList1(e.target.value);
                                handleListChange();
                            }}
                        >
                            <option value="">Select Semester</option>
                            <option value="FA21">FA21</option>
                            <option value="SP21">SP21</option>
                            <option value="FA22">FA22</option>
                            <option value="SP22">SP22</option>
                            <option value="FA23">FA23</option>
                            <option value="SP23">SP23</option>
                            <option value="FA24">FA24</option>
                            <option value="SP24">SP24</option>
                            <option value="FA25">FA25</option>
                            <option value="SP25">SP25</option>
                        </select>
                        <select
                            className={classes.text}
                            value={selectedList2}
                            onChange={(e) => {
                                setSelectedList2(e.target.value);
                                handleListChange();
                            }}
                        >
                            <option value="">Select Program</option>
                            <option value="BCS">BCS</option>
                            <option value="BAF">BAF</option>
                            <option value="BEE">BEE</option>
                            {/* Add other programs as needed */}
                        </select>
                        <input
                            className={classes.text}
                            type="text"
                            placeholder="Roll No (e.g., 035)"
                            value={listInput}
                            onChange={(e) => {
                                setListInput(e.target.value);
                                handleListChange();
                            }}
                        />
                    </div>
                )}

                <input
                    className={classes.pswd}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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
};

export default Login;