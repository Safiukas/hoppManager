import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccident } from "../../../Features/accidentReport/accidentSlice";

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
      <div className="w-screen flex items-center flex-col justify-center">
        <h3 className="text-2xl mt-5 text-[#ff5783] uppercase">
          Accident report
        </h3>
        <form className="" onSubmit={onSubmit}>
          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-xl">
              Injured person name:
            </label>
            <select
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
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
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-xl">
              Explain where happened:
            </label>
            <textarea
              name="whatHappen"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-[#1ce5be]
                  bg-transparent bg-clip-padding
                  border border-solid border-[#ececec]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-[#1ce5be] focus:bg-transparent focus:border-[#1ce5be] focus:outline-none
                "
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="flex flex-col my-4 ">
            <label className="text-[#ececec] mb-2 text-xl">
              Explain what happened:
            </label>

            <textarea
              name="whereHappen"
              value={accident}
              onChange={(e) => {
                setAccident(e.target.value);
              }}
              className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-[#1ce5be]
                  bg-transparent bg-clip-padding
                  border border-solid border-[#ececec]
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-[#1ce5be] focus:bg-transparent focus:border-[#1ce5be] focus:outline-none
                "
              rows="5"
              placeholder="Your message"
            ></textarea>
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
    </>
  );
};

export default AccidentForm;
