import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: `https://api-recommend-v2.herokuapp.com`,
  headers: {
    "content-type": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token here
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // handle error
    throw error;
  }
);

export default axiosClient;
