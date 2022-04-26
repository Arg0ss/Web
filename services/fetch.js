import axios from "axios";

const Fetch = {
  origin: process.env.API_URL,
  header: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
  get: (url) => {
    return axios
      .get(url)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => Promise.reject(error));
  },
  post: (url, data) => {
    return axios
      .post(url, data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => Promise.reject(error));
  },
  put: (url, data) => {
    return axios.put(url, data).then((response) => {
      return Promise.resolve(response);
    });
  },
  delete: (url, data) => {
    return axios.delete(url, data).then((response) => {
      return Promise.resolve(response);
    });
  },
};

axios.defaults.headers.common = Fetch.header;
axios.defaults.baseURL = Fetch.origin;
export default Fetch;
