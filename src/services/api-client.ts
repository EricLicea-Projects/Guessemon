import axios, { CanceledError } from "axios";

// http://localhost:8000

export default axios.create({
  baseURL: `https://guessemon-fastapi.onrender.com`,
});

export { CanceledError };
