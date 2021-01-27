import axios from "axios";
export const request = (url, method, data) => {
  const config = {};
  const token = localStorage.getItem("t");

  if (token) {
    config.headers = {
      Authorization: "Bearer " + localStorage.getItem("t"),
    };
    // => config = {
    //  headers: Authorization: "Bearer " + localStorage.getItem("t"),
    //}
  }

  return axios({
    url,
    method,
    data,
    ...config,
  });
};
