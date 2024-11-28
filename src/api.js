import axios from "axios";

//개발용
// const baseUrl = "http://localhost:3000"
//배포용
const baseUrl = import.meta.env.DEV 
  ? "http://localhost:3000"
  : "https://takaoracle2.duckdns.org";
export const client = axios.create({
  baseURL:  baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});