import { useState } from "react";
import { useDispatch } from "react-redux";
import { createShiftReport } from "../../../Features/shiftReport/shiftReportSlice";

const ShiftReportForm = () => {
  const [hopper, setHopper] = useState("");
  const [batteries, setBatteries] = useState("");
  const [hoppHikes, setHoppHikes] = useState("");
  const [fixed, setFixed] = useState("");
  const [leftMtc, setLeftMtc] = useState("");
  const [rebalance, setRebalance] = useState("");
  const [comments, setComments] = useState("");

  const [formData, setFormData] = useState([
    {
      hopper: "",
      batteries: 0,
      hoppHikes: 0,
      fixed: 0,
      leftMtc: 0,
      rebalance: 0,
      comments: "",
    },
  ]);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createShiftReport({
        hopper,
        batteries,
        hoppHikes,
        fixed,
        leftMtc,
        rebalance,
        comments,
      })
    );

    setHopper("");
    setBatteries("");
    setHoppHikes("");
    setFixed("");
    setLeftMtc("");
    setRebalance("");
    setComments("");
  };

  return (
    <>
      <div className="w-screen mt-3 flex items-center flex-col justify-center">
        <h3 className="text-2xl text-[#ff5783] uppercase">shift report</h3>
        <form className="" onSubmit={onSubmit}>
          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">Hopper:</label>
            <select
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              name="hopper"
              value={formData.hopper}
              onChange={(e) => {
                setHopper(e.target.value);
              }}
            >
              <option>Select employee</option>
              <option value="Mike">Mike</option>
              <option value="Sandra">Sandra</option>
              <option value="Ralph">Ralph</option>
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[#ececec] mb-2 text-lg">
              Batteries changed:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="11"
              name="batteries"
              value={formData.batteries}
              onChange={(e) => {
                setBatteries(e.target.value);
              }}
            />
          </div>

          <div className=" flex flex-col my-3">
            <label className="text-[#ececec] mb-2 text-lg">Hopper hikes:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="5"
              name="hoppHikes"
              value={formData.hoppHikes}
              onChange={(e) => {
                setHoppHikes(e.target.value);
              }}
            />
          </div>

          <div className=" flex flex-col my-3">
            <label className="text-[#ececec] mb-2 text-lg">
              Scooters fixed on street:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="15"
              name="fixed"
              value={formData.fixed}
              onChange={(e) => {
                setFixed(e.target.value);
              }}
            />
          </div>

          <div className=" flex flex-col my-3">
            <label className="text-[#ececec] mb-2 text-lg">
              Scooters left on street(maintenance):
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="15"
              name="leftMtc"
              value={formData.leftMtc}
              onChange={(e) => {
                setLeftMtc(e.target.value);
              }}
            />
          </div>

          <div className=" flex flex-col my-3">
            <label className="text-[#ececec] mb-2 text-lg">
              Rebalanced scooters:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="0"
              name="rebalance"
              value={formData.rebalance}
              onChange={(e) => {
                setRebalance(e.target.value);
              }}
            />
          </div>

          <div className=" flex flex-col my-3">
            <label className="text-[#ececec] mb-2 text-lg">Comments:</label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="text"
              placeholder="Write comment here.."
              name="comments"
              value={formData.comments}
              onChange={(e) => {
                setComments(e.target.value);
              }}
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
    </>
  );
};

export default ShiftReportForm;
