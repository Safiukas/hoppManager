import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../Layouts/Header/AdminHeader";
import Footer from "../../Layouts/Footer/Footer";
import DailyCarsTable from "../../Components/Fleet/DailyCars/DailyCarsTable";
import CargoCars from "../../Components/Fleet/CargoCars/CargoCars";

const Fleet = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <main>
      <header>
        <AdminHeader />
      </header>
      <h2 className="title">All fleet</h2>
      <DailyCarsTable />
      <CargoCars />
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Fleet;
