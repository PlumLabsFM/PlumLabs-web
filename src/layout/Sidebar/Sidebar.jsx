import React, { useState } from 'react';
import { FaRegChartBar } from "react-icons/fa";
import { PiTrolleyFill } from "react-icons/pi";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { SiJupyter } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar({dashboardName}) {
	const [activeItem, setActiveItem] = useState(0);

	const handleClick = (index) => {
		setActiveItem(index);
	};

	const menuItems = [
		...(dashboardName === 'plum' ?
		[
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
		}] : []),
		...(dashboardName === 'correlate' ?
		[{
			path: '/stat-dashboard',
			name: 'Stat',
			Icon: <SiJupyter />
		},
		{
			path: '/trade-dashboard',
			name: 'Trade',
			Icon: <SiJupyter />
		}] : []),
	];

	return (
		<div className={styles.sidebar}>
			{menuItems.map((items, index) => (
				<div
					key={index}
					className={`${styles.mainContainer} ${activeItem === index ? styles.active : ''}`}
					onClick={() => handleClick(index)}
				>
					<NavLink to={items.path} className={styles.link}>
						<div className={styles.container}>
							<div className={styles.menuIcon}>{items.Icon}</div>
							<div className={styles.label}>{items.name}</div>
						</div>
						{items.subSideBar && <div className={styles.subSideBar}>{items.subSideBar}</div>}
					</NavLink>
				</div>
			))}
		</div>
	);
}
