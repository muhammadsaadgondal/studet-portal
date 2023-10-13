import { Fragment } from "react";
import "./BottomSection.css"
import Latest from "./Latest/Latest";
import Events from "./Events/Events";


const BottomSection = () => {
    return <div className="bottomMain">
        <Latest />
        <Events />
    </div>
}

export default BottomSection;