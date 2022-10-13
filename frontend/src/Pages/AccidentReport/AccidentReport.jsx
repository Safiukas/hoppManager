import "./AccidentReport.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000/home/accidentReport";

const AccidentReport = () => {
  const [employee, setEmployee] = useState("");
  const [location, setLocation] = useState("");
  const [accident, setAccident] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { employee, location, accident });
      if (response) {
        console.log("Data went through");
      }
    } catch (error) {
      console.log("Data didn't go through" + error);
    }
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
        <Form className="form-group" onSubmit={onSubmit}>
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
                onChange={(e) => {
                  setEmployee(e.target.value);
                }}
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
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
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
            <Button className="btn" type="submit">
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
