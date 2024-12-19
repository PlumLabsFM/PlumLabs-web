import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BackTestNavbar from '../../components/BackTestNavbar/BackTestNavbar';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { DepthCharts, TabNames, TradeCharts } from '../../utils/constants';
import styles from './CorrelateDashboard.module.css';
import ChatDrawer from '../../components/ChatDrawer/ChatDrawer';
import { useNavigate } from 'react-router-dom';

export default function CorrelateDashboard({tabName}) {
	const [codeValue, setCodeValue] = useState(null);
	const [open, setOpen] = useState(false);
	const [graphNm, setGraphNm] = useState('');
	const [activeTabCharts, setActiveTabCharts] = useState([]);

    const showDrawer = () => {
        setOpen(true);
    };

	useEffect(() => {
        const activeTab = TabNames.find(tab => tab.name === tabName);
        if (activeTab) {
            setActiveTabCharts(activeTab.charts);
        }
    }, [tabName]);
	

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.correlateDashboardDiv}>
				<div className={styles.subSidebarDiv}>
					<div className={styles.chartDiv}>
						{activeTabCharts.map((item, index) => {
							return (
								<div key={index} className={styles.charts}>
									<ChartItem
										type={item.type}
										icon={item.icon}
										label={item.name}
										className={styles.link}
										graphName={item.graphName}
										graphNm={graphNm}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.dropArea}>
					<BackTestNavbar codeValue={codeValue} showDrawer={showDrawer} graphNm={graphNm}/>
					<div className={styles.chartDiv}>
						<ChartCanvas setCodeValue={setCodeValue} setGraphNm={setGraphNm} dashboardName="correlate" tabName={tabName}/>
					</div>
				</div>
			</div>
			<ChatDrawer setOpen={setOpen} open={open} />
		</DndProvider>
	);
}
