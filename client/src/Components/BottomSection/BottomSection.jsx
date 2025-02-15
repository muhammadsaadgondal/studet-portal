import { Fragment } from "react";
import "./BottomSection.css";
import Latest from "./Latest/Latest";
import Events from "./Events/Events";

const BottomSection = () => {
    return (
        <div data-testid="bottom-main" className="bottomSection">
            <div className="latest">
            <hr className="section-divider" /> 
                <Latest />
            </div>
            <div className="events">
            <hr className="section-divider" /> 
                <Events />
            </div>
            <button type="submit" disabled></button>
        </div>
    );
};

export default BottomSection;
