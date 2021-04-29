import axiosClient from "./axiosClient";

const MovieApi = {
  getAll: (params) => {
    const url = "/api/list-movies";
    return axiosClient.get(url, { params });
  },
};

export default MovieApi;
