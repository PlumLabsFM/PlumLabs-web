import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import BarChart from '../ChartSubSidebar/Barchart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const ChartCanvas = () => {
	const [droppedChartType, setDroppedChartType] = useState(null);

	const [{ isOver }, drop] = useDrop({
		accept: 'default',
		drop: (item) => setDroppedChartType(item.type),
		collect: (monitor) => ({
			isOver: monitor.isOver()
		})
	});

	const renderChart = () => {
		switch (droppedChartType) {
		case 'bar':
			return <BarChart />;
		case 'line':
			return <LineChart />;
		case 'pie':
			return <PieChart />;
		default:
			return null;
		}
	};

	return (
		<div
			ref={drop}
			style={{
				backgroundColor: isOver ? '#e6f7ff' : 'white',
				padding: '20px',
				minHeight: '250px'
			}}
		>
			{droppedChartType ? renderChart() : (
				<div>Drop a chart type to display it here.</div>
			)}
		</div>
	);
};

export default ChartCanvas;
