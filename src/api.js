import axios from "axios";

export const client = axios.create({
  baseURL: "http://158.180.74.116:8080",
  withCredentials: false,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});
export const client2 = axios.create({
  baseURL: "http://ec2-13-125-209-249.ap-northeast-2.compute.amazonaws.com/",
  withCredentials: false,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
});

// fetchData 함수 수정
const fetchData = async (url, method = "GET") => {
  try {
    const response = await client({ url, method });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Network Error");
    console.error(error);
    throw error;
  }
};

export default fetchData;
