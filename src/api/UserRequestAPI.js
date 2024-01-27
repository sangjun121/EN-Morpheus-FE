import axios from "axios";

const UserRequestApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    accept: "application/json;charset=UTF-8",
    "Content-Type": "application/json;",
  },
});

UserRequestApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!token) return config; //로그인 api

  config.headers["Authorization"] = `Bearer ${token}`; //로그인 제외 api
  return config;
});

export default UserRequestApi;

//content-type
