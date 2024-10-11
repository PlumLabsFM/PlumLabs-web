import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './ChartItem.module.css';

const ChartItem = ({ type, graphName, label, icon }) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'default',
		item: { type, graphName },
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	});

	const opacity = isDragging ? 0.5 : 1;

	return (
		<div ref={drag} style={{ opacity }} className={styles.blockDiv}>
			<div className={styles.block}>
				<div>{icon}</div>
				<div className={styles.text}>{label}</div>
			</div>
		</div>
	);
};

export default ChartItem;
