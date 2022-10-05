import "./Login.css";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const loginImage = require("../../Assets/Images/login-image.jpg");
const hoppLogo = require("../../Assets/Images/logo.jpg");

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="logo col-md-8 col-lg-7 col-xl-6">
            <img src={loginImage} className="img-fluid" alt="Hopp background" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div className="form-logo">
              <img src={hoppLogo} className="hopp-logo" alt="Hopp Logo" />
            </div>

            <h4 className="title">Log In</h4>

            {/* React Form */}
            <Form>
              <Form.Group className="form-outline mb-4">
                <FormLabel className="form-label">Email address</FormLabel>
                <Form.Control
                  className="form-control shadow-none"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="form-outline mb-4">
                <FormLabel className="form-label">Password</FormLabel>
                <Form.Control
                  className="form-control shadow-none"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>

              <div className="btn-container">
                <Button className="login-btn shadow-none" type="submit">
                  Login
                </Button>
              </div>
            </Form>
            {/* End of React Form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
