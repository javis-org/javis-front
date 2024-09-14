import axios from "axios";

export const client = axios.create({
  baseURL        : import.meta.env.VITE_BASEURL,
  withCredentials: false,
  headers        : {
    "ngrok-skip-browser-warning": true,
  },
});
export const client2 = axios.create({
  baseURL        : null,
  withCredentials: false,
  headers        : {
    "ngrok-skip-browser-warning": true,
  },
});

// fetchData 함수 수정
const fetchData = async (url, method = "GET") => {
  try {
    const response = await client({url, method});
    console.log(response);
    return response;
  } catch (error) {
    console.log("Network Error");
    console.error(error);
    throw error;
  }
};

export default fetchData;
