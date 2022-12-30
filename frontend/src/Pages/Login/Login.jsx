import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../Features/Auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../Components/Spinner/Spinner";

const loginImage = require("../../Assets/Images/login-image.jpg");
const hoppLogo = require("../../Assets/Images/logo.jpg");

const errToast = (message) =>
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

const notify = (message) =>
  toast.warn(message, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  if (isError) {
    errToast(message);
  }

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/home");
    } else {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (email === "") {
      notify("Please enter your email!");
    }

    if (password === "") {
      notify("Please enter password!");
    }

    dispatch(login(userData));
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2 mr-2 py-5 flex items-center flex-col">
            <div className="">
              <img src={hoppLogo} className="h-16 rounded-md" alt="Hopp Logo" />
            </div>

            <h4 className="text-2xl py-3 text-[#ff5783] uppercase">Log In</h4>

            <form onSubmit={onSubmit}>
              <div className="w-80 flex flex-col my-3">
                <label className="text-[#ececec] mb-2 text-lg">
                  Email address:
                </label>
                <input
                  className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  autoComplete="off"
                />
              </div>

              <div className="w-80 flex flex-col my-3">
                <label className="text-[#ececec] mb-2 text-lg">Password:</label>
                <input
                  className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>

              <div className="flex items-center justify-center my-4">
                {/* <Button className="login-btn shadow-none" type="submit">
                Login
              </Button> */}

                <button
                  type="submit"
                  className="border-1 px-5 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-2xl hover:text-[#ff5783]"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="w-1/2 mx-3 py-7 items-center justify-center hidden md:block">
            <img src={loginImage} className="w-80 h-95" alt="Hopp background" />
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
