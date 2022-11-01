import axios from "axios";

const API_URL = "/api/dashboard/team/";

// Create employee
const createEmployee = async (employeeData, token) => {
  //GET token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "createEmployee",
    employeeData,
    config
  );

  return response.data;
};

//GET Hoppers
const getHoppers = async (token) => {
  //GET token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "hoppers", config);

  return response.data;
};

//GET Hoppers
const getCaptains = async (token) => {
  //GET token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "captains", config);

  return response.data;
};

const teamService = {
  getCaptains,
  getHoppers,
  createEmployee,
};

export default teamService;
