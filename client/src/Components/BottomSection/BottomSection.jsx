import { Fragment } from "react";
import "./BottomSection.css"
import Latest from "./Latest/Latest";
import Events from "./Events/Events";


const BottomSection = () => {
    return <div data-testid="bottom-main" className="bottomMain">
        <Latest />
        <Events />
        <button type="submit" disabled></button>
    </div>
}

export default BottomSection;