import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "../../CarReportTable/CarReportTable.css";

const DailyCarsTable = () => {
  return (
    <div className="body">
      <section className="table-container">
        <div className="title">
          <h3>Deilibilars</h3>
        </div>

        <table>
          <tbody>
            <tr className="table-header">
              <th>Id:</th>
              <th>License plate:</th>
              <th>QR code:</th>
              <th>Make and model:</th>
              <th>Created by:</th>
              <th>Date created:</th>
            </tr>
            {/* {carReports.map((report, index) => {
              return (
                <tr key={index} className="table-body">
                  <td>#00{index}</td>
                  <td>{report.licensePlate}</td>
                  <td>make and model</td>
                  <td>{report?.userId?.firstName}</td>
                  <td>
                    <Moment format="DD-MM-YYYY">{report.createdAt}</Moment>
                  </td>
                  <td>
                    <Link
                      className="info-btn"
                      to={`/dashboard/dailyCarReports/${report._id}`}
                    >
                      <HiDocumentSearch className="view-icon" />
                    </Link>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
        <div className="btn-container">
          <Link to="/dashboard/dailyCars">
            <Button className="create-btn shadow-none">View all</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DailyCarsTable;
