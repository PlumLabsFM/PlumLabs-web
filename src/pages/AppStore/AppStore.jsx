/* eslint-disable react/jsx-key */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Block from '../../components/Block/Block';
import { AppStoreData } from '../../utils/constants';
import styles from './AppStore.module.css';

export default function AppStore() {
	const navigate = useNavigate();

	const handleItemClick = (item) => {
		navigate(item.link);
	};

	return (
		<div className={styles.middleDiv}>
			<div className={styles.blockDiv}>
				{AppStoreData.map((item) => {
					return (
						<div style={{cursor: "pointer"}} onClick={() => handleItemClick(item)}>
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
						</div>
					);
				})}
			</div>
		</div>
	);
}
