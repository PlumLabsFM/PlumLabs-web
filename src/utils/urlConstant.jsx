// export const BASE_URL = "https://0zzgwn9r-5000.inc1.devtunnels.ms";
export const BASE_URL = "https://plumlabs-backend-jdj2.onrender.com";

export const AUTH_SERVICE = {
	LOGIN: `${BASE_URL}/api/auth/login`,
	LOGOUT: `${BASE_URL}/api/auth/logout`,
	SIGN_UP: `${BASE_URL}/api/auth/create-user`
};

export const DOCUMENT = {
	UPLOAD_DOCUMENT: `${BASE_URL}/api/portfolio/upload-portfolio`,
	GET_TABLE: `${BASE_URL}/api/portfolio/financial-table-data`
};

export const CHART = {
	GET_CHART: `${BASE_URL}/api/portfolio/graph-dashbord`,
	GET_SCRIPT: `${BASE_URL}/api/editor/get-code`,
	SAVE_CHART: `${BASE_URL}/api/editor/save-code`
};

export const API_URL = { AUTH_SERVICE, DOCUMENT, CHART };
