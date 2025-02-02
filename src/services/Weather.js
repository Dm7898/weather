import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const handleError = (error) => {
  if (error.response?.status === 404) return "City not found. Check City Name.";
  if (error.request) return "Network error. Check your internet connection.";
  return "Something went wrong. Please try again.";
};

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: { q: city, units: "metric", appid: API_KEY },
    });
    return response.data;
  } catch (err) {
    throw new Error(handleError(err));
  }
};

export const fetchForeCast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}forecast`, {
      params: { q: city, units: "metric", appid: API_KEY },
    });
    return response.data;
  } catch (err) {
    throw new Error(handleError(err));
  }
};
