import { createCarReport } from "../../../Features/carReport/carReportSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Spinner from "../../Spinner/Spinner";

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

const DailyCarForm = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [mileage, setMileage] = useState(0);

  //Check/unCheck logic
  const [generalCheck, setGeneralCheck] = useState({
    checklist: [],
    response: [],
  });

  const [serviceCheck, setServiceCheck] = useState({
    checklist: [],
    response: [],
  });

  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
    });
  };

  //TODO: handle checkbox
  const handleGeneralCheck = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { checklist } = generalCheck;

    // Case 1 : The user checks the box
    if (checked) {
      setGeneralCheck({
        checklist: [...checklist, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setGeneralCheck({
        checklist: checklist.filter((e) => e !== value),
      });
    }
  };

  const handleServiceCheck = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { checklist } = serviceCheck;

    // Case 1 : The user checks the box
    if (checked) {
      setServiceCheck({
        checklist: [...checklist, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setServiceCheck({
        checklist: checklist.filter((e) => e !== value),
      });
    }
  };

  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.carReport
  );

  useEffect(() => {
    if (isError) {
      errToast(message);
      console.log(message);
    }

    if (isSuccess) {
      successToast("Deilibilar report created!");
    }
  }, [isError, isSuccess, message]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) {
      notify("Please upload images!");
    } else {
      const carReportData = {
        licensePlate,
        mileage,
        generalCheck,
        serviceCheck,
        images,
      };

      dispatch(createCarReport(carReportData));
      successToast("Report created!");
    }
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <div className="w-screen flex items-center flex-col justify-center">
        <h3 className="text-2xl mt-5 text-[#ff5783] uppercase">
          Deilibilar report
        </h3>
        <form className="" onSubmit={onSubmit}>
          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">
              Car license plate & QR code:
            </label>
            <select
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              name="licensePlate"
              value={licensePlate}
              onChange={(e) => {
                setLicensePlate(e.target.value);
              }}
              required
            >
              <option>Select</option>
              <option value="GY543 // #23435">GY543 // #23435</option>
              <option value="RZ873 // #23435">RZ873 // #23435</option>
              <option value="FT943 // #23435">FT943 // #23435</option>
            </select>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">
              Current milage:
            </label>
            <input
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              type="number"
              placeholder="1785"
              name="mileage"
              value={mileage}
              onChange={(e) => {
                setMileage(e.target.value);
              }}
              required
            />
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">
              General checklist:
            </label>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="generalCheck"
                  value="Child seat"
                  onChange={handleGeneralCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Child Seat
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="generalCheck"
                  value="Charging cable"
                  onChange={handleGeneralCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Charging cable
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="generalCheck"
                  value="Car is not dirty"
                  onChange={handleGeneralCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Car is not dirty
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="generalCheck"
                  value="No visual damages"
                  onChange={handleGeneralCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  No visual damages
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">
              Service checklist:
            </label>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Tire condition"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Checked tire condition
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Fill windshield"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Filled windshield fluid (if needed)
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Wash outside"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Washed outside (if needed)
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Clean dash"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Cleaned dashboard and all plastic covers
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Windows inside"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Cleaned windows inside
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Vacuum inside"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Vacuum inside
                </label>
              </div>
            </div>

            <div className="flex my-1">
              <div className="form-check form-switch">
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#ececec] bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  id="custom-switch"
                  name="serviceCheck"
                  value="Floor mats"
                  onChange={handleServiceCheck}
                />
                <label className="form-check-label inline-block text-[#1ce5be] mb-2 text-lg">
                  Washed floor mats
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">
              Upload photos:
            </label>

            <div className="my-2">
              <label>
                <input
                  onChange={handleImages}
                  type="file"
                  id="file-upload"
                  className="text-sm text-[#ececec]
                  file:mr-5 file:py-2 file:px-6
                  file:rounded-full file:border-1
                  file:border-[#1ce5be]
                  file:text-sm file:font-medium
                  file:bg-transparent file:text-[#1ce5be]
                  hover:file:cursor-pointer"
                  name="images"
                  multiple="multiple"
                />
              </label>
            </div>
            {images.length > 0 && (
              <div className="flex flex-wrap">
                {images.map((image, index) => (
                  <img
                    className="w-20 mx-1 pt-3"
                    alt="daily-car"
                    src={image}
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ---Btn Group--- */}
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

export default DailyCarForm;
