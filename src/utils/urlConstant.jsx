// export const BASE_URL = "https://0zzgwn9r-5000.inc1.devtunnels.ms";
export const BASE_URL = "https://plumlabs-backend-ep0q.onrender.com";

export const AUTH_SERVICE = {
	LOGIN: `${BASE_URL}/api/auth/login`,
	LOGOUT: `${BASE_URL}/api/auth/logout`,
	SIGN_UP: `${BASE_URL}/api/auth/create-user`
};
	
export const DOCUMENT = {
	UPLOAD_DOCUMENT: `${BASE_URL}/api/portfolio/upload-portfolio`,
	GET_TABLE: `${BASE_URL}/api/portfolio/financial-table-data`,
	GET_TABLE_DATA: `${BASE_URL}/api/portfolio/get-upload-portfolio`
};

export const CHART = {
	// GET_CHART: `${BASE_URL}/api/portfolio/graph-dashbord`,
	// GET_SCRIPT: `${BASE_URL}/api/editor/get-code`,
	GET_CHART: `${BASE_URL}/api/portfolio/graph-dataframe`,
	GET_SCRIPT: `${BASE_URL}/api/editor/get-code-backtest`,
	SAVE_CHART: `${BASE_URL}/api/editor/save-code`,
	GET_REPORT: `${BASE_URL}/api/editor`,
};

export const API_URL = { AUTH_SERVICE, DOCUMENT, CHART };
