import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
      <h2 className="title">All fleet</h2>
      <DailyCarsTable />
      <CargoCars />
    </main>
  );
};

export default Fleet;
