import React from 'react';
import { BsInfoCircle } from "react-icons/bs";
import { ImBubble } from "react-icons/im";
import { IoLogoBitbucket } from "react-icons/io5";
import { PiParallelogramFill } from "react-icons/pi";
import Jupyter from '../../assets/jupyter.png';
import styles from './Block.module.css';

export default function Blocks({ title, text, width, height, isInfo, isBubble, isLogo, isIcon, isNew, backgroundColor }) {
	console.info(backgroundColor, "bgColor");
	return (
		<div className={(backgroundColor === "white" || backgroundColor === "#FFFF") ? styles.containerWhite : (backgroundColor === "#2F2DB6" ? styles.containerBlue : (backgroundColor === "#000000" ? styles.containerBlack : styles.container))}
			style={{ width, height, background: backgroundColor || "linear-gradient(90deg, rgba(135,97,252,1) 0%, rgba(93,193,231,1) 50%)"}}>
			<div className={styles.textContainer}>
				{isIcon ? <IoLogoBitbucket className={styles.iconImg} /> : null}
				<div className={styles.title}>{title}</div>
				<div className={styles.text}>{text}</div>
				{isBubble ? <div className={styles.redPart}><ImBubble className={styles.redImg} /></div> : null}
				{isNew ? (
					<div className={styles.newPart}>
						<PiParallelogramFill className={styles.parallelogram} />
						<span className={styles.newText}>NEW</span>
					</div>
				) : null}

				{isLogo ? <img src={Jupyter} className={styles.logoImg} /> : null}
			</div>
			{isInfo ? (
				<div className={styles.InfoImgContainer}>
					<BsInfoCircle className={(backgroundColor === "white" || backgroundColor === "#FFFFFF") ? styles.infoImgBlue : styles.infoImg } />
				</div>
			) : null }

		</div>
	);
}