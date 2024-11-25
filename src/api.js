import axios from "axios";

//todo:통신 코드들 전부 훅으로 변경하기
export const client = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": true,
    "Content-Type": "application/json",
  },
});
export const client2 = axios.create({
  baseURL: null,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// fetchData 함수 수정
const fetchData = async (url, method = "GET") => {
  try {
    const response = await client({ url, method });
    console.log(response);
    return response;
  } catch (error) {
    console.log("Network Error");
    console.error(error);
    throw error;
  }
};

export default fetchData;
