import "./AccidentForm.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccident } from "../../Features/accidentReport/accidentSlice";

const AccidentForm = () => {
  const [employee, setEmployee] = useState("");
  const [location, setLocation] = useState("");
  const [accident, setAccident] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createAccident({ employee, location, accident }));
    setEmployee("");
    setLocation("");
    setAccident("");
  };

  return (
    <>
      <h2 className="title">Accident report</h2>
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
    </>
  );
};

export default AccidentForm;
