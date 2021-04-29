import axiosClient from "./axiosClient";

const UserApi = {
  login: (params) => {
    const url = "/api/login";
    return axiosClient.post(url, params);
  },

  update_rating: (params) => {
    const url = "/api/user";
    return axiosClient.post(url, params);
  },

  register: (params) => {
    const url = "/api/register";
    return axiosClient.post(url, params);
  },
};

export default UserApi;
