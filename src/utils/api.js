import axios from "axios";

const API_BASE_URL = "https://swapi.py4e.com/api/";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}films/`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
