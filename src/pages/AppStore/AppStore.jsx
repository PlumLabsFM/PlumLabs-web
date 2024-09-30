import React from 'react';
import Block from '../../components/Block/Block';
import { AppStoreData } from '../../utils/constants';
import styles from './AppStore.module.css';

export default function AppStore() {
	return (
		<div className={styles.middleDiv}>
			<div className={styles.blockDiv}>
				{ AppStoreData.map((item) => (
					<Block
						key={item.id}
						title={item.title}
						isNew={item.new}
						text={item.text}
						width={"120px"}
						height={"114px"}
						isInfo={true}
						isBubble={true}
						isIcon={item.icon}
						backgroundColor = {item.bgColor}
					/>
				))}
			</div>
		</div>
	);
}
