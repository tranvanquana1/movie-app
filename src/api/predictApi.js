import axiosClient from "./axiosClient";

const PredictApi = {
  getAll: (params) => {
    const url = "/api/predict";
    return axiosClient.get(url, { params });
  },
};

export default PredictApi;
