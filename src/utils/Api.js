import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTRkZGIxMTk0ZjhjMWM0YmI2N2Y2ZWNlMDZiMGE2YyIsInN1YiI6IjYzN2M4M2NjYmNmOGM5MDBhMzMyYTdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-SaZM47AZHhGqiPSuxcoYbdeeeJX0BlcgIATsdTWYU";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
