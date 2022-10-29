import axios from "axios";

const API_URL = "/api/dashboard/team/";

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

const teamService = {
  createEmployee,
};

export default teamService;
