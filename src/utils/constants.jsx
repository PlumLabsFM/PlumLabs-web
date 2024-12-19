import React from 'react';
import { FaChartLine, FaRegChartBar } from 'react-icons/fa';
import { PiTrolleyFill } from "react-icons/pi";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { SiJupyter } from "react-icons/si";
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
		title: "Market Maker",
		text: "Market Analysis",
		logo: false,
		link: '/correlate',
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

export const options = [
	{
		label: "Fixed Allocation",
		value: "allocation"
	},
	{
		label: "Fixed Position",
		value: "position"
	}
];

export const rebalanceOptions = [
	{
		label: "15",
		value: "15"
	},
	{
		label: "30",
		value: "30"
	}
];

export const LOCALSTORAGE = {
	USER: 'user',
	FIREBASE_ID:'firebaseid',
	DATETIME:{},
	ACCESS_TOKEN: 'access_token'
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
	{ name: 'Monthly Heatmap', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Monthly_heatmap'}
];

export const TradeCharts = [
	{ name: 'Trade Volume[BTC]', icon: <FaChartLine style={{color: 'yellow', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Trade_Volume[BTC]'},
	{ name: 'Trade Capture', icon: <FaRegChartBar style={{color: 'pink', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Trade_Capture'},
	{ name: 'Bid Ask(bps)', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Bid_Ask_(bps)'},
];

export const PnlCharts = [
	{ name: 'Cumulative[Usd]', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Cumulative_[Usd]'},
	{ name: 'Cumulativ[BTC]', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Cumulativ_[BTC]'},
	{ name: 'net[USD]', icon: <FaRegChartBar style={{color: 'red', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'net[USD]'},
]

export const DepthCharts = [
	{ name: 'Ask Depth[BTC]', icon: <FaChartLine style={{color: 'yellow', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Ask_Depth[BTC]' },
	{ name: 'Bid Depth[BTC]', icon: <FaChartLine style={{color: 'yellow', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Bid_Depth[BTC]' },
	{ name: 'Ask Depth[USD]', icon: <FaRegChartBar style={{color: 'pink', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Ask_Depth[USD]'},
	{ name: 'Bid Depth[USD]', icon: <FaRegChartBar style={{color: 'pink', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Bid_Depth[USD]'},
];

export const SlippageCharts = [
	{ name: 'Fixed Qty[BTC]', icon: <FaRegChartBar style={{color: 'red', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Fixed_Qty_[BTC]'},
	{ name: 'Fixed Qty[USD]', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Fixed_Qty_[USD]'},
	{ name: 'Slippage Depth', icon: <FaRegChartBar style={{color: 'violet', width: menuItemDimentions.width, height: menuItemDimentions.height}}/>, graphName: 'Slippage_Depth'},
]

export const AssetValues = [
	{label: "Bitcoin", value: "bitcoin"},
	{label: "Ethereum", value: "ethereum"},
	{label: "USD-Coin", value: "usd-coin"},
	{label: "Litecoin", value: "litecoin"},
	{label: "Binancecoin", value: "binancecoin"},
	{label: "Cardano", value: "cardano"},
];

export const ItemsForDropdown = [
	{ value: 'USD', label: 'US Dollar' },
	{ value: 'EUR', label: 'Euro' },
	{ value: 'GBP', label: 'British Pound' }
];

export const TabNames = [
	{
		name: "trade",
		route: "trade-dashboard",
		charts: TradeCharts
	},
	{
		name: "pnl",
		route: "pnl-dashboard",
		charts: PnlCharts,
	},
	{
		name: "depth",
		route: "depth-dashboard",
		charts: DepthCharts,
	},
	{
		name: "slippage",
		route: "slippage-dashboard",
		charts: SlippageCharts,
	}
];

export const correlateMenuItems = [{
		path: '/trade-dashboard',
		name: 'Trade',
		Icon: <SiJupyter />
	},
	{
		path: '/pnl-dashboard',
		name: 'Pnl',
		Icon: <SiJupyter />
	},
	{
		path: '/depth-dashboard',
		name: 'Depth',
		Icon: <SiJupyter />
	},
	{
		path: '/slippage-dashboard',
		name: 'Slippage',
		Icon: <SiJupyter />
	}
];

export const plumMenuItems = [
	{
		path: '/plum-dashboard',
		name: 'Chart',
		Icon: <FaRegChartBar />,
		subSideBar: ''
	},
	{
		path: '/demo',
		name: 'App Store',
		Icon: <PiTrolleyFill />
	},
	{
		path: '/demo',
		name: 'Layout',
		Icon: <RiLayoutMasonryLine />
	},
	{
		path: '/demo',
		name: 'Notebook',
		Icon: <SiJupyter />
	}
];