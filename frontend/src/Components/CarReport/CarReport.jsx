import "./CarReport.css";
import { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarReport } from "../../Features/carReport/carReportSlice";
import Spinner from "../Spinner/Spinner";

const CarReport = () => {
  const dispatch = useDispatch();

  const { singleReport, isError, message, isLoading } = useSelector(
    (state) => state.carReport
  );

  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCarReport(id));
  }, [dispatch, isError, message, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="report-body">
      <section className="car-profile">
        <h5 className="car-model">Hyundai Kona</h5>
        <img
          className="car-img"
          src="https://i.gaw.to/vehicles/photos/40/24/402482-2021-hyundai-kona.jpg?1024x640"
          alt="Huyndai Kona"
        />
        <span className="report-value">{singleReport.licensePlate}</span>
        <span className="report-value">QR: {singleReport.licensePlate}</span>
      </section>
      <section className="report-details">
        <div className="tab">
          <span className="report-label">ID:</span>
          <span className="report-value">{singleReport._id}</span>
        </div>
        <div className="tab">
          <span className="report-label">Created at:</span>
          <Moment className="report-value" format="DD-MM-YYYY HH:mm">
            {singleReport?.createdAt}
          </Moment>
        </div>
        <div className="tab">
          <span className="report-label">Mileage:</span>
          <span className="report-value">{singleReport.mileage} km</span>
        </div>
        <div className="tab">
          <span className="report-label">Captain:</span>
          <span className="report-value">{singleReport.userId?.firstName}</span>
        </div>
        <div className="tab">
          <span className="report-label">General checklist:</span>
          <div className="checklist-value">
            <span className="checklist-value">
              {/* {singleReport.generalCheck[0]?.checklist} */}
            </span>
          </div>
        </div>
        <div className="tab">
          <span className="report-label">Service checklist:</span>
          <div className="checklist-value">
            <span className="report-value">
              {/* {singleReport.serviceCheck[0]?.checklist} */}
            </span>
          </div>
        </div>
        <div className="image-tab">
          {singleReport.images?.map((img, index) => {
            return (
              <div className="image-tab" key={index}>
                <img
                  className="report-imgs"
                  src={img.url}
                  alt="report photos"
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CarReport;
