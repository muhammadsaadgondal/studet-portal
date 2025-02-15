import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
    const defaultLogo = "./assets/images/logo_with_text.png";
    const smallScreenLogo = "https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png";

    const [logoSrc, setLogoSrc] = useState(defaultLogo);

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        if (typeof window !== "undefined") {
            const updateLogo = () => {
                // eslint-disable-next-line no-restricted-globals
                setLogoSrc(window.innerWidth < 768 ? smallScreenLogo : defaultLogo);
            };

            updateLogo();
            // eslint-disable-next-line no-restricted-globals
            window.addEventListener("resize", updateLogo);
            // eslint-disable-next-line no-restricted-globals
            return () => window.removeEventListener("resize", updateLogo);
        }
    }, []);

    return (
        <div className="header-container">
            <img src={logoSrc} alt="Comsats Logo" className="header-left" />
            <img
                src="./assets/images/CUOnlineStudentConsole.png"
                alt="CUI Logo"
                className="header-right"
            />
        </div>
    );
};

export default Header;
