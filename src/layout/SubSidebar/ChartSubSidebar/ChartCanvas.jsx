import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import { getChart } from '../../../services/apiServices';
import style from './ChartCanvas.module.css';

const ChartCanvas = ({codeValue, setCodeValue}) => {

	const userData = Cookies.get('user');
	const userId = JSON.parse(userData).id;
	const [graphName, setGraphName] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const [{ isOver }, drop] = useDrop({
		accept: 'default',
		drop: (item) => {
			setGraphName(item.graphName);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver()
		})
	});

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await getChart(userId, graphName);
				setChartData(response?.data?.data);
			} catch (error) {
				console.error('Error fetching chart data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [graphName]);

	return (
		<>
			<div
				ref={drop}
				style={{
					backgroundColor: isOver ? '#e6f7ff' : 'white',
					minHeight: '20rem',
					width: '100%',
					display: 'grid',
					placeItems: 'center'
				}}
			>
				{!isLoading ? (
					chartData !== null ?
						<Plot
							data={chartData}
							layout={{
								showlegend: false,
								xaxis: {
									title: '',
									showgrid: true,
									zeroline: true,
									visible: false
								}
							}}
							config={{
								responsive: true,
								displayModeBar: false,
								showLink: false,
								showlegend: false
							}}
						/>
						: (
							<div style={{textAlign: 'center'}}>Drop a chart type to display it here.</div>
						)
				) : (
					<div className = {style.loaderContainer}>
						<Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
					</div>
				)}
			</div>
			<CodeEditor codeValue={codeValue} setCodeValue={setCodeValue} />
		</>
	);
};

export default ChartCanvas;
