import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
// import BarChart from '../ChartSubSidebar/Barchart';
// import LineChart from './LineChart';
// import PieChart from './PieChart';

const ChartCanvas = ({data, layout}) => {
	const [droppedChartType, setDroppedChartType] = useState(null);

	const [{ isOver }, drop] = useDrop({
		accept: 'default',
		drop: (item) => {
			setDroppedChartType(item.type);
			console.info(item, "item");
		},
		collect: (monitor) => ({
			isOver: monitor.isOver()
		})
	});

	// const renderChart = () => {
	// 	switch (droppedChartType) {
	// 	case 'bar':
	// 		return <BarChart />;
	// 	case 'line':
	// 		return <LineChart />;
	// 	case 'pie':
	// 		return <PieChart />;
	// 	default:
	// 		return null;
	// 	}
	// };

	return (
		<div>
			<div
				ref={drop}
				style={{
					backgroundColor: isOver ? '#e6f7ff' : 'white',
					padding: '20px',
					minHeight: '250px',
					width: '79%'
				}}
			>
				{data !== null ?
					<Plot
						data={data}
						layout={layout}
						config={{ responsive: true }}
					/>
					: (
						<div>Drop a chart type to display it here.</div>
					)
				}
			</div>
			<div>
				<CodeEditor />
			</div>
		</div>
	);
};

export default ChartCanvas;
