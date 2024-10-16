import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import { getChart, getCodeScript, getTable } from '../../../services/apiServices';
import style from './ChartCanvas.module.css';

const ChartCanvas = ({codeValue, setCodeValue}) => {

	const userData = Cookies.get('user');
	const userId = JSON.parse(userData).id;
	const [graphName, setGraphName] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [tableData, setTableData] = useState(null);
	const [tableHead, setTableHead] = useState([]);
	const [codeSnippetValue, setCodeSnippetValue] = useState(null);

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
		const controller = new AbortController();
		const fetchData = async () => {
			setIsLoading(true);
			setChartData(null);

			const { signal } = controller;

			if (graphName === 'financial-table-data') {
				try {
					const response = await getTable(signal);
					setTableData(response?.data);
					const dataKeys = Object.keys(response?.data?.[0]);
					setTableHead(dataKeys);
				} catch (error) {
					console.error(error);
				} finally {
					if (!signal.aborted) {
						setIsLoading(false);
					}
				}
			} else {
				try {
					const response = await Promise.allSettled([
						getChart(userId, graphName, signal),
						getCodeScript(graphName, signal)
					]);

					response?.forEach(result => {
						if (result?.status === "fulfilled") {
							if (result?.value?.data?.data) {
								setChartData(result?.value?.data?.data);
							} else {
								setCodeSnippetValue(result?.value?.data?.code);
								setCodeValue(result?.value?.data?.code);
							}
						} else {
							console.error("Error:", result.reason);
						}
					});

				} catch (error) {
					console.error(error);
				} finally {
					if (!signal.aborted) {
						setIsLoading(false);
					}
				}
			}
		};

		fetchData();

		return () => {
			controller.abort();
		};

	}, [graphName]);

	return (
		<>
			<div
				ref={drop}
				style={{
					backgroundColor: isOver ? '#e6f7ff' : 'white',
					minHeight: '20rem',
					width: '100%'
				}}
			>
				{!isLoading ? (
					chartData !== null ?
						<>
							<div className = {style.chartContainer}>
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
							</div>
							<CodeEditor codeValue={codeSnippetValue} setCodeValue={setCodeValue} />
						</>
						: tableData != null ?
							<table>
								<thead>
									<tr>
										{tableHead?.map((item) => {
											return (
												<th key={item}>{item}</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{tableData?.map((item, index) => (
										<tr key={index}>
											<td>{item.Year}</td>
											<td>{item.Inflation}</td>
											<td>{item["Global ex-US Stock Market Return"]}</td>
											<td>{item["US Stock Market Return"]}</td>
											<td>{item["Total US Bond Market Return"]}</td>
											<td>{item["REIT Return"]}</td>
											<td>{item["Portfolio 1 Balance"]}</td>
											<td>{item["Portfolio 1 Return"]}</td>
											<td>{item["Portfolio 2 Balance"]}</td>
											<td>{item["Portfolio 2 Return"]}</td>
										</tr>
									))}
								</tbody>
							</table>

							: (
								<div style={{textAlign: 'center'}}>Drop a chart type to display it here.</div>
							)
				) : (
					<div className = {style.loaderContainer}>
						<Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
					</div>
				)}
			</div>
		</>
	);
};

export default ChartCanvas;
