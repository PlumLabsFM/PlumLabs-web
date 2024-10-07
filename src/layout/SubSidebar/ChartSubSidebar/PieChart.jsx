import React from 'react';
import PieChartImg from '../../../assets/Piechart.png';

const PieChart = () => {
	return (
		// return <div style={{ height: '200px', width: '200px', background: 'red', borderRadius: "50%" }}>Pie Chart</div>;
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<img src={PieChartImg } style={{height: '300px', width: '400px'}}/>
		</div>
	);

};

export default PieChart;