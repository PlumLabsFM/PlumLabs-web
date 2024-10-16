export const BASE_URL = "https://0zzgwn9r-5000.inc1.devtunnels.ms";

export const AUTH_SERVICE = {
	LOGIN: `${BASE_URL}/login`,
	SIGN_UP: `${BASE_URL}/create-user`
};

export const DOCUMENT = {
	UPLOAD_DOCUMENT: `${BASE_URL}/upload-portfolio`,
	GET_TABLE: `${BASE_URL}/financial-table-data`
};

export const CHART = {
	GET_CHART: `${BASE_URL}/portfolio-graph`
};

export const LOGIN = AUTH_SERVICE.LOGIN;
export const SIGNUP = AUTH_SERVICE.SIGN_UP;

export const UPLOAD_DOCUMENT = DOCUMENT.UPLOAD_DOCUMENT;
export const GET_TABLE = DOCUMENT.GET_TABLE;

export const GET_CHART = CHART.GET_CHART;