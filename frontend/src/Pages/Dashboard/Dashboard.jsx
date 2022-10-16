import ReportTable from "../../Components/ReportTable/ReportTable";
import { Footer } from "../../Layouts/Footer/Footer";
import { Header } from "../../Layouts/Header/Header";
import Sidenav from "../../Layouts/Sidenav/Sidenav";
import { useEffect, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="main-container">
        <Sidenav />
        <ReportTable />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
