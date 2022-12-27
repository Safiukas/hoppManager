import axios from "axios";

// create cargo
const createCargo = async (cargoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "/api/dashboard/fleet/createNewCargo",
    cargoData,
    config
  );

  return response.data;
};

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

//GET Cargo by ID
const getSingleCargo = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `/api/dashboard/allFleet/cargo/${id}`,
    config
  );

  return response.data;
};

const cargoService = {
  createCargo,
  getCargos,
  getSingleCargo,
};

export default cargoService;
