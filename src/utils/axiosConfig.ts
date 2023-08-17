import axios, { AxiosInstance } from "axios";

const f1Api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
export default f1Api;
