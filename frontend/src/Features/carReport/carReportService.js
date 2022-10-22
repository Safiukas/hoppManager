import axios from "axios";

const API_URL = "/api/home/carReport/create";

// create new shift report
const createCarReport = async (carReportData, token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, carReportData, config);

  return response.data;
};

const carReportService = {
  createCarReport,
};

export default carReportService;
