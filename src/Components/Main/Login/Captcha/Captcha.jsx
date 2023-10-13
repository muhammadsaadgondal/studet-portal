import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Captcha.css";

const Captcha = () => {
    const handleRecaptchaChange = (value) => {
        // Handle CAPTCHA verification here
        console.log("reCAPTCHA value:", value);
    };

    return (
        <div
            className="captcha-box">
            <ReCAPTCHA className="captcha"
                sitekey="6LdMDoEoAAAAAFMHThreJWji_NtTD-LvZya-wRoe" // Replace with your reCAPTCHA site key
                onChange={handleRecaptchaChange}
            />
        </div>
    );
};

export default Captcha;
