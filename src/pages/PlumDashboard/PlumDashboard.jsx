import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BackTestNavbar from '../../components/BackTestNavbar/BackTestNavbar';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { MenuItemsForCharts } from '../../utils/constants';
import styles from './PlumDashboard.module.css';

export default function PlumDashboard() {
	const [codeValue, setCodeValue] = useState(null);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.plumDashboardDiv}>
				<div className={styles.subSidebarDiv}>
					<div className={styles.chartDiv}>
						{MenuItemsForCharts.map((item, index) => {
							return (
								<div key={index} className={styles.charts}>
									<ChartItem
										type={item.type}
										icon={item.icon}
										label={item.name}
										className={styles.link}
										graphName={item.graphName}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.dropArea}>
					<BackTestNavbar codeValue={codeValue} />
					<div className={styles.chartDiv}>
						<ChartCanvas codeValue={codeValue} setCodeValue={setCodeValue} />
					</div>
				</div>
			</div>
		</DndProvider>
	);
}
