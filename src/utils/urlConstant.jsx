export const BASE_URL = "https://0zzgwn9r-5000.inc1.devtunnels.ms";

export const AUTH_SERVICE = {
	LOGIN: `${BASE_URL}/login`,
	LOGOUT: `${BASE_URL}/logout`,
	SIGN_UP: `${BASE_URL}/create-user`
};

export const DOCUMENT = {
	UPLOAD_DOCUMENT: `${BASE_URL}/upload-portfolio`,
	GET_TABLE: `${BASE_URL}/financial-table-data`
};

export const CHART = {
	GET_CHART: `${BASE_URL}/portfolio-graph`,
	GET_SCRIPT: `${BASE_URL}/get-code`,
	SAVE_CHART: `${BASE_URL}/save-code`
};

export const API_URL = { AUTH_SERVICE, DOCUMENT, CHART };
