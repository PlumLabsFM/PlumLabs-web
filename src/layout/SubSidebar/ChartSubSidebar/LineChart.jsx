import React from 'react';
import LineChartImg from '../../../assets/newplot.png';
const LineChart = () => {
	return (
		//  <div style={{ height: '50px', width: '800px', background: 'green' }}>line Chart</div>;
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<img src={LineChartImg} style={{height: '300px', width: '400px'}}/>
		</div>
	);
};

export default LineChart;