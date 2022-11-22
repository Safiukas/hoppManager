import { useState } from "react";
import { createEmployee, reset } from "../../../Features/team/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../Spinner/Spinner";

const notify = (message) => toast(message);

const EmployeeComponent = () => {
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
    }

    if (isSuccess) {
      //Fire success modal
      // navigate("/dashboard/team");
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
      console.log("Passwords don't match!");
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
    <Spinner />;
  }

  return (
    <>
      <div className="w-screen mt-3 flex items-center flex-col justify-center">
        <h3 className="text-2xl text-[#ff5783] uppercase">New employee</h3>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">First name:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="text"
              placeholder="First name"
              id="firstName"
              name="firstName"
              autoComplete="off"
              value={firstName}
              required
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Middle name:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="text"
              placeholder="Middle name"
              id="middleName"
              name="middleName"
              value={middleName}
              autoComplete="off"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Last name:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="text"
              placeholder="Last name"
              id="lastName"
              name="lastName"
              value={lastName}
              autoComplete="off"
              required
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Phone number:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="tel"
              placeholder="7775983"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              autoComplete="off"
              required
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">
              Email address:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="email"
              placeholder="john.johnsson@gmail.com"
              id="email"
              name="email"
              value={email}
              autoComplete="off"
              required
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Role:</label>
            <select
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              aria-label="Role"
              name="role"
              value={role}
              required
              onChange={onChange}
            >
              <option>Select role</option>
              <option value="Captain">Captain</option>
              <option value="Hopper">Hopper</option>
            </select>
          </div>

          {/* TODO: Add functionality to view password  */}
          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Password</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
              required
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">
              Repeat password
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="password"
              placeholder="Repeat password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              required
              onChange={onChange}
            />
          </div>
          <div className="flex items-center justify-center flex-col mt-10 mb-15">
            <button className="border-1 px-20 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-xl hover:text-[#ff5783]">
              Cancel
            </button>
            <button
              className="border-1 px-20 py-2 my-3 rounded-full border-[#1ce5be] text-[#ececec] text-xl hover:text-[#ff5783]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default EmployeeComponent;
