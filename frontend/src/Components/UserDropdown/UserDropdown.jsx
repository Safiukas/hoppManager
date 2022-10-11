import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Features/Auth/authSlice";
import Dropdown from "react-bootstrap/Dropdown";
import "../../Assets/Styles/UserDropdown.css";

const UserDropdown = () => {
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async (e) => {
    try {
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dropdown className="shadow-none">
      <Dropdown.Toggle className="dropdown-toggle" id="dropdown-basic">
        {currentUser.firstName}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item path="">My Rating</Dropdown.Item>
        <Dropdown.Item path="">Settings</Dropdown.Item>
        <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
