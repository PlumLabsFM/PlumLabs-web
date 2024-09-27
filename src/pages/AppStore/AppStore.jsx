import React from 'react';
import Block from '../../components/Block/Block';
import styles from './AppStore.module.css';

export default function AppStore() {
	const data = [{
		id: "1",
		title: "PLUM Vision",
		text: "Back Test",
		logo: false
	},
	{
		id: "2",
		title: "Correlate",
		text: "Correction Analysis",
		logo: false
	},
	{
		id: "3",
		title: "Target",
		text: "Target Volatility"
	},
	{
		id: "4",
		title: "Auto Hedge",
		text: "All Hedger"
	},
	{
		id: "5",
		title: "FORGE",
		text: "Portfolio Optimizer",
		logo: true
	},
	{
		id: "6",
		title: "Cost Basis",
		text: "Tax Loss",
		logo: true
	}];

	return (
		<div className={styles.middleDiv}>
			<div className={styles.blockDiv}>
				{data.map((item, index) => (
					<Block
						key={item.id}
						title={item.title}
						isNew={index === 0 ? true : false}
						text={item.text}
						width={"120px"}
						height={"114px"}
						isBubble={true}
						isLogo={item.logo}
						style={index === data.length - 2 ? { backgroundColor: 'white' } : index === data.length - 1 ? { backgroundColor: 'blue' } : {}
						}
					/>
				))}
			</div>
		</div>
	);
}
