import Captains from "../../Components/Captains/Captains";
import Hoppers from "../../Components/Hoppers/Hoppers";
import Footer from "../../Layouts/Footer/Footer";
import AdminHeader from "../../Layouts/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Team = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <div className="title">
        <h2>My team</h2>
      </div>
      <Hoppers />
      <Captains />
      <Footer>
        <Footer />
      </Footer>
    </>
  );
};

export default Team;
