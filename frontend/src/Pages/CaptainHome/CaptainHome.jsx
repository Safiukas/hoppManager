// import "./CaptainHome.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeNav from "../../Components/HomeNav/HomeNav";
import {
  FaNewspaper,
  FaCar,
  FaFlag,
  FaExclamationTriangle,
  FaTruck,
} from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";

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
      <Header />
      <div className="row align-middle">
        <HomeNav title="News & Feed" icon={<FaNewspaper />} />
        <HomeNav title="Daily car report" icon={<FaCar />} />
        <HomeNav title="Shift report" icon={<FaFlag />} />
        <HomeNav title="Accident report" icon={<FaExclamationTriangle />} />
        <HomeNav title="Cargo vehicles" icon={<FaTruck />} />
        <HomeNav title="Tasks" icon={<BiTask />} />
      </div>
      <Footer />
    </div>
  );
};

export default CaptainHome;
