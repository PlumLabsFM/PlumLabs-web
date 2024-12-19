import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { correlateMenuItems, plumMenuItems, TabNames } from '../../utils/constants';

export default function Sidebar({dashboardName}) {
	const [activeItem, setActiveItem] = useState(0);
	const location = useLocation();
	const handleClick = (index) => {
		setActiveItem(index);
	};

	useEffect(() => {
		const currentTab = location.pathname.split('/').pop();
		const itemIndex = TabNames.findIndex(tab => tab.route === currentTab);
		setActiveItem(itemIndex >= 0 ? itemIndex : 0);
	}, [location]);

	const storeItem = dashboardName === 'plum' ? plumMenuItems : correlateMenuItems;

	return (
		<div className={styles.sidebar}>
			{storeItem.map((items, index) => (
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
					</NavLink>
				</div>
			))}
		</div>
	);
}
