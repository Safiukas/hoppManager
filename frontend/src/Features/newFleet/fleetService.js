import axios from "axios";

// create deilibilar
const createNewDeilibilar = async (fleetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "/api/dashboard/fleet/createNewDeilibilar",
    fleetData,
    config
  );

  return response.data;
};

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

const fleetService = {
  createNewDeilibilar,
  createCargo,
};

export default fleetService;
