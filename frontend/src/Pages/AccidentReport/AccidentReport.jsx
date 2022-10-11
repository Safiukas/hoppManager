import Axios from "axios";
import "./AccidentReport.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const AccidentReport = () => {
  const [employee, setEmployee] = useState(null);
  const [location, setLocation] = useState("");
  const [accident, setAccident] = useState("");

  const changeEmployee = (e) => {
    setEmployee(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const submitAccident = () => {
    Axios.post("http://localhost:3000/home/accidentReport/create", {
      employee,
      location,
      accident,
    });
  };

  return (
    <div>
      {/* Header */}
      <Header />
      {/* End of Header */}

      {/* Title */}
      <h2 className="title">Accident report</h2>

      {/* Form container */}
      <div className="form-container">
        <Form className="form-group">
          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">
                Injured person name:
              </Form.Label>
              <Form.Select
                className="form-select shadow-none"
                aria-label="Injured person name"
                name="employee"
                value={employee}
                onChange={changeEmployee}
              >
                <option>Select employee</option>
                <option value="Mike">Mike</option>
                <option value="Sandra">Sandra</option>
                <option value="Ralph">Ralph</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="tab">
            <Form.Group>
              <FloatingLabel
                className="floating-label"
                controlId="floatingTextarea2"
                label="Explain where accident happened:"
              >
                <Form.Control
                  as="textarea"
                  className="text-area shadow-none"
                  style={{ height: "150px" }}
                  name="whatHappen"
                  value={location}
                  onChange={handleLocationChange}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
          <div className="tab">
            <Form.Group>
              <FloatingLabel
                className="floating-label"
                controlId="floatingTextarea2"
                label="Explain what happened:"
              >
                <Form.Control
                  as="textarea"
                  className="text-area shadow-none"
                  style={{ height: "150px" }}
                  name="whereHappen"
                  value={accident}
                  onChange={(e) => {
                    setAccident(e.target.value);
                  }}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
          <div className="btn-container">
            <Button className="btn">Cancel</Button>
            <Button onClick={submitAccident} className="btn">
              Submit
            </Button>
          </div>
        </Form>
      </div>
      {/* End of form container */}
      <Footer />
    </div>
  );
};

export default AccidentReport;
