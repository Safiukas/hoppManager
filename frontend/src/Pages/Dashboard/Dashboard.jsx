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

      <h3 className="title">Charts (2)</h3>
      <h3 className="title">latest Deilibilar reports</h3>
      <h3 className="title">latest shift reports</h3>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};
