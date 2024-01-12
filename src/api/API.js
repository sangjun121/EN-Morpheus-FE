import axios from "axios";

const API = axios.create({
  baseURL: "",
  headers: {},
  withCredentials: true,
});

export default API;

//content-type
