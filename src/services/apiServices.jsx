import { API_URL } from "../utils/urlConstant";
import { HttpGet, HttpPost } from "./base";

export const loginUser = async (email, password) => {
	return await HttpPost(API_URL.AUTH_SERVICE.LOGIN, {email, password});
};

export const logoutUser = async () => {
	return await HttpPost(API_URL.AUTH_SERVICE.LOGOUT);
};

export const signinUser = async (payload) => {
	return await HttpPost(API_URL.AUTH_SERVICE.SIGN_UP, payload);
};

export const uploadDocument = async (id, payload) => {
	return await HttpPost(`${API_URL.DOCUMENT.UPLOAD_DOCUMENT}/${id}`, payload );
};

export const getTable = async (signal) => {
	return await HttpGet(API_URL.DOCUMENT.GET_TABLE, {}, {}, signal);
};

export const getChart = async (userId, chartName,dateRange, signal) => {
	return await HttpGet(`${API_URL.CHART.GET_CHART}/${userId}?graph_name=${chartName}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`, {}, {}, signal);
};

export const getCodeScript = async (chartName, signal) => {
	return await HttpGet(`${API_URL.CHART.GET_SCRIPT}?graph_name=${chartName}`, {}, {}, signal);
};

export const saveCodeScript = async (chartName, data) => {
	return await HttpPost(`${API_URL.CHART.SAVE_CHART}?graph_name=${chartName}`, {data});
};