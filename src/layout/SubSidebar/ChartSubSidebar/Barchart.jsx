import React from 'react';
import BarChartImg from '../../../assets/bar-chart.png';
const BarChart = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<img src={BarChartImg} style={{height: '300px', width: '400px'}}/>
		</div>
	);
};

export default BarChart;


