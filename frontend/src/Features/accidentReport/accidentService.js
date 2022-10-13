import axios from "axios";

const API_URL = "/api/home/";

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

const accidentService = {
  createAccidentReport,
};

export default accidentService;
