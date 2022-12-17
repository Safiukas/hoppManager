import { Link } from "react-router-dom";

const DailyCarsTable = () => {
  return (
    <div className="mt-10">
      <section className="flex items-center flex-col justify-center text-[#ececec]">
        <div className="text-2xl my-3 text-[#ff5783] uppercase">
          <h3>Cargo vehicles</h3>
        </div>

        <table>
          <tbody>
            <tr className="text-center">
              <th className="text-[#1ce5be] pr-3 text-center pb-2">Id:</th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                License plate / QR code:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Make & model:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Created by:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Current mileage:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Last report:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Date created:
              </th>
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
        <div className="flex justify-between mt-5 w-80">
          <Link to="/dashboard/cargoVehicles/createNew">
            <button className="border-1 px-10 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-md hover:text-[#ff5783]">
              + New
            </button>
          </Link>
          <Link to="/dashboard/cargoVehicles">
            <button className="border-1 px-10 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-md hover:text-[#ff5783]">
              View all
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DailyCarsTable;
