import Dropdown from "react-bootstrap/Dropdown";
import "../../Assets/Styles/UserDropdown.css";

const UserDropdown = () => {
  return (
    <Dropdown className="shadow-none">
      <Dropdown.Toggle className="dropdown-toggle" id="dropdown-basic">
        Username
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item path="">Action</Dropdown.Item>
        <Dropdown.Item path="">Another action</Dropdown.Item>
        <Dropdown.Item path="">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
