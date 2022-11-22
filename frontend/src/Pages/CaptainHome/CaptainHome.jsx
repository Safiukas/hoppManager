import "./CaptainHome.css";
// import { Link } from "react-router-dom";
import HomeNav from "../../Components/HomeNav/HomeNav";
import {
  FaNewspaper,
  FaCar,
  FaFlag,
  FaExclamationTriangle,
  FaTruck,
} from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CaptainHome = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container h-100" id="menu-container">
      <div className="row align-middle">
        <HomeNav title="News & Feed" icon={<FaNewspaper />} />
        <HomeNav
          route="/home/carReport"
          title="Daily car report"
          icon={<FaCar />}
        />
        <HomeNav
          title="Shift report"
          route="/home/shiftReport"
          icon={<FaFlag />}
        />
        <HomeNav
          route="/home/accidentReport"
          title="Accident report"
          icon={<FaExclamationTriangle />}
        />
        <HomeNav title="Cargo vehicles" icon={<FaTruck />} />
        <HomeNav title="Tasks" icon={<BiTask />} />
        <HomeNav title="Dashboard" route="/dashboard" icon={<BiTask />} />
      </div>
    </div>
  );
};

export default CaptainHome;
