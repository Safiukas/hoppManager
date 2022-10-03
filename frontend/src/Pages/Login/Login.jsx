const loginImage = require("../../Assets/Images/login-image.jpg");
const hoppLogo = require("../../Assets/Images/logo.jpg");
import "../../Assets/Styles/Login.css";

const Login = () => {
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="logo col-md-8 col-lg-7 col-xl-6">
            <img src={loginImage} class="img-fluid" alt="Hopp background" />
          </div>

          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div class="form-logo">
              <img
                src={hoppLogo}
                class="hopp-logo"
                alt="Hopp Logo"
                width="55px"
              />
            </div>

            <h4 class="title">Log In</h4>

            <form action="/login" method="POST">
              <div class="form-outline mb-4">
                <input
                  type="email"
                  autocomplete="chrome-off"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  name="email"
                />
                <label
                  class="form-label"
                  style="color: #ececec"
                  for="form1Example13"
                >
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  name="password"
                />
                <label
                  class="form-label"
                  style="color: #ececec; border-color: #1ce5be"
                  for="form1Example23"
                >
                  Password
                </label>
              </div>

              <button type="submit" class="btn btn-lg btn-block">
                Sign in
              </button>

              <button type="button" class="btn btn-lg btn-block">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
