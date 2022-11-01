import Captains from "../../Components/Captains/Captains";
import Hoppers from "../../Components/Hoppers/Hoppers";
import Footer from "../../Layouts/Footer/Footer";
import AdminHeader from "../../Layouts/Header/AdminHeader";

const Team = () => {
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
