import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-e7a4a/us-central1/api",
});

export default instance;
