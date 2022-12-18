import axios from "axios";

//GET cargo vehicles
const getCargos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/dashboard/allFleet/cargo", config);

  return response.data;
};

const cargoService = {
  getCargos,
};

export default cargoService;
