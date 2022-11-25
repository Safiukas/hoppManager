import HomeNav from "../../Components/HomeNav/HomeNav";
import {
  FaNewspaper,
  FaCar,
  FaFlag,
  FaExclamationTriangle,
  FaTruck,
} from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { useSelector } from "react-redux";

const CaptainHome = () => {
  const { user } = useSelector((state) => state.auth);

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
        {user.role === "Admin" && (
          <HomeNav title="Dashboard" route="/dashboard" icon={<BiTask />} />
        )}
      </div>
    </div>
  );
};

export default CaptainHome;
