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

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;
