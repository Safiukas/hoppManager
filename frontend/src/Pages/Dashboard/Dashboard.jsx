import ReportTable from "../../Components/ReportTable/ReportTable";
import { Footer } from "../../Layouts/Footer/Footer";
import { AdminHeader } from "../../Layouts/Header/AdminHeader";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const Dashboard = () => {
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
      <div className="main-container">
        <ReportTable />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
