import axios from "axios";

const API_URL = "/api/home/accidentReport";

// Create new accident report
const createAccidentReport = async (accidentData, token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, accidentData, config);

  return response.data;
};

//Get accident reports
const getAccidents = async (token) => {
  //Get token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/home/allAccidents", config);

  return response.data;
};

const accidentService = {
  createAccidentReport,
  getAccidents,
};

export default accidentService;
