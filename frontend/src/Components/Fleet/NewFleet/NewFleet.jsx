import { createNewDeilibilar } from "../../../Features/newFleet/fleetSlice";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
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

const NewFleet = (props) => {
  const [licensePlate, setLicensePlate] = useState("");
  const [mileage, setMileage] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [generalCheck, setGeneralCheck] = useState({
    checklist: [],
    response: [],
  });
  const [image, setImage] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage((prevState) => [...prevState, reader.result]);
      };
    });
  };

  const handleGeneralCheck = (e) => {
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

  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.fleet
  );

  useEffect(() => {
    if (isError) {
      errToast(message);
      console.log(message);
    }

    if (isSuccess) {
      successToast("New deilibilar created successfully!");
    }
  }, [isError, isSuccess, message]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (image.length === 0) {
      notify("Please upload image!");
    } else {
      const fleetData = {
        licensePlate,
        mileage,
        qrCode,
        brand,
        model,
        generalCheck,
        image,
      };

      dispatch(createNewDeilibilar(fleetData));
      successToast("New deilibilar created successfully!");
    }
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <>
      <div className="w-full flex items-center flex-col justify-center">
        <h3 className="text-2xl my-5 text-[#ff5783] uppercase">
          {props.title}
        </h3>
        <form className="" onSubmit={onSubmit}>
          {/* ---- */}
          <div className="flex items-center flex-row justify-between">
            {/* --- */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col my-4 px-5">
                <div className="my-2">
                  <label>
                    {image.length > 0 ? (
                      <div className="flex items-center justify-center">
                        {image.map((image, index) => (
                          <img
                            className="w-48 my-12 rounded-md"
                            alt="daily-car"
                            src={image}
                            key={index}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <label className="text-[#ececec] text-center mb-2 text-8xl">
                          <BiImageAdd />
                        </label>
                      </div>
                    )}
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
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-row items-center justify-center my-4 px-5">
                <label className="text-[#ececec] text-center mx-2 text-xl">
                  License plate:
                </label>
                <input
                  className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
                  type="text"
                  placeholder="GKM89"
                  name="licensePlate"
                  value={licensePlate}
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-row items-center justify-center my-4 px-5">
                <label className="text-[#ececec] text-center mx-2 text-xl">
                  Mileage:
                </label>
                <input
                  className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
                  type="number"
                  placeholder="150 km"
                  name="mileage"
                  value={mileage}
                  onChange={(e) => {
                    setMileage(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-row items-center justify-center my-4 px-5">
                <label className="text-[#ececec] mx-2 text-xl">QR code:</label>
                <input
                  className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
                  type="text"
                  placeholder="#33855"
                  name="qrCode"
                  value={qrCode}
                  onChange={(e) => {
                    setQrCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">Make:</label>
            <select
              className="bg-transparent border-1 active:bg-transparent focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              name="brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              <option>Select</option>
              <option value="KIA">KIA</option>
              <option value="HYUNDAI">HYUNDAI</option>
              <option value="RENAULT">RENAULT</option>
              <option value="OPEL">OPEL</option>
            </select>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">Model:</label>
            <select
              className="bg-transparent border-1 focus:outline-none focus:border-[#1ce5be] py-2 px-2 rounded-md text-[#1ce5be] text-lg"
              name="model"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            >
              <option>Select</option>
              <option value="niro">KIA // NIRO</option>
              <option value="kona">HYUNDAI // KONA</option>
              <option value="zoe">RENAULT // ZOE</option>
              <option value="corsa">OPEL // CORSA</option>
            </select>
          </div>

          <div className="flex flex-col my-4 px-5">
            <label className="text-[#ececec] mb-2 text-xl">Comes with:</label>

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
                  Charging cable under trunk
                </label>
              </div>
            </div>
          </div>

          {/* ---Btn Group--- */}
          <div className="flex items-center justify-between flex-row mt-10 px-5">
            <button className="border-1 px-20 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-xl hover:text-[#ff5783]">
              Cancel
            </button>
            <button
              className="border-1 px-20 py-2 my-3 rounded-full border-[#1ce5be] text-[#ececec] text-xl hover:text-[#ff5783]"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewFleet;
