import axios from "axios";

const API_URL = "/api/home/shiftReport";

// create new shift report
const createShiftReport = async (shiftReportData, token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, shiftReportData, config);

  return response.data;
};

const shiftReportService = {
  createShiftReport,
};

export default shiftReportService;
