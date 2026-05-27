import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export { CanceledError };
