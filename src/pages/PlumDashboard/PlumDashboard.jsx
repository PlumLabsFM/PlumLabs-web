import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { MenuItemsForCharts } from '../../utils/constants';
import styles from './PlumDashboard.module.css';

export default function PlumDashboard() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.plumDashboardDiv}>
				<div className={styles.subSidebarDiv}>
					<div className={styles.chartDiv}>
						{MenuItemsForCharts.map((item, index) => {
							return (
								<div key={index} className={styles.charts}>
									<ChartItem type={item.type} icon={item.icon} label={item.name} className={styles.link}/>
								</div>
							);
						})}
					</div>

				</div>
				<div className={styles.dropArea}>
					<div className={styles.chartDiv}>
						<ChartCanvas />
					</div>
				</div>
			</div>
		</DndProvider>
	);
}
