import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from "react-bootstrap/Form";
import { createEmployee, reset } from "../../Features/team/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../Assets/Styles/ReactToastify.css";

const notify = (message) => toast(message);

const EmployeeComponent = () => {
  // const toast = (message) => toast(message);

  const navigate = useNavigate();

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

  const { employee, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.team
  );

  // Error/Success handlers
  useEffect(() => {
    if (isError) {
      // Fire error modal
      console.log(message);
      toast.error(message, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (isSuccess) {
      //Fire success modal
      toast.success("Employee created successfully!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/dashboard/team");
    }

    dispatch(reset());
  }, [employee, isError, isSuccess, message, dispatch, navigate]);

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
      toast.warn("Passwords don't match!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const employeeData = {
        firstName,
        middleName,
        lastName,
        phoneNumber,
        email,
        role,
        password,
      };

      dispatch(createEmployee(employeeData));
    }
  };

  if (isLoading) {
    //Fire loading spinner
    console.log("Loading");
    toast("Loading...");
  }

  return (
    <>
      {/* TODO: Create title */}

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
              value={firstName}
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
              value={middleName}
              autoComplete="off"
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
              value={lastName}
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
              value={phoneNumber}
              autoComplete="off"
              required
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Email address:</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="email"
              placeholder="john.johnsson@gmail.com"
              id="email"
              name="email"
              value={email}
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
              value={role}
              required
              onChange={onChange}
            >
              <option>Select role</option>
              <option value="Captain">Captain</option>
              <option value="Hopper">Hopper</option>
            </Form.Select>
          </Form.Group>

          {/* TODO: Add functionality to view password  */}
          <Form.Group className="form-outline mb-4">
            <FormLabel className="form-label">Password</FormLabel>
            <Form.Control
              className="form-control shadow-none"
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
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
              value={confirmPassword}
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
      <ToastContainer />
    </>
  );
};

export default EmployeeComponent;
