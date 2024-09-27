import React from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { ImBubble } from "react-icons/im";
import { IoLogoBitbucket } from "react-icons/io5";
import { PiParallelogramFill } from "react-icons/pi";
import styles from './Block.module.css';
export default function Blocks({ title, text, width, height, isBubble, isLogo, style, isNew }) {
	return (
		<div className={styles.container} style={{ width, height, ...style }}>
			<div className={styles.textContainer}>
				{isLogo ? <IoLogoBitbucket className={styles.logoImg} /> : null}
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{text}</div>
				{isBubble ? <div className={styles.redPart}><ImBubble className={styles.redImg} /></div> : null}
				{isNew ? <div className={styles.newPart}><PiParallelogramFill className={styles.parallelogram}/></div> : null}
			</div>
			<div className={styles.InfoImgContainer}><BsInfoCircle className={styles.infoImg} /></div>
		</div>
	);
}