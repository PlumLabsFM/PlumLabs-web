import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import { getChart } from '../../../services/apiServices';

const ChartCanvas = () => {
	const [droppedChartType, setDroppedChartType] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [layoutData, setLayoutData] = useState(null);

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getChart(droppedChartType);
				setChartData(response?.data?.data);
				setLayoutData(response?.data?.layout);
			} catch (error) {
				console.error('Error fetching chart data:', error);
			}
		};
		if(droppedChartType !== null) {
			fetchData();
		}
	}, [droppedChartType]);
	
	return (
		<div>
			<div
				ref={drop}
				style={{
					backgroundColor: isOver ? '#e6f7ff' : 'white',
					padding: '20px',
					minHeight: '170px',
					width: '79%'
				}}
			>
				{chartData !== null ?
					<Plot
						data={chartData}
						layout={layoutData}
						config={{ responsive: true }}
					/>
					: (
						<div style={{textAlign: 'center'}}>Drop a chart type to display it here.</div>
					)
				}
			</div>
			<div className={StyleSheet.codeEditor}>
				<CodeEditor />
			</div>
		</div>
	);
};

export default ChartCanvas;
