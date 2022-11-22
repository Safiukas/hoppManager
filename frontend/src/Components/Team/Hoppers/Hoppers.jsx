import Moment from "react-moment";
import { TbUserSearch } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getHoppers } from "../../../Features/team/teamSlice";
import Spinner from "../../Spinner/Spinner";

const Hoppers = () => {
  const dispatch = useDispatch();

  const { employee, isLoading, isError, message } = useSelector(
    (state) => state.team
  );

  useEffect(() => {
    dispatch(getHoppers());
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="">
      <section className="flex items-center flex-col justify-center text-[#ececec]">
        {/* <div className="flex justify-end mt-5">
          <button className="border-1 px-10 py-2 mx-20 rounded-full border-[#1ce5be] text-[#ececec] text-md hover:text-[#ff5783]">
            <Link to="create" className="text-[#ececec] hover:text-[#1ce5be]">
              + New employee
            </Link>
          </button>
        </div> */}

        <div className="text-2xl my-3 text-[#ff5783] uppercase">
          <h3>Hoppers</h3>
        </div>

        <table>
          <tbody>
            <tr className="text-center">
              <th className="text-[#1ce5be] pr-3 text-center pb-2">Id:</th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                First Name:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Last Name:
              </th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">Role:</th>
              <th className="text-[#1ce5be] pr-3 text-center pb-2">
                Date created:
              </th>
            </tr>
            {employee.map((employee, index) => {
              return (
                <tr key={index} className="border-b border-[#1ce5be]">
                  <td className="pr-3 py-3 text-center">#00{index}</td>
                  <td className="pr-3 py-3 text-center">
                    {employee.firstName}
                  </td>
                  <td className="pr-3 py-3 text-center">{employee.lastName}</td>
                  <td className="pr-3 py-3 text-center">{employee.role}</td>
                  <td className="pr-3 py-3 text-center">
                    <Moment format="DD-MM-YYYY">{employee.createdAt}</Moment>
                  </td>
                  <td>
                    <Link className="text-[#ececec] hover:text-[#1ce5be]">
                      <TbUserSearch className="text-xl" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end mt-5">
          <button className="border-1 px-10 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-md hover:text-[#ff5783]">
            View all
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hoppers;
