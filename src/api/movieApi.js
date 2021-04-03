import axiosClient from "./axiosClient";

const MovieApi = {
  getAll: (params) => {
    const url = "/movie/list";
    return axiosClient.get(url, { params });
  },
};

export default MovieApi;
