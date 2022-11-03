import "../Hoppers/Hoppers";
import "./CarReportTable.css";
import Moment from "react-moment";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarReports } from "../../Features/carReport/carReportSlice";
import { HiDocumentSearch } from "react-icons/hi";

//UI imports

const CarReportTable = (props) => {
  const dispatch = useDispatch();

  const { carReports, isLoading, isError, message } = useSelector(
    (state) => state.carReport
  );

  useEffect(() => {
    dispatch(getCarReports());
  }, [dispatch]);

  console.log(carReports);

  return (
    <div className="body">
      <section className="table-container">
        <div className="title">
          <h3>Deilibilar reports</h3>
        </div>

        <table>
          <tbody>
            <tr className="table-header">
              <th>Id:</th>
              <th>License plate / QR code:</th>
              <th>Make and model:</th>
              <th>Created by:</th>
              <th>Date created:</th>
            </tr>
            {carReports.map((report, index) => {
              return (
                <tr key={index} className="table-body">
                  <td key={index}>#00{index}</td>
                  <td key={index}>{report.licensePlate}</td>
                  <td key={index}>make and model</td>
                  <td key={index}>{report?.userId?.firstName}</td>
                  <td key={index}>
                    <Moment format="DD-MM-YYYY">{report.createdAt}</Moment>
                  </td>
                  <td key={index}>
                    <HiDocumentSearch className="view-icon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CarReportTable;
