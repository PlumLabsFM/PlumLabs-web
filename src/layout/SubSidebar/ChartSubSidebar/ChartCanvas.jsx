import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import { getChart } from '../../../services/apiServices';

const ChartCanvas = () => {
	const [droppedChartType, setDroppedChartType] = useState('');
	const [graphName, setGraphName] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [layoutData, setLayoutData] = useState(null);

	const [{ isOver }, drop] = useDrop({
		accept: 'default',
		drop: (item) => {
			setDroppedChartType(item.type);
			console.info(item, "item");
			setGraphName(item.graphName);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver()
		})
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getChart(droppedChartType, graphName);
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
					width: '100%'
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
