import "./DailyCar.css";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { createCarReport } from "../../Features/carReport/carReportSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";

const DailyCarForm = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [mileage, setMileage] = useState(0);
  const [generalCheck, setGeneralCheck] = useState([
    {
      childSeat: false,
      chargeCable: false,
      isDirty: true,
      visualDamages: true,
    },
  ]);
  const [serviceCheck, setServiceCheck] = useState([
    {
      tireCondition: false,
      windshieldWasher: false,
      outsideWash: false,
      cleanDash: false,
      insideWindows: false,
      vacuum: false,
      floorMats: false,
    },
  ]);
  const [images, setImages] = useState([]);

  // Dropzone
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
    });
  }, []);

  useEffect(() => {}, [images]);

  // End of dropzone
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createCarReport({
        licensePlate,
        mileage,
        generalCheck,
        serviceCheck,
      })
    );
  };

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
                aria-label="Injured person name"
                name="licensePlate"
                value={licensePlate}
                onChange={(e) => {
                  setLicensePlate(e.target.value);
                }}
              >
                <option>Select</option>
                <option value="Mike">GY543 // #23435</option>
                <option value="Sandra">RZ873 // #23435</option>
                <option value="Ralph">FT943 // #23435</option>
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
                value={generalCheck.childSeat}
                onChange={(e) => {
                  setGeneralCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Charging cable"
                name="generalCheck"
                value={generalCheck.chargeCable}
                onChange={(e) => {
                  setGeneralCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Car is not dirty"
                name="generalCheck"
                value={generalCheck.isDirty}
                onChange={(e) => {
                  setGeneralCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="No visual damages"
                name="generalCheck"
                value={generalCheck.visualDamages}
                onChange={(e) => {
                  setGeneralCheck(e.target.value);
                }}
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
                value={serviceCheck.tireCondition}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Filled windshield washer if needed"
                name="serviceCheck"
                value={serviceCheck.windshieldWasher}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Washed outside if needed"
                name="serviceCheck"
                value={serviceCheck.outsideWash}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Cleaned dashboard and all plastic covers"
                name="serviceCheck"
                value={serviceCheck.cleanDash}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Cleaned windows inside"
                name="serviceCheck"
                value={serviceCheck.insideWindows}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Vacuum inside"
                name="serviceCheck"
                value={serviceCheck.vacuum}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
              <Form.Check
                className="shadow-none"
                type="switch"
                id="custom-switch"
                label="Washed floor mats"
                name="serviceCheck"
                value={serviceCheck.floorMats}
                onChange={(e) => {
                  setServiceCheck(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label>Upload photos:</Form.Label>
              <Form.Control
                className="image-input"
                name="images"
                type="file"
                multiple
              />
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
    </>
  );
};

export default DailyCarForm;
