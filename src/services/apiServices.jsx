import { API_URL } from "../utils/urlConstant";
import { HttpGet, HttpPost, HttpPut } from "./base";

export const loginUser = async (email, password) => {
	return await HttpPost(API_URL.AUTH_SERVICE.LOGIN, { email, password });
};

export const logoutUser = async () => {
	return await HttpPost(API_URL.AUTH_SERVICE.LOGOUT);
};

export const signinUser = async (payload) => {
	return await HttpPost(API_URL.AUTH_SERVICE.SIGN_UP, payload);
};

export const uploadDocument = async (payload) => {
	return await HttpPost(`${API_URL.DOCUMENT.UPLOAD_DOCUMENT}`, payload);
};

export const getTable = async (signal) => {
	return await HttpGet(API_URL.DOCUMENT.GET_TABLE, {}, {}, signal);
};

// export const getChart = async (chartName, dateRange, signal) => {
// 	return await HttpGet(`${API_URL.CHART.GET_CHART}?graph_name=${chartName}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`, {}, {}, signal);
// };
export const getChart = async (chartName, dateRange, signal) => {
    const { startDate, endDate } = dateRange.inputRange;
    let url = `${API_URL.CHART.GET_CHART}?graph_name=${chartName}&start_date=${startDate}&end_date=${endDate}`;

    if (dateRange.rebalanceValue && dateRange.cash) {
        url += `&rebalance_freq=${dateRange.rebalanceValue}D&start_cash=${dateRange.cash}`;
    }

    return await HttpGet(url, {}, {}, signal);
};


export const getCodeScript = async (chartName, signal) => {
	return await HttpGet(`${API_URL.CHART.GET_SCRIPT}?graph_name=${chartName}`, {}, {}, signal);
};

export const saveCodeScript = async (chartName, data) => {
	return await HttpPut(`${API_URL.CHART.SAVE_CHART}?graph_name=${chartName}`,  data );
};
export const shareReportFile = async (graphNm) => {
	return await HttpGet(`${API_URL.CHART.GET_REPORT}/share-report-file?graph_name=${graphNm}`);
};

export const getTableData = async () => {
	const response = await HttpGet(`${API_URL.DOCUMENT.GET_TABLE_DATA}`)
	return response;  
};

export const getStatCharts = async(chartName, signal) => {
	return await HttpGet(`${API_URL.CHART.GET_STAT_CHARTS}?graph_name=${chartName}`, {}, {}, signal);
};

export const getTradeCharts = async(chartName, signal) => {
	return await HttpGet(`${API_URL.CHART.GET_TRADE_CHARTS}?graph_name=${chartName}`,{} ,{}, signal);
};