import { Fragment } from "react";
import "./StudentDetail.css";

const StudentDetail = (props) => {
    return (
        <div className="student-detail-main">
            <div className="student-detail-row">
                <p>
                    <span className="title-span">{props.title}</span>
                    <span >{props.titleText}</span>
                </p>
            </div>
            <div className="student-detail-row2">
                <p>
                    <span className="title-span">{props.title2}</span>
                    <span >{props.title2Text}</span>
                </p>
            </div>
        </div>
    );
};

export default StudentDetail;
