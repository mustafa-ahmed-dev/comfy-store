import axios from "axios";

const baseURL = import.meta.env?.VITE_API_BASE_URL;

const customAxios = axios.create({
  baseURL,
});

export default customAxios;
