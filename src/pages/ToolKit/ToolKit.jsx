import React from 'react';
import Blocks from '../../components/Block/Block';
import { ToolkitData } from '../../utils/constants';
import styles from './ToolKit.module.css';
export default function ToolKit() {

	return (
		<div className={styles.middleDiv}>
			<div className={styles.bgColor}>
				<div className={styles.blockDiv}>
					{ToolkitData.slice(0, 3).map((item) => (
						<Blocks
							key={item.id}
							title={item.title}
							text={item.text}
							width={"120px"}
							height={"114px"}
							isBubble={false}
							isLogo={item.logo}
							backgroundColor= {item.bgColor}
						/>
					))}
				</div>
				<div className={styles.blockDiv}>
					{ToolkitData.slice(3, 7).map((item) => (
						<Blocks
							key={item.id}
							title={item.title}
							text={item.text}
							width={"120px"}
							height={"114px"}
							isBubble={false}
							isLogo={item.logo}
							backgroundColor= {item.bgColor}
						/>
					))}
				</div>

			</div>
		</div>
	);
}
