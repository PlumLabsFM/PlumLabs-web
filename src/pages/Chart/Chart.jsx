import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Chart.module.css';

export default function Chart() {
	const [showChart, setShowChart] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://0zzgwn9r-5000.inc1.devtunnels.ms/portfolio/1', {
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
		<div className={styles.chartDiv}>

			<img src={showChart} alt="Chart" />
		</div>
	);
}
