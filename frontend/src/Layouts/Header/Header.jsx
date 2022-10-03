import logo from "./../../Assets/Images/main-logo.jpg";
import "../../Assets/Styles/Header.css";
import UserDropdown from "../../Components/UserDropdown/UserDropdown";

export const Header = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className="logo col-4">
        <img src={logo} className="logo" alt="Hopp Logo" />
      </div>

      <UserDropdown />
    </div>
  );
};
