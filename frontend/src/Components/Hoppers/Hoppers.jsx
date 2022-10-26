import "./Hopper.css";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import TeamModal from "../TeamModal/TeamModal";
import { Link } from "react-router-dom";

const Hoppers = () => {
  const [openModal, setOpenModal] = useState(false);
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
            <tr className="table-body">
              <td>156951</td>
              <td>Mark</td>
              <td>Milton</td>
              <td>Hopper</td>
              <td>2022-10-27</td>
              <td>inspect icon</td>
            </tr>
          </tbody>
        </table>
      </section>
      <TeamModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Hoppers;
