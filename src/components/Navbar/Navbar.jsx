import React from 'react';
import { BsGearWide } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import styles from './Navbar.module.css';
export default function Navbar({title, name}) {
	return (
		<div className={styles.navbar}>
			<div className={styles.MainContainer}>
				<div className={styles.title}>{title}</div>
				<div className={styles.blockContainer}>
					<div className={styles.block}>
						<BsGearWide style={{ color: "#9A6FF4", fontSize: "40px" }} />
						<h6 className={styles.lables}>Devs</h6>
					</div>
					<div className={styles.block}>
						<BsGearWide style={{ color: "#9A6FF4", fontSize: "40px" }} />
						<h6 className={styles.lables}>Tool Kit</h6>
					</div>
					<div className={styles.block}>
						<BsGearWide style={{ color: "#9A6FF4", fontSize: "40px" }} />
						<h6 className={styles.lables}>Devs</h6>
					</div>
					<div className={styles.block}>
						<div className={styles.profile}>
							<IoPerson style={{ color: "#9A6FF4", fontSize: "40px" }} />
							<div className={styles.names}> Hello {name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
