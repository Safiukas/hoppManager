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

//GET Deilibilar by ID
const getSingleDeilibilar = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `/api/dashboard//allFleet/deilibilar/${id}`,
    config
  );

  return response.data;
};

const fleetService = {
  createNewDeilibilar,
  getDeilibilars,
  getSingleDeilibilar,
};

export default fleetService;
