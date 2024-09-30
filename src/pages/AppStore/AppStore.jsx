import React from 'react';
import Block from '../../components/Block/Block';
import { AppStoreData } from '../../utils/constants';
import styles from './AppStore.module.css';

export default function AppStore() {
	return (
		<div className={styles.middleDiv}>
			<div className={styles.blockDiv}>
				{AppStoreData.map((item, index) => (
					<Block
						key={item.id}
						title={item.title}
						isNew={index === 0 ? true : false}
						text={item.text}
						width={"120px"}
						height={"114px"}
						isBubble={true}
						isLogo={item.logo}
						style={index === AppStoreData.length - 2 ? { backgroundColor: 'white' } : index === AppStoreData.length - 1 ? { backgroundColor: 'blue' } : {}
						}
					/>
				))}
			</div>
		</div>
	);
}
