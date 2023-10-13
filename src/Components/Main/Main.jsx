import Login from "./Login/Login";
import NoticeList from "./NoticeBoard/NoticeList";
import "./Main.css";


const Main = () => {
    return (
            <div className="main-container">
                <NoticeList  />
                <Login />
            </div>
    )
}

export default Main;