import React from 'react';
import styles from './Table.module.css';
export default function Table({ tableData }) {
	const headers = Object.keys(tableData[0]);

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tableData.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{headers.map((header, cellIndex) => (
							<td key={cellIndex}>{row[header]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
