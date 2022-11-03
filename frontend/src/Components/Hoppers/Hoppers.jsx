import "./Hopper.css";
import Moment from "react-moment";
import { TbUserSearch } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getHoppers } from "../../Features/team/teamSlice";

const Hoppers = () => {
  const dispatch = useDispatch();

  const { employee, isLoading, isError, message } = useSelector(
    (state) => state.team
  );

  useEffect(() => {
    dispatch(getHoppers());
  }, [dispatch]);

  return (
    <div className="body">
      <section className="table-container">
        <div className="title">
          <h3>Hoppers</h3>
        </div>
        <div className="btn-container">
          <Link to="/dashboard/team/createEmployee">
            <Button className="create-btn shadow-none">New Employee</Button>
          </Link>
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
            {employee.map((employee, index) => {
              return (
                <tr key={index} className="table-body">
                  <td key={index}>#00{index}</td>
                  <td key={index}>{employee.firstName}</td>
                  <td key={index}>{employee.lastName}</td>
                  <td key={index}>{employee.role}</td>
                  <td key={index}>
                    <Moment format="DD-MM-YYYY">{employee.createdAt}</Moment>
                  </td>
                  <td key={index}>
                    <TbUserSearch className="view-icon" />
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

export default Hoppers;
