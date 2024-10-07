import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import styles from './Chart.module.css';

export default function Chart() {
	const [showChart, setShowChart] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://0zzgwn9r-5000.inc1.devtunnels.ms/portfolio/7', {
					responseType: 'blob'
				});
				const imageUrl = URL.createObjectURL(response.data);
				setShowChart(imageUrl);
			} catch (error) {
				console.error('Error fetching chart data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.chartDiv}>
				<ChartCanvas />
			</div>
		</DndProvider>
	);
}
