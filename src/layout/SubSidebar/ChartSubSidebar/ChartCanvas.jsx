import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Tooltip } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { CiViewTable } from "react-icons/ci";
import { GiChart } from "react-icons/gi";
import Plot from "react-plotly.js";
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import Table from '../../../components/elements/Table/Table';
import { getChart, getCodeScript, getTable } from '../../../services/apiServices';
import style from './ChartCanvas.module.css';

const ChartCanvas = ({ codeValue, setCodeValue }) => {
	const userData = Cookies.get('user');
	const userId = JSON.parse(userData).id;
	const [graphName, setGraphName] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [tableData, setTableData] = useState(null);
	const [isTableView, setIsTableView] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
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
				} catch (error) {
					console.error(error);
				} finally {
					if (!signal.aborted) {
						setIsLoading(false);
					}
				}
			} else {
				try {
					setTableData(null);
					const response = await Promise.allSettled([
						getChart(userId, graphName, signal),
						getCodeScript(graphName, signal)
					]);

					response?.forEach((result) => {
						if (result?.status === 'fulfilled') {
							if (result?.value?.data?.data) {
								setChartData(result?.value?.data?.data);
								if (result?.value?.data?.dataframe) {
									setTableData(result?.value?.data?.dataframe);
								}
							} else {
								setCodeSnippetValue(result?.value?.data?.code);
								setCodeValue(result?.value?.data?.code);
							}
						} else {
							console.error('Error:', result.reason);
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

	const toggleView = (view) => {
		setIsTableView(view === 'table');
	};

	return (
		<>
			{tableData && graphName !== 'financial-table-data' && (
				<div className={style.toggleBtn}>
					<Tooltip placement="bottom" title="Chart">
						<GiChart
							size={24}
							className={!isTableView ? style.activeIcon : style.icon}
							onClick={() => toggleView('chart')}
						/>
					</Tooltip>
					<Tooltip placement="bottom" title="Table">
						<CiViewTable
							size={24}
							className={isTableView ? style.activeIcon : style.icon}
							onClick={() => toggleView('table')}
						/>
					</Tooltip>
				</div>
			)}
			<div
				ref={drop}
				style={{
					backgroundColor: isOver ? '#e6f7ff' : 'white',
					minHeight: '20rem',
					width: '100%'
				}}
			>
				{!isLoading ? (
					chartData !== null ? (
						<>
							{isTableView && tableData ? (
								<div className={style.tableContainer}>
									<Table tableData={tableData} />
								</div>
							) : (
								<div className={style.chartContainer}>
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
							)}
							<CodeEditor codeValue={codeSnippetValue} setCodeValue={setCodeValue} />
						</>
					) : tableData != null ? (
						<Table tableData={tableData} />
					) : (
						<div style={{ textAlign: 'center' }}>Drop a chart type to display it here.</div>
					)
				) : (
					<div className={style.loaderContainer}>
						<Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
					</div>
				)}
			</div>
		</>
	);
};

export default ChartCanvas;
