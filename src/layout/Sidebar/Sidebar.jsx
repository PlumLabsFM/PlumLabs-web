import React, { useState } from 'react';
import { FaRegChartBar } from "react-icons/fa";
import { PiTrolleyFill } from "react-icons/pi";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { SiJupyter } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import ChartSubSidebar from '../SubSidebar/ChartSubSidebar/ChartSubSidebar';
import styles from './Sidebar.module.css';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{
			path: '/app-store',
			name: 'App Store',
			Icon: <PiTrolleyFill />
		},
		{
			path: '/layout',
			name: 'Layout',
			Icon: <RiLayoutMasonryLine />
		},
		{
			path: '/chart',
			name: 'Chart',
			Icon: <FaRegChartBar />,
			subSideBar: <ChartSubSidebar></ChartSubSidebar>
		},
		{
			path: '/note-book',
			name: 'Notebook',
			Icon: <SiJupyter />
		}
	];


	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>

			<div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
				{menuItems.map((items, index) => (
					<NavLink to={items.path} key={index} className={styles.link} onClick={handleToggle}>
						<div className={styles.menuIcon}>{items.Icon}</div>
						{/* <div className={styles.label}>{items.name}</div> */}
						{isOpen && <div className={styles.subSideBar}>{items.subSideBar}</div>}
					</NavLink>
				))}
			</div>
		</div>
	);
}