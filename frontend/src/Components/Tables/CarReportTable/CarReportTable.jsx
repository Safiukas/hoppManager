import Moment from "react-moment";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarReports } from "../../../Features/carReport/carReportSlice";
import { HiDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

//UI imports

const CarReportTable = (props) => {
  const dispatch = useDispatch();

  const { carReports, isLoading } = useSelector((state) => state.carReport);

  useEffect(() => {
    dispatch(getCarReports());
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="body">
      <section className="flex items-center flex-col justify-center text-[#ececec]">
        <div className="text-2xl my-3 text-[#ff5783] uppercase">
          <h3>Deilibilar reports</h3>
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
                Date created:
              </th>
            </tr>
            {carReports.map((report, index) => {
              return (
                <tr key={index} className="border-b border-[#1ce5be]">
                  <td className="pr-3 py-3 text-center">#00{index}</td>
                  <td className="pr-3 py-3 text-center">
                    {report.licensePlate}
                  </td>
                  <td className="pr-3 py-3 text-center">make and model</td>
                  <td className="pr-3 py-3 text-center">
                    {report?.userId?.firstName}
                  </td>
                  <td className="pr-3 py-3 text-center">
                    <Moment format="DD-MM-YYYY">{report.createdAt}</Moment>
                  </td>
                  <td className="pr-3 py-3 text-center">
                    <Link
                      className="text-[#ececec] hover:text-[#1ce5be]"
                      to={`/dashboard/dailyCarReports/${report._id}`}
                    >
                      <HiDocumentSearch className="view-icon" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end mt-5">
          <button className="border-1 px-20 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-lg hover:text-[#ff5783]">
            View all
          </button>
        </div>
      </section>
    </div>
  );
};

export default CarReportTable;
