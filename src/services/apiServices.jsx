import { GET_CHART, GET_SCRIPT, GET_TABLE, LOGIN, SIGNUP, UPLOAD_DOCUMENT } from "../utils/urlConstant";
import { HttpGet, HttpPost } from "./base";

export const loginUser = async (email, password) => {
	return await HttpPost(LOGIN, {email, password});
};

export const signinUser = async (payload) => {
	return await HttpPost(SIGNUP, payload);
};

export const uploadDocument = async (id, payload) => {
	return await HttpPost(`${UPLOAD_DOCUMENT}/${id}`, payload );
};

export const getTable = async (signal) => {
	return await HttpGet(`${GET_TABLE}`, {}, {}, signal);
};

export const getChart = async (userId, chartName, signal) => {
	return await HttpGet(`${GET_CHART}/${7}?graph_name=${chartName}`, {}, {}, signal);
};

export const getCodeScript = async (chartName, signal) => {
	return await HttpGet(`${GET_SCRIPT}?graph_name=${chartName}`, {}, {}, signal);
};