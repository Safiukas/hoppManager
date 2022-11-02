import "./DailyCar.css";
import { createCarReport } from "../../Features/carReport/carReportSlice";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "../../Assets/Styles/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

const loadingToast = (message) =>
  toast.warn(message, {
    position: "top-left",
    autoClose: 5000,
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
  const navigate = useNavigate();

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
    }

    if (isSuccess) {
      successToast("Deilibilar report created!");
      navigate("/home");
    }
  }, [isError, isSuccess, navigate, message]);

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
    }
  };

  if (isLoading) {
    loadingToast("Loading...");
  }

  return (
    <>
      <h2 className="title">Daily Car report</h2>
      <div className="form-container">
        <Form className="form-group" onSubmit={onSubmit}>
          {/* ---1--- */}
          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">
                Car license plate & QR code:
              </Form.Label>
              <Form.Select
                className="form-select shadow-none"
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
              </Form.Select>
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Current milage:</Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="1785"
                name="mileage"
                value={mileage}
                onChange={(e) => {
                  setMileage(e.target.value);
                }}
                required
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">General checklist:</Form.Label>
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Child seat"
                name="generalCheck"
                value="Child seat"
                onChange={handleGeneralCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Charging cable"
                name="generalCheck"
                value="Charging cable"
                onChange={handleGeneralCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Car is not dirty"
                name="generalCheck"
                value="Car is not dirty"
                onChange={handleGeneralCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="No visual damages"
                name="generalCheck"
                value="No visual damages"
                onChange={handleGeneralCheck}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Service checklist:</Form.Label>
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Checked tire condition"
                name="serviceCheck"
                value="Tire condition"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Filled windshield washer if needed"
                name="serviceCheck"
                value="Fill windshield"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Washed outside if needed"
                name="serviceCheck"
                value="Wash outside"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Cleaned dashboard and all plastic covers"
                name="serviceCheck"
                value="Clean dash"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Cleaned windows inside"
                name="serviceCheck"
                value="Windows inside"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Vacuum inside"
                name="serviceCheck"
                value="Vacuum inside"
                onChange={handleServiceCheck}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Washed floor mats"
                name="serviceCheck"
                value="Floor mats"
                onChange={handleServiceCheck}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label>Upload photos:</Form.Label>
              <div className="custom-file">
                <label className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> Click to add
                </label>
                <input
                  onChange={handleImages}
                  type="file"
                  id="file-upload"
                  className="custom-file-input"
                  name="images"
                  multiple="multiple"
                />
              </div>
              {images.length > 0 && (
                <div className="upload-container">
                  {images.map((image, index) => (
                    <img
                      className="uploaded-images"
                      alt="daily-car"
                      src={image}
                      key={index}
                    />
                  ))}
                </div>
              )}
            </Form.Group>
          </div>

          {/* ---Btn Group--- */}
          <div className="btn-container">
            <Button className="btn">Cancel</Button>
            <Button className="btn" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};

export default DailyCarForm;
