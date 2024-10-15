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

export const COOKIES = {
	USER: 'user'
};

export const MenuItemsForCharts = [
	{ name: 'Asset allocation', icon: <FaChartLine style={{color: 'yellow', width: '50px', height: '30px'}}/>, graphName: 'portfolio_distribution' },
	{ name: 'Annual Returns', icon: <FaRegChartBar style={{color: 'pink', width: '50px', height: '30px'}}/>, graphName: 'asset_performance'},
	{ name: 'Drawdown', icon: <FaRegChartBar style={{color: 'red', width: '50px', height: '30px'}}/>, graphName: 'portfolio_drawdown'},
	{ name: 'Portfolio Growth', icon: <FaRegChartBar style={{color: 'violet', width: '50px', height: '30px'}}/>, graphName: 'portfolio_growth'}
];

export const ItemsForDropdown = [
	{
		key: '1',
		label: (
			<a target="_self" rel="noopener noreferrer" href="">
				BTC
			</a>
		)
	},
	{
		key: '2',
		label: (
			<a target="_self" rel="noopener noreferrer" href="">
				USDC
			</a>
		)
	},
	{
		key: '3',
		label: (
			<a target="_self" rel="" href="">
				AAPL
			</a>
		)
	}
];