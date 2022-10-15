import "./Sidenav.css";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="nav-container">
      <div className="title">
        <span>Navigation</span>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="header shadow-none">
            Employees
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link>Captains</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link>Hoppers</Link>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="shadow-none">Reports</Accordion.Header>
          <Accordion.Body>
            <Link>Daily car reports</Link>
            <Link>Shift reports</Link>
            <Link>Accident reports</Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidenav;
