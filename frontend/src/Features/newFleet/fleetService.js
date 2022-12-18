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

//GET deilibilars
const getDeilibilars = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "/api/dashboard/allFleet/deilibilar",
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
  getDeilibilars,
};

export default fleetService;
