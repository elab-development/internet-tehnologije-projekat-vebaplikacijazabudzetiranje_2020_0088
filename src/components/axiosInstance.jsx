import axios from "axios";

let token = window.sessionStorage.getItem("token");

let axiosInstanca = null;

if (token && token !== "") {
  axiosInstanca = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 10000,
  });
} else {
  axiosInstanca = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 10000,
  });
}

export default axiosInstanca;
