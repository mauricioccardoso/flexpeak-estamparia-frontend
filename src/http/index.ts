import { store } from "@/store";
import type { AxiosInstance } from "axios";
import axios from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.token}`;
  return config;
});

export default httpClient;
