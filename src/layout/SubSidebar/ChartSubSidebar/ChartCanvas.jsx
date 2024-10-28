import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Tooltip } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { CiViewTable } from "react-icons/ci";
import { FaRegPlayCircle } from 'react-icons/fa';
import { GiChart } from "react-icons/gi";
import Plot from "react-plotly.js";
import { toast } from 'react-toastify';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import Table from '../../../components/elements/Table/Table';
import { getTable } from '../../../services/apiServices';
import { LOCALSTORAGE } from '../../../utils/constants';
import { fetchChartAndTable, saveScriptData } from '../../../utils/helper';
import style from './ChartCanvas.module.css';
import { MyContext } from '../../../utils/ContextProvider';

const ChartCanvas = ({ setCodeValue }) => {
	const {dateRange, setDateRange} = useContext(MyContext)
	const userData = localStorage.getItem(LOCALSTORAGE.USER);
	const userId = JSON.parse(userData).id;
	const [graphName, setGraphName] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [tableData, setTableData] = useState(null);
	const [isTableView, setIsTableView] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [codeSnippetData, setCodeSnippetData] = useState(null);

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
				const { chartDataValue, tableDataValue, codeSnippetValue, loadingValue } = await fetchChartAndTable(graphName, dateRange, signal);
				setChartData(chartDataValue);
				setTableData(tableDataValue);
				setCodeSnippetData(codeSnippetValue);
				setCodeValue(codeSnippetValue);
				setIsLoading(loadingValue);
			}

			setIsLoading(false);
		};

		if (graphName) fetchData();

		return () => {
			controller.abort();
		};
	}, [graphName]);

	const toggleView = (view) => {
		setIsTableView(view === 'table');
	};

	const onCodeRunHandler = async() => {
		setChartData(null);
		setTableData(null);
		setIsLoading(true);
		const payload = {
			code: JSON.stringify(codeSnippetData)
		};
		const response = await saveScriptData(graphName, payload);
		if (response?.data?.message) {

			const controller = new AbortController();
			const { signal } = controller;
			toast.success(response?.data?.message);
			const { chartDataValue, tableDataValue, codeSnippetValue, loadingValue } = await fetchChartAndTable(graphName, dateRange, signal);
			setChartData(chartDataValue);
			setTableData(tableDataValue);
			setCodeSnippetData(codeSnippetValue);
			setIsLoading(loadingValue);
		} else {
			toast.error('Something went wrong. Please try again');
		}
		setIsLoading(false);
	};

	return (
		<>
			{tableData && graphName !== 'financial-table-data' && (
				<div className={style.toggleBtn}>
					<Tooltip placement="bottom" title="Chart View">
						<GiChart
							size={24}
							className={!isTableView ? style.activeIcon : style.icon}
							onClick={() => toggleView('chart')}
						/>
					</Tooltip>
					<Tooltip placement="bottom" title="Table View">
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
					width: '100%'
				}}
			>
				{!isLoading ? (
					chartData ? (
						<>
							{isTableView && tableData ? (
								<div className={style.tableContainer}>
									<Table tableData={tableData} />
								</div>
							) : (
								<div className={style.chartContainer}>
									<Plot
										data={Array.isArray(chartData) ? chartData : [chartData]}
										layout={{
											showlegend: false,
											xaxis: {
												title: '',
												showgrid: true,
												zeroline: true,
												visible: false
											},
											height: "300px"
										}}
										config={{
											responsive: true,
											displayModeBar: false,
											showLink: false,
											showlegend: false
										}}
										style={{ height: '330px' }}
									/>
								</div>
							)}
							<div className={style.playButtonContainer}>
								<FaRegPlayCircle
									title='Run'
									className={style.playButton}
									onClick={onCodeRunHandler}
								/>
							</div>
							<CodeEditor codeValue={codeSnippetData} setCodeValue={setCodeValue} setCodeSnippetData={setCodeSnippetData} />
						</>
					) : tableData ? (
						<Table tableData={tableData} />
					) : (
						<div className={style.dropChartContainer}>Drop a chart type to display it here.</div>
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
