import React, { useState, useEffect } from 'react';
// import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import { getChart } from '../../services/apiServices';
import styles from './Chart.module.css';

export default function Chart() {
	const [chartData, setChartData] = useState(null);
	const [layoutData, setLayoutData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getChart(9);
				setChartData(response?.data?.data);
				setLayoutData(response?.data?.layout);
			} catch (error) {
				console.error('Error fetching chart data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.chartDiv}>
				<ChartCanvas data={chartData} layout={layoutData} />
			</div>
		</DndProvider>
	);
}
