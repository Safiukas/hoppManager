import logo from "./../../Assets/Images/main-logo.jpg";
import UserDropdown from "../../Components/UserDropdown/UserDropdown";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/SideNav/Sidebar";
import { Route, Routes } from "react-router-dom";

export const AdminHeader = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center my-3">
      <div className="logo col-4 d-flex align-items-center">
        <Sidebar />
        <Routes>
          <Route path="" />
          <Route path="" />
          <Route path="" />
          <Route path="" />
          <Route path="" />
          <Route path="" />
        </Routes>
        <Link to="/dashboard">
          <img
            src={logo}
            className="mx-5"
            style={{ width: "120px" }}
            alt="Hopp Logo"
          />
        </Link>
      </div>

      <UserDropdown />
    </div>
  );
};

export default AdminHeader;
