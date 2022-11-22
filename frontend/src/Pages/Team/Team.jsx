import Captains from "../../Components/Team/Captains/Captains";
import Hoppers from "../../Components/Team/Hoppers/Hoppers";
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
      <div className="flex items-center justify-center my-10">
        <h2 className="text-4xl uppercase font-bold text-[#ececec]">My team</h2>
      </div>
      <Hoppers />
      <Captains />
    </>
  );
};

export default Team;
