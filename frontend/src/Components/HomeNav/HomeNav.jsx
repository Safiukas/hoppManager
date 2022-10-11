import { Link } from "react-router-dom";
import "./HomeNav.css";

const HomeNav = (props) => {
  return (
    <div className="col-sm-6 col-sm-4 column">
      <div className="card gr-1">
        <div className="txt">
          <h1>{props.title}</h1>
        </div>
        <Link to={props.route}>Continue</Link>
        <div className="ico-card">
          <i>{props.icon}</i>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
