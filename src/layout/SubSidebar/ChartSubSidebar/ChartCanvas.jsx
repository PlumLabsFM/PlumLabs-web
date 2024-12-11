import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Tooltip } from 'antd';
import { toast } from 'react-toastify';
import { CiViewTable } from 'react-icons/ci';
import { FaRegPlayCircle } from 'react-icons/fa';
import { GiChart } from 'react-icons/gi';
import Plot from 'react-plotly.js';

import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import Table from '../../../components/elements/Table/Table';
import { getTable } from '../../../services/apiServices';
import { LOCALSTORAGE } from '../../../utils/constants';
import { fetchChartAndTable, saveScriptData } from '../../../utils/helper';

import style from './ChartCanvas.module.css';

const ChartCanvas = ({ setCodeValue, setGraphNm }) => {
    const dateRange = JSON.parse(localStorage.getItem(LOCALSTORAGE.DATETIME));
    const userData = localStorage.getItem(LOCALSTORAGE.USER);
    const userId = userData ? JSON.parse(userData).id : null;

    const [graphName, setGraphName] = useState('');
    const [chartData, setChartData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [isTableView, setIsTableView] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [codeSnippetData, setCodeSnippetData] = useState('');
    const [errorValue, setErrorValue] = useState(true)

    const [{ isOver }, drop] = useDrop({
        accept: 'default',
        drop: (item) => setGraphName(item.graphName),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    useEffect(() => {
        if (!graphName) return;
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setChartData([]);
                setTableData([]);
                const { signal } = controller;
                const { newTable, chartDataValue, tableDataValue, codeSnippetValue, errorMessage } = await fetchChartAndTable(graphName, dateRange, signal);
                if (errorMessage) {
                    toast.error(`Error: ${errorMessage}`);
                    setErrorValue(true);
                    return;
                }
                if (graphName === 'Drawdown_graph') {
                    setTableData(newTable);
                    setGraphNm(graphName);
                    setErrorValue(false)
                } else {
                    setChartData(chartDataValue.data || []);
                    setTableData(tableDataValue || []);
                    setCodeSnippetData(codeSnippetValue || '');
                    setCodeValue(codeSnippetValue || '');
                    setGraphNm(graphName);
                    setErrorValue(false);

                }
            } catch (error) {
                setErrorValue(true);
                console.error('Data fetch error:', error);
                toast.error('Error fetching data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [graphName, setCodeValue, setGraphNm]);

    const onCodeRunHandler = async () => {
        try {
            setChartData([]);
            setTableData([]);
            setIsLoading(true);

            if (!codeSnippetData.trim()) {
                throw new Error('Code snippet is empty.');
            }

            const response = await saveScriptData(graphName, { code: codeSnippetData });

            if (response?.data?.message) {
                toast.success(response.data.message);
                const { chartDataValue, tableDataValue, errorMessage, codeSnippetValue } = await fetchChartAndTable(graphName, dateRange);
                if (errorMessage) {
                    toast.error(`Error: ${errorMessage}`);
                    setErrorValue(true);
                    return;
                }
                setChartData(chartDataValue.data || []);
                setTableData(tableDataValue || []);
                setCodeSnippetData(codeSnippetValue || '');
                setGraphNm(graphName);
                setErrorValue(false);
            } else {
                throw new Error('Unexpected response from server.');
            }
        } catch (error) {
            console.error('Code run error:', error);
            setErrorValue(true);
            toast.error(
                error.message === 'Code snippet is empty.'
                    ? 'Please provide a valid code snippet to run.'
                    : 'An error occurred while running the code. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };
    const toggleView = (view) => setIsTableView(view === 'table');
    return (
        <div>
            {/* {tableData && graphName !== ('financial-table-data' || 'Drawdown_graph') && (
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
            )} */}
            <div
                ref={drop}
                style={{
                    backgroundColor: isOver ? '#e6f7ff' : 'white',
                    width: '100%',
                }}
            >
                {!isLoading ? (
                chartData.data ? (
                        <>
                            {isTableView && !errorValue ? (
                                <div className={style.tableContainer}>
                                    <Table tableData={tableData} />
                                </div>
                            ) : (
                                <div className={style.chartContainer}>
                                    {chartData && chartData.layout ? (
                                        <Plot
                                            data={Array.isArray(chartData.data) ? chartData.data : [chartData.data]}
                                            layout={{
                                                showlegend: false,
                                                xaxis: {
                                                    title: chartData.layout.xaxis?.title || 'X-Axis', 
                                                    showgrid: true,
                                                    zeroline: true,
                                                    visible: true,
                                                },
                                                yaxis: {
                                                    title: chartData.layout.yaxis?.title || 'Y-Axis', 
                                                    showgrid: false,
                                                    zeroline: true,
                                                    visible: true,
                                                },
                                                height: 400,
                                                width: 1000,
                                            }}
                                            config={{
                                                responsive: true,
                                                displayModeBar: false,
                                            }}
                                            style={{ height: '330px' }}
                                        />
                                    ) : (
                                        <div>No chart layout data available.</div>
                                    )}
                                </div>
                            )}
                            <div className={style.playButtonContainer}>
                                <FaRegPlayCircle
                                    title="Run"
                                    className={style.playButton}
                                    onClick={onCodeRunHandler}
                                />
                            </div>
                            <CodeEditor
                                className={style.codeEditorContainer}
                                codeValue={codeSnippetData}
                                setCodeValue={setCodeValue}
                                setCodeSnippetData={setCodeSnippetData}
                            />
                        </>
                    ) : tableData.length>0 && !errorValue ? (
                        <Table tableData={tableData} />
                    ) : errorValue && (
                        <div className={style.dropChartContainer}>
                            Drop a chart type to display it here.
                        </div>
                    )
                ) : (
                    <div className={style.loaderContainer}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartCanvas;
