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
		<div className={styles.blockContainer}>
			<div className={styles.optionContainer}>
				{AppStoreData?.map((item) => {
					return (
						<div style={{cursor: "pointer"}} onClick={() => handleItemClick(item)}>
							<Block
								key={item.id}
								title={item.title}
								isNew={item.new}
								text={item.text}
								width={"136px"}
								height={"135px"}
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
