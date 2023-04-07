import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export const Header = () => {
    const token = useSelector((state: RootState) => state.token);

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./signin">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </a>
            </div>
        </nav>
    );
};
