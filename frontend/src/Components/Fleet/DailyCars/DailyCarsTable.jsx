import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeilibilars } from "../../../Features/newFleet/fleetSlice";
import { HiDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const DailyCarsTable = () => {
  const dispatch = useDispatch();

  const { allDeilibilars, isLoading } = useSelector((state) => state.fleet);

  useEffect(() => {
    dispatch(getDeilibilars());
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="mt-10">
      <section className="flex items-center flex-col justify-center text-[#ececec]">
        <div className="text-2xl my-3 text-[#ff5783] uppercase">
          <h3>Deilibilars</h3>
        </div>

        <table>
          <tbody>
            <tr className="text-center">
              <th className="text-[#1ce5be] pr-3 text-center pb-2">Id:</th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                License plate:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">QR code:</th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Make & model:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Current mileage:
              </th>
            </tr>
            {allDeilibilars.slice(-5).map((car, index) => {
              return (
                <tr key={index} className="border-b border-[#1ce5be]">
                  <td className="pr-3 py-3 text-center">
                    #{car._id.slice(-5)}
                  </td>
                  <td className="pr-3 py-3 text-center">{car.licensePlate}</td>
                  <td className="pr-3 py-3 text-center">{car.qrCode}</td>
                  <td className="pr-3 py-3 text-center">
                    {car?.brand} {car?.model}
                  </td>
                  <td className="pr-3 py-3 text-center">{car.mileage} km</td>
                  <td className="pr-3 py-3 text-center">
                    <Link
                      className="text-[#ececec] hover:text-[#1ce5be]"
                      to={`/dashboard/allFleet/deilibilar/${car._id}`}
                    >
                      <HiDocumentSearch className="text-xl" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between mt-5 w-80">
          <Link to="/dashboard/allFleet/deilibilar/createNew">
            <button className="border-1 px-10 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-md hover:text-[#ff5783]">
              + New
            </button>
          </Link>
          <Link to="/dashboard/deilibilar">
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
