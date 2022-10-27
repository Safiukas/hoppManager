import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from "react-bootstrap/Form";
import { register, reset } from "../../Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const EmployeeComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email,
    role,
    password,
    confirmPassword,
  } = formData;

  // const navigate = useNavigate()
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Error/Success handlers
  useEffect(() => {
    if (isError) {
      console.log(message);
      // Fire error modal
    }
    if (isSuccess) {
      //Fire success modal
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  //Event handler
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Form submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Fire error modal
      console.log("Passwords don't match");
    } else {
      const userData = {
        firstName,
        middleName,
        lastName,
        phoneNumber,
        email,
        role,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    //Fire loading spinner
    console.log("Loading");
  }

  return (
    <>
      <section className="form-container">
        <Form onSubmit={onSubmit}>
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
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Middle name:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="text"
              placeholder="Middle name"
              id="middleName"
              name="middleName"
              autoComplete="off"
              required
              onChange={onChange}
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
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Phone number:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="tel"
              placeholder="7775983"
              id="phoneNumber"
              name="phoneNumber"
              autoComplete="off"
              required
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Email address:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="emailAddress"
              placeholder="john.johnsson@gmail.com"
              id="emailAddress"
              name="emailAddress"
              autoComplete="off"
              required
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <Form.Label className="form-label">Role:</Form.Label>
            <Form.Select
              className="form-select shadow-none"
              aria-label="Role"
              name="role"
              required
              onChange={onChange}
            >
              <option>Select role</option>
              <option value="captain">Captain</option>
              <option value="hopper">Hopper</option>
            </Form.Select>
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
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Repeat password</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="password"
              placeholder="Repeat password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={onChange}
            />
          </Form.Group>
          <div className="btnContainer">
            <Button className="create-btn shadow-none" type="submit">
              Create
            </Button>
            {/* // TODO: Cancel btn e => route back */}
            <Button className="create-btn shadow-none">Cancel</Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default EmployeeComponent;
