import { Fragment } from "react";
import classes from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
    return <div className={classes['profile-main']}>
        <h6>Dear Students,</h6>
        <p>CUI has created your account on Office365. You can now use applications like MS Teams, MS Office365 and several others from this account.</p>
        <p>Please Login to <a href="#">Office 365</a></p>
        <h6>Office 365 Email Address : FA21-BCS-035@ISBSTUDENT.COMSATS.EDU.PK</h6>
        <h6>Office 365 Password :</h6>
        <p>In case of any query please contact IT Support Team. Good Luck!</p>
        <p className={classes['red-text']}>Kindly verify the spelling of your Name, Father Name and Date of Birth on Cu Online portal. Please ensure that your Name, Father Name and Date of Birth must be in accordance to your SSC (Matric/O Level) documents. In case of any mistake in the spelling highlighted at later stage, you will be held responsible and will have to follow the required procedure for rectification at that stage. Therefore, please vigilantly verify the spelling of your Name, Father Name and Date of Birth. Best Regards</p>
        <hr />
        <div className={classes['profile-mid']}>
            <div>
                <div className={classes['profile-info']}>
                    <h6>Registration Number : </h6>
                    <p>CIIT/FA21-BCS-035/ISB</p>
                </div>
                <div className={classes['profile-info']}>
                    <h6>Full Name : </h6>
                    <p>MUHAMMAD SAAD GONDAL</p>
                </div>
                <div className={classes['profile-info']}>
                    <h6>Father Name : </h6>
                    <p>MUHAMMAD PERVAIZ</p>
                </div>
                <div className={classes['profile-info']}>
                    <h6>Nationality : </h6>
                    <p>Pakistani</p>
                </div>
                <div className={classes['profile-info']}>
                    <h6>Date of Birth : </h6>
                    <p>07 Jul 2003</p>
                </div>
            </div>
            <div className={classes['profile-mid-right']}>
                <FontAwesomeIcon
                    className={classes.faIcon}
                    icon={faUnlock} fade />
                <a href="#">Forget</a>
            </div>

        </div>
        <div className={classes['profile-table-container']}>
        <table className={classes['profile-table']}>
            <thead className={classes['profile-table-head']}>
                <tr>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Contact Person Type</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody className={classes['profile-table-body']}>
                <tr>
                    <td>example@email.com</td>
                    <td>123-456-7890</td>
                    <td>Contact Type</td>
                    <td>
                        <a href="#">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
       

    </div>
}

export default Profile; 