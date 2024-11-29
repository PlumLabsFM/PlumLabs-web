import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";

const TIMEOUT = Number(import.meta.env.API_TIMEOUT) || 50000;

const axiosInstance = axios.create({
  timeout: TIMEOUT,
  withCredentials: true, // To send cookies with every request
});


axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        if (
          data.msg === 'Missing cookie "access_token_cookie"' ||
          data.msg === '"Token has expired"'
        ) {
			localStorage.removeItem("user");
			localStorage.removeItem("firebase_id");
			window.location.href = "/login"; 
			toast.error("Session expired. Please log in again.");
        }
      }
      if (status === 403) {
		  localStorage.removeItem("user");
		  localStorage.removeItem("firebase_id");
		  window.location.href = "/login"; 
		  toast.error("You do not have permission to perform this action.");
      }

      if (status >= 500) {
        toast.error("Server error. Please try again later.");
      }
    } else if (error.message === "Network Error") {
      toast.error("Network error. Please check your internet connection.");
    } else if (error.message.includes("timeout")) {
      toast.error("Request timed out. Please try again.");
    }
    return Promise.reject(error);
  }
);

export const HttpGet = async (url, headers = {}, queryParams = {}, signal) => {
  const queryString = qs.stringify(queryParams, { addQueryPrefix: true }); 
  const source = axios.CancelToken.source();
  if (signal) {
    signal.addEventListener("abort", () => {
      source.cancel("Operation canceled by the user.");
    });
  }

  return axiosInstance.get(`${url}${queryString}`, {
    headers: { ...headers },
    cancelToken: source.token,
  });
};

export const HttpPost = async (url, body, headers = {}) => {
  return axiosInstance.post(url, body, {
    headers: { ...headers },
  });
};

export const HttpPut = async (url, body, headers = {}) => {
  return axiosInstance.put(url, body, {
    headers: { ...headers },
  });
};