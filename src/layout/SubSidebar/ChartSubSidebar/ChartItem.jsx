import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './ChartItem.module.css';

const ChartItem = ({graphName, label, icon, types}) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'default',
		item: { graphName, types },
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
