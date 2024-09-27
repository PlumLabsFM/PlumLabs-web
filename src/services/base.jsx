import axios from 'axios';
import Cookies from 'js-cookie';
import qs from 'qs';

const TIMEOUT = Number(import.meta.env.API_TIMEOUT) || 50000;

const axiosInstance = axios.create({
	timeout: TIMEOUT,
	withCredentials: true // to send cookies with every request
});

axiosInstance.interceptors.request.use((config) => {
	const token = Cookies.get('access_token_cookie');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}, (error) => {
	return Promise.reject(error);
});

export const HttpGet = async ( url, headers = {}, queryParams = {} ) => {
	const queryString = qs.stringify(queryParams);

	return await axiosInstance.get(`${url}${queryString || ''}`, {
		headers: { ...headers }
	});
};

export const HttpPost = async (	url, body, headers = {} ) => {
	return axiosInstance.post(`${url}`, body, {
		headers: { ...headers }
	});
};