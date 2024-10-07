import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MenuItemsForCharts } from '../../../utils/constants';
import ChartItem from './ChartItem';
import styles from './ChartSubSidebar.module.css';

const ChartSubSidebar = ({isOpen, setIsOpen}) => {


	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.sidebar}>
				<div className={styles.chartDiv}>
					{isOpen && MenuItemsForCharts.map((item, index) => {
						return (
							<div key={index} className={styles.charts}>
								<ChartItem type={item.type} icon={item.icon} label={item.name} className={styles.link}/>
							</div>
						);
					})}
				</div>
			</div>
		</DndProvider>
	);
};

export default ChartSubSidebar;
