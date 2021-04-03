import axiosClient from "./axiosClient";

const PredictApi = {
  getAll: (params) => {
    const url = "/api/predict";
    return axiosClient.get(url, {
      params,
      baseURL: "https://api-recommend-v2.herokuapp.com",
    });
  },
};

export default PredictApi;
