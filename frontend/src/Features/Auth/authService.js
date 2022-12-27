import axios from "axios";

const API_URL = "/api/auth/";

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

//Change password
const changePassword = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.patch(`/api/home/profile/${id}`, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
  changePassword,
};

export default authService;
