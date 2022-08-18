import axios from "axios";
const api = import.meta.env.VITE_API_BASE;

export const instanceAxios = axios.create({
  baseURL: api
})