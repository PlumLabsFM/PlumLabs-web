import { getChart, getCodeScript, saveCodeScript } from '../services/apiServices';
import { LOCALSTORAGE } from "./constants";

export const isloggedIn = () => {
	const user = localStorage.getItem(LOCALSTORAGE.USER);

	if (user) {
		return true;
	}

	return false;
};

export const fetchChartAndTable = async (userId, graphName, signal) => {

	let chartDataValue = null;
	let tableDataValue = null;
	let codeSnippetValue = null;
	let loadingValue = true;

	try {
		const response = await Promise.allSettled([
			getChart(userId, graphName, signal),
			getCodeScript(graphName, signal)
		]);

		response.forEach(result => {
			if (result.status === "fulfilled") {
				if (result.value.data.data) {
					chartDataValue = result.value.data.data;
					if (result.value.data.dataframe) {
						tableDataValue = result.value.data.dataframe;
					}
				} else {
					codeSnippetValue = result.value.data.code;
				}
			} else {
				console.error("Error:", result.reason);
			}
		});
	} catch (error) {
		console.error("Fetch error:", error);
	} finally {
		loadingValue = false;
	}

	return { chartDataValue, tableDataValue, codeSnippetValue, loadingValue };
};

export const saveScriptData = async(graphName, data) => {
	let response;
	try {
		response = await saveCodeScript(graphName, data);
	} catch (error) {
		console.error(error);
	}

	return response;
};