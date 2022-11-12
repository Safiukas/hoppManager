import Moment from "react-moment";
import { TbUserSearch } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCaptains } from "../../../Features/team/teamSlice";
import Spinner from "../../Spinner/Spinner";

const Captains = () => {
  const dispatch = useDispatch();

  const { captain, isLoading, isError, message } = useSelector(
    (state) => state.team
  );

  useEffect(() => {
    dispatch(getCaptains());
  }, [dispatch]);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="body">
      <section className="table-container">
        <div className="title">
          <h3>Captains</h3>
        </div>

        <table>
          <tbody>
            <tr className="table-header">
              <th>Id:</th>
              <th>First Name:</th>
              <th>Last Name:</th>
              <th>Role:</th>
              <th>Date created:</th>
            </tr>
            {captain.map((captain, index) => {
              return (
                <tr key={index} className="table-body">
                  <td key={index}>#00{index}</td>
                  <td key={index}>{captain.firstName}</td>
                  <td key={index}>{captain.lastName}</td>
                  <td key={index}>{captain.role}</td>
                  <td key={index}>
                    <Moment format="DD-MM-YYYY">{captain.createdAt}</Moment>
                  </td>
                  <td key={index}>
                    <TbUserSearch className="view-user" />
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

export default Captains;
