import axios from 'axios';
import qs from 'qs';

const TIMEOUT = Number(import.meta.env.API_TIMEOUT) || 50000;

const axiosInstance = axios.create({
	timeout: TIMEOUT,
	withCredentials: true // to send cookies with every request
});

export const HttpGet = async ( url, headers = {}, queryParams = {}, signal ) => {
	const queryString = qs.stringify(queryParams);

	const source = axios.CancelToken.source();

	if (signal) {
		signal.addEventListener('abort', () => {
			source.cancel('Operation canceled by the user.');
		});
	}

	return await axiosInstance.get(`${url}${queryString || ''}`, {
		headers: { ...headers },
		cancelToken: source.token
	});
};

export const HttpPost = async (	url, body, headers = {} ) => {
	return axiosInstance.post(`${url}`, body, {
		headers: { ...headers }
	});
};

export const HttpPut = async (	url, body, headers = {} ) => {
	return axiosInstance.put(`${url}`, body, {
		headers: { ...headers }
	});
};