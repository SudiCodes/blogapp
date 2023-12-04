import axios from "axios";

const BASEURL = "http://127.0.0.1:9090/";
const API_BASEURL = "http://127.0.0.1:9090/api/";
const AUTH_BASEURL = "http://127.0.0.1:9090/auth/";

export const AxiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthAxiosInstance = axios.create({
  baseURL: AUTH_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const APIAxiosInstance = axios.create({
  baseURL: API_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

AuthAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

APIAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}
