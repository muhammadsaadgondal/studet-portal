import Login from "./Login/Login";
import NoticeList from "./NoticeBoard/NoticeList";
import "./Main.css";

const Main = () => {
    return (
        <div className="main-container">
            <div className="notice-list">
                <NoticeList />
            </div>
            <div className="login-container">
                <Login />
            </div>
        </div>
    );
};

export default Main;
