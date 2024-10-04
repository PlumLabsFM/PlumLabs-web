import axios from 'axios';
import qs from 'qs';

const TIMEOUT = Number(import.meta.env.API_TIMEOUT) || 50000;

const axiosInstance = axios.create({
	timeout: TIMEOUT,
	withCredentials: true // to send cookies with every request
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