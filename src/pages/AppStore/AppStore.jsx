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
		title: "Target",
		text: "Target Volatility"

	},
	{
		id: "5",
		title: "Target",
		text: "Target Volatility",
		logo: true
	},
	{
		id: "6",
		title: "Target",
		text: "Target Volatility",
		logo: true
	}];
	return (
		<div className= {styles.middleDiv} >
			<div className={styles.blockDiv}>
				{data.map((item) => (
					<Block
						key={item.id}
						title={item.title}
						text={item.text}
						width={"120px"}
						height={"114px"}
						isBubble={true}
						isLogo={item.logo}
					/>
				))}
			</div>

		</div>
	);
}
