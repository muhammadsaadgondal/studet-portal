import "./Header.css";
// import "./comsats.png"

const Header = () => {

    return (
        <div className="header-container">
                <img
                    src="./assets/images/logo_with_text.png"
                    alt="Comsats Logo"
                    className="header-left"
                />

            <img
                    src="./assets/images/CUOnlineStudentConsole.png"
                    alt="cui Logo"
                    className="header-right"
                />
        </div>
    );
}

export default Header;