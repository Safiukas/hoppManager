import "./Switch.css";

const Switch = ({ onChange }) => {
  return (
    <label className="wrapper">
      <input className="input" type="checkbox" onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
