import axios from "axios";
import LocalStorage from "./local-storage";

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000/api/auth",
});

api.interceptors.request.use(
  async (config) => {
    const token = await LocalStorage.get("token");

    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.Accept = "multipart/form-data";
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
