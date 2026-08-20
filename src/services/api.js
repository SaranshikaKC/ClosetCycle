import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getItems = () => api.get("/");

export const getItem = (id) => api.get(`/${id}`);

export const createItem = (item) => api.post("/", item);

export const updateItem = (id, item) => api.put(`/${id}`, item);

export const deleteItem = (id) => api.delete(`/${id}`);

export default api;