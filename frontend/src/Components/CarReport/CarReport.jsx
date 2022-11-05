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
    <>
      <h3 className="title">report info</h3>
      <section className="info-container">
        <div className="report-tab">
          <div>
            <span className="info-label">ID:</span>
          </div>
          <div>
            <span className="info-value">{id}</span>
          </div>
        </div>
        <div className="report-tab">
          <div>
            <span className="info-label">Date created:</span>
          </div>
          <div>
            <Moment className="info-value" format="DD-MM-YYYY HH:mm">
              {singleReport.createdAt}
            </Moment>
          </div>
        </div>
        <div className="report-tab">
          <div>
            <span className="info-label">License plate // QR code:</span>
          </div>
          <div>
            <span className="info-value">{singleReport.licensePlate}</span>
          </div>
        </div>
        <div className="report-tab">
          <span className="info-label">Mileage:</span>
          <span className="info-value">{singleReport.mileage} km</span>
        </div>
        <div className="checklist">
          <span className="info-label">General checklist:</span>
          <div className="checklist-values">
            <p className="info-value">
              {singleReport.generalCheck[0].checklist}
            </p>
          </div>
        </div>
        <div className="checklist">
          <span className="info-label">Service checklist:</span>
          <div className="checklist-values">
            <span className="info-value">
              {singleReport.serviceCheck[0].checklist}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarReport;
