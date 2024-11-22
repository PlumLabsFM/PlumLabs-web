import React from 'react';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
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
	title: "Portfolio",
	text: "View Portfolio"
},
{
	id: "4",
	logo: Jupyter,
	bgColor: "#FFFFFF"

},
{
	id: "5",
	title: "Data & Analysis Libraries"

},
{
	id: "6",
	title: "Machine Learning Libraries"
},
{
	id: "7",
	title: "Data Visuallzation"
}];

export const NavbarConst = {
	DEV: "Dev",
	TOOL_KIT: "Tool Kit",
	ADMIN: "Admin",
	HELLO: "Hello Maria"

};

export const AppStoreData = [
	{
		id: "1",
		title: "PLUM Vision",
		text: "Back Test",
		logo: false,
		new: true,
		link: "/plum-vision"
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

export const ExplorerAppStoreData = [
	{
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

export const LOCALSTORAGE = {
	USER: 'user',
	FIREBASE_ID:'firebaseid'
};

const menuItemDimentions = {
	height:'30px',
	width: '50px',
}

export const MenuItemsForCharts = [
	{ name: 'Asset Allocation', icon: <FaChartLine style={{color: 'yellow', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Allocation_percentage_plot' },
	{ name: 'Asset Performance', icon: <FaRegChartBar style={{color: 'pink', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Portfolio_allocation_plot_mtm'},
	{ name: 'Drawdown', icon: <FaRegChartBar style={{color: 'red', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Drawdown_graph'},
	{ name: 'Portfolio Growth', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Portfolio_growth_plot'},
	{ name: 'Monthly Pnl Heatmap', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Monthly_pnl_heatmap'},
	{ name: 'Monthly Heatmap', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Monthly_heatmap'},
	// { name: 'Financial Table', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'financial-table-data'}
];

export const ItemsForDropdown = [
	{ value: 'USD', label: 'US Dollar' },
	{ value: 'EUR', label: 'Euro' },
	{ value: 'GBP', label: 'British Pound' }
];