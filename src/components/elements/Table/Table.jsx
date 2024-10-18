import React from 'react';
import styles from './Table.module.css';

export default function Table({ tableData }) {
	const headers = Object.keys(tableData[0]);

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.tableRow}>
					{headers.map((header, index) => (
						<th className={styles.tableHead} key={index}>{header.replace("_", " ").split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tableData.map((row, rowIndex) => (
					<tr className={styles.tableRow} key={rowIndex}>
						{headers.map((header, cellIndex) => (
							<td className={styles.tableData} key={cellIndex}>{row[header]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}