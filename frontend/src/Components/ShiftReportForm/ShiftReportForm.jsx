import "./ShiftReportForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createShiftReport } from "../../Features/shiftReport/shiftReportSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const ShiftReportForm = () => {
  const [hopper, setHopper] = useState("");
  const [batteries, setBatteries] = useState("");
  const [hoppHikes, setHoppHikes] = useState("");
  const [fixed, setFixed] = useState("");
  const [leftMtc, setLeftMtc] = useState("");
  const [rebalance, setRebalance] = useState("");
  const [comments, setComments] = useState("");

  const [formData, setFormData] = useState([
    {
      hopper: "",
      batteries: 0,
      hoppHikes: 0,
      fixed: 0,
      leftMtc: 0,
      rebalance: 0,
      comments: "",
    },
  ]);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createShiftReport({
        hopper,
        batteries,
        hoppHikes,
        fixed,
        leftMtc,
        rebalance,
        comments,
      })
    );

    setHopper("");
    setBatteries("");
    setHoppHikes("");
    setFixed("");
    setLeftMtc("");
    setRebalance("");
    setComments("");
  };

  return (
    <>
      <h2 className="title">Shift report</h2>
      <div className="form-container">
        <Form className="form-group" onSubmit={onSubmit}>
          {/* ---1--- */}
          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Hopper:</Form.Label>
              <Form.Select
                className="form-select shadow-none"
                aria-label="Injured person name"
                name="hopper"
                value={formData.hopper}
                onChange={(e) => {
                  setHopper(e.target.value);
                }}
              >
                <option>Select employee</option>
                <option value="Mike">Mike</option>
                <option value="Sandra">Sandra</option>
                <option value="Ralph">Ralph</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Batteries changed:</Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="11"
                name="batteries"
                value={formData.batteries}
                onChange={(e) => {
                  setBatteries(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Hopp hikes:</Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="5"
                name="hoppHikes"
                value={formData.hoppHikes}
                onChange={(e) => {
                  setHoppHikes(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">
                Scooters fixed on street:
              </Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="15"
                name="fixed"
                value={formData.fixed}
                onChange={(e) => {
                  setFixed(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">
                Scooters left on street(maintenance):
              </Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="15"
                name="leftMtc"
                value={formData.leftMtc}
                onChange={(e) => {
                  setLeftMtc(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">
                Rebalanced scooters:
              </Form.Label>
              <Form.Control
                className="shadow-none"
                type="number"
                placeholder="0"
                name="rebalance"
                value={formData.rebalance}
                onChange={(e) => {
                  setRebalance(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="tab">
            <Form.Group>
              <Form.Label className="form-label">Comments:</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                placeholder="Write comment here.."
                name="comments"
                value={formData.comments}
                onChange={(e) => {
                  setComments(e.target.value);
                }}
              />
            </Form.Group>
          </div>

          {/* ---Btn Group--- */}
          <div className="btn-container">
            <Button className="btn">Cancel</Button>
            <Button className="btn" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ShiftReportForm;
