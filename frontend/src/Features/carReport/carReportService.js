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

//GET car report
const getCarReports = async (token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/dashboard/dailyCarReports", config);

  return response.data;
};

// GET car report by ID
const getCarReportById = async (id, token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `/api/dashboard/dailyCarReports/${id}`,
    config
  );

  return response.data;
};

const carReportService = {
  createCarReport,
  getCarReports,
  getCarReportById,
};

export default carReportService;
