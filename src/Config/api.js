import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.kontenbase.com/query/api/v1/08f9b47f-0428-407e-a5df-e62d552743e1",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};