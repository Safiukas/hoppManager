import "./AccidentReport.css";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";
import Button from "react-bootstrap/esm/Button";

const AccidentReport = () => {
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
              >
                <option>Select employee</option>
                <option value="1">Mike</option>
                <option value="2">Sandra</option>
                <option value="3">Ralph</option>
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
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
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
                  placeholder="Leave a comment here"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
          <div className="btn-container">
            <Button className="btn">Cancel</Button>
            <Button className="btn">Submit</Button>
          </div>
        </Form>
      </div>
      {/* End of form container */}
      <Footer />
    </div>
  );
};

export default AccidentReport;
