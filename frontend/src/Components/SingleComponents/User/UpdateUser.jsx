import { useState } from "react";
import { changePassword } from "../../../Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

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

const successToast = (message) => {
  toast.success(message, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const UpdateUser = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const { oldPassword, newPassword, newPassword2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== newPassword2) {
      errToast("Passwords doesn't match!");
    } else {
      const userInfo = {
        oldPassword,
        newPassword,
        newPassword2,
      };

      dispatch(changePassword(userInfo, user._id));
    }
  };

  if (isError) {
    return errToast(message);
  }

  if (isSuccess) {
    return successToast("Password changed successfully !");
  }

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <section className="text-[#ececec] mt-10 flex justify-center flex-col items-center">
          <div className="flex flex-row justify-center items-center my-4">
            <label className="text-[#ececec] mx-5 text-lg">Old password:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="password"
              placeholder="Enter password"
              id="password"
              name="oldPassword"
              value={oldPassword}
              required
              onChange={onChange}
            />
          </div>
          <div className="flex flex-row justify-center items-center my-4">
            <label className="text-[#ececec] mx-5 text-lg">New password:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="password"
              placeholder="Enter password"
              id="password"
              name="newPassword"
              value={newPassword}
              required
              onChange={onChange}
            />
          </div>
          <div className="flex flex-row justify-center items-center my-4">
            <label className="text-[#ececec] mx-5 text-lg">
              Repeat password:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="password"
              placeholder="Enter password"
              id="password"
              name="newPassword2"
              value={newPassword2}
              required
              onChange={onChange}
            />
          </div>
        </section>
        <div className="flex items-center justify-center flex-col mt-10 mb-15">
          <button
            className="border-1 px-20 py-2 my-3 rounded-full border-[#1ce5be] text-[#ececec] text-xl hover:text-[#ff5783]"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
export default UpdateUser;
