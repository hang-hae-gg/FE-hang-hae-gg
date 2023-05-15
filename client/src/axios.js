import axios from "axios";
import Cookies from "js-cookie";

// TODO 추후 서버 배포후 API 주소 변경 예정
// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "http://43.201.255.143:8080";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(
  (config) => {
    // 서버에서 헤더에 token 과 refreshToken 을 가져오는 로직
    const access_token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");

    if (access_token) {
      config.headers["access_token"] = access_token.trim();
      config.headers["refresh_token"] = refresh_token.trim();
    }

    config.headers["Content-Type"] = "application/json";
    console.log("config:: ", config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export function postAPI(url, data) {
  console.log("POST Start, url : ", url, " user : ", data);
  return axios.post(API_BASE_URL + url, data);
}

export function putAPI(url, data) {
  console.log("PUT Start, url : ", url, " user : ", data);
  return axios.put(API_BASE_URL + url, data);
}

export function getAPI(url) {
  console.log("GET Start, url : ", url);
  return axios.get(API_BASE_URL + url);
}

export function deleteAPI(url) {
  console.log("DELETE Start, url : ", url);
  return axios.delete(API_BASE_URL + url);
}

export function patchAPI(url, data) {
  console.log("PATCH Start, url : ", url, " user : ", data);
  return axios.patch(API_BASE_URL + url, data);
}
