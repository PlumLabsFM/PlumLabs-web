import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BackTestNavbar from '../../components/BackTestNavbar/BackTestNavbar';
import ChartCanvas from '../../layout/SubSidebar/ChartSubSidebar/ChartCanvas';
import ChartItem from '../../layout/SubSidebar/ChartSubSidebar/ChartItem';
import { StatCharts, TradeCharts } from '../../utils/constants';
import styles from './CorrelateDashboard.module.css';
import ChatDrawer from '../../components/ChatDrawer/ChatDrawer';

export default function CorrelateDashboard({tabName}) {
	const [codeValue, setCodeValue] = useState(null);
	const [open, setOpen] = useState(false);
	const [graphNm, setGraphNm] = useState('');
    const showDrawer = () => {
        setOpen(true);
    };

	const activeTab = tabName === 'stat' ? StatCharts : TradeCharts

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.correlateDashboardDiv}>
				<div className={styles.subSidebarDiv}>
					<div className={styles.chartDiv}>
						{activeTab.map((item, index) => {
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
