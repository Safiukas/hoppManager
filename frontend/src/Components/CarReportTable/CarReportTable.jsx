import "./CarReportTable.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarReports } from "../../Features/carReport/carReportSlice";

//UI imports
import Button from "react-bootstrap/Button";

const CarReportTable = (props) => {
  const dispatch = useDispatch();

  const { carReports, isLoading, isError, message } = useSelector(
    (state) => state.carReport
  );

  useEffect(() => {
    dispatch(getCarReports());
  }, [dispatch, getCarReports]);

  console.log(carReports);

  return (
    <>
      <section className="table-container">
        <div className="title">
          <h3>Deilibilar reports</h3>
        </div>
        <table>
          <tr className="table-header">
            <th>Id:</th>
            <th>Captain:</th>
            <th>Mileage:</th>
            <th>License plate // QR code:</th>
            <th>Date created:</th>
          </tr>
          {carReports.map((report, index) => {
            return (
              <tr className="table-body">
                <td key={index}>#{index}</td>
                {report.userId.map((user, i) => (
                  <td key={i}>{user.firstName}</td>
                ))}
              </tr>
            );
          })}

          {/* TEST */}
          {/* {carReports.map((report, index) => {
            return (
              <tr className="table-body">
                <td key={index}>#{index}</td>
                {report.userId.map((user, i) => (
                  <td key={i}>{user.firstName}</td>
                ))}
              </tr>
            );
          })} */}

          {/* End TEST */}

          <tr className="table-body">
            <td>156951</td>
            <td>Mark</td>
            <td>12654 km</td>
            <td>LHT16 // #54664</td>
            <td>2022-10-27</td>
            <td>inspect icon</td>
          </tr>
          <tr className="table-body">
            <td>156951</td>
            <td>Mark</td>
            <td>12654 km</td>
            <td>LHT16 // #54664</td>
            <td>2022-10-27</td>
            <td>inspect icon</td>
          </tr>
        </table>
        <div className="view-container">
          <Button className="view-btn shadow-none">View All</Button>
        </div>
      </section>
    </>
  );
};

export default CarReportTable;
