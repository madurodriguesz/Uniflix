import axios from "axios";

const http = axios.create({
  baseURL: "https://api-uniflix.vercel.app/api",
});

export default http;
