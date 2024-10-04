import React from 'react';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
import Api from '../assets/api.png';
import Csv from '../assets/csv.png';
import Jupyter from '../assets/jupyter.png';

export const LOGIN_TEXT = {
	EMAIL: "Email",
	PASSWORD: "Password"
};

export const SIGNUP = {
	FIRST_NAME: "First name",
	LAST_NAME: "Last name",
	EMAIL: "Email",
	PASSWORD: "Password"
};

export const ToolkitData = [{
	id: "1",
	title: "Factors"
},
{
	id: "2",
	title: "Jobs",
	text: "Scheduled Jobs",
	logo: false
},
{
	id: "3",
	title: "Target",
	text: "Target Volatility"
},
{
	id: "4",
	logo: Jupyter,
	bgColor: "#FFFFFF"

},
{
	id: "5",
	title: "FORGE",
	text: "Portfolio Optimizer"
},
{
	id: "6",
	title: "Cost Basis",
	text: "Tax Loss"
},
{
	id: "7",
	title: "Cost Basis",
	text: "Tax Loss"
}];

export const NavbarConst = {
	DEV: "Dev",
	TOOL_KIT: "Tool Kit",
	ADMIN: "Admin",
	HELLO: "Hello Maria"

};

export const AppStoreData = [{
	id: "1",
	title: "PLUM Vision",
	text: "Back Test",
	logo: false,
	new: true
},
{
	id: "2",
	title: "Correlate",
	text: "Correction Analysis",
	logo: false
},
{
	id: "3",
	title: "Target",
	text: "Target Volatility"
},
{
	id: "4",
	title: "Auto Hedge",
	text: "All Hedger"
},
{
	id: "5",
	title: "FORGE",
	text: "Portfolio Optimizer",
	icon: true,
	bgColor: "#FFFFFF"
},
{
	id: "6",
	title: "Cost Basis",
	text: "Tax Loss",
	icon: true,
	bgColor: "#2F2DB6"
}
];

export const ExplorerAppStoreData = [{
	id: "1",
	title: "PLUM Vision",
	text: "Back Test",
	logo: false
},
{
	id: "2",
	title: "Correlate",
	text: "Correction Analysis",
	logo: false,
	bgColor: "#000000"
},
{
	id: "3",
	title: "Target",
	text: "Target Volatility",
	bgColor: "#000000"
},
{
	id: "4",
	title: "Auto Hedge",
	text: "All Hedger"
},
{
	id: "5",
	title: "FORGE",
	text: "Portfolio Optimizer",
	icon: true,
	bgColor: "#FFFF"
},
{
	id: "6",
	title: "Cost Basis",
	text: "Tax Loss",
	icon: true,
	bgColor: "#2F2DB6",
	new: true
}
];

export const PlumVisionData = [

];

export const MenuItemsForCharts = [
	{ name: 'Chart With NLP', icon: <FaChartLine />, type: 'line' },
	{ name: 'Annual Revenue', icon: <FaRegChartBar />, type: 'bar' },
	{ name: 'Downtrend', icon: <FaRegChartBar />, type: 'bar' },
	{ name: 'Portfolio Growth', icon: <FaRegChartBar />, type: 'line' },
	{ name: 'Active Returns', icon: <FaRegChartBar />, type: 'pie' },
	{ name: 'Billing Returns', icon: <FaRegChartBar />, type: 'pie' },
	{ name: 'Billing Mean', icon: <FaRegChartBar />, type: 'line' }
];
