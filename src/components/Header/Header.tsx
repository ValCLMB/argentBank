import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useSelector((state: RootState) => state);
  const linkToSign = user.firstName ? "/user" : "/signin";
  const linkToHome = user.firstName ? "/user" : "";

  const signout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.pathname = "/";
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={linkToHome}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to={linkToSign}>
          <FontAwesomeIcon icon={faUserCircle} />
          {user.firstName ? user.firstName : "Sign in"}
        </Link>
        {user.firstName ? (
          <div className="main-nav-item" onClick={signout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </div>
        ) : null}
      </div>
    </nav>
  );
};
