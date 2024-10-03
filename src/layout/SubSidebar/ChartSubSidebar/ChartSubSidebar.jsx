import React from 'react';
import { FaChartLine, FaRegChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styles from './ChartSubSidebar.module.css';

const ChartSubSidebar = () => {

	const menuItems = [
		{ name: 'Chart With NLP', icon: <FaChartLine/> },
		{ name: 'Annual Revenue', icon: <FaRegChartBar />},
		{ name: 'Downtrend', icon: <FaRegChartBar/> },
		{ name: 'Portfolio Growth', icon: <FaRegChartBar /> },
		{ name: 'Active Returns', icon: <FaRegChartBar />},
		{ name: 'Billing Returns', icon: <FaRegChartBar />},
		{ name: 'Billing Mean', icon: <FaRegChartBar />}
	];

	return (
		<div>
			<div className={styles.sidebar}>
				{menuItems.map((item, index) => (
					<NavLink to={item.path} key={index} className={styles.link}>
						{item.icon}
						<span>{item.name}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default ChartSubSidebar;
