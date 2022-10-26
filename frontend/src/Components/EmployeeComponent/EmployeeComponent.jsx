import Button from "react-bootstrap/esm/Button";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from "react-bootstrap/Form";

const EmployeeComponent = () => {
  return (
    <>
      <section className="form-container">
        <Form>
          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">First name:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="text"
              placeholder="First name"
              id="firstName"
              name="firstName"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group>
            <FormLabel className="form-label">Middle name:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="text"
              placeholder="Middle name"
              id="middleName"
              name="middleName"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Last name:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="text"
              placeholder="Last name"
              id="lastName"
              name="lastName"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Phone number:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="phoneNumber"
              placeholder="First name"
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Email address:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="emailAddress"
              placeholder="First name"
              id="emailAddress"
              name="emailAddress"
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Password</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              required
            />
          </Form.Group>
          <div className="btnContainer">
            <Button className="create-btn shadow-none">Create</Button>
            <Button className="create-btn shadow-none">Cancel</Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default EmployeeComponent;
