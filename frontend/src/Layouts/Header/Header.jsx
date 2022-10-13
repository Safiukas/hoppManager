import "./Header.css";
import logo from "./../../Assets/Images/main-logo.jpg";
import UserDropdown from "../../Components/UserDropdown/UserDropdown";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className="logo col-4">
        <Link to="/home">
          <img
            src={logo}
            className="logo"
            style={{ width: "120px" }}
            alt="Hopp Logo"
          />
        </Link>
      </div>

      <UserDropdown />
    </div>
  );
};

export default Header;
