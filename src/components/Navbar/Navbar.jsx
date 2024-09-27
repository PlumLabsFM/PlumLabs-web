import React from 'react';
import { BsGearWide } from "react-icons/bs";
import { GiBigGear } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { PiGearFineBold } from "react-icons/pi";
import { Heading, SmallText } from '../elements/Typography/Typography';
import styles from './Navbar.module.css';

export default function Navbar({title, name}) {
	return (
		<div className={styles.navbar}>
			<div className={styles.MainContainer}>
				<Heading textColor='black'> {title} </Heading>
				<div className={styles.blockContainer}>
					<div className={styles.block}>
						<BsGearWide className={styles.navIcon}/>
						<div className={styles.lables}><SmallText>Devs</SmallText></div>
					</div>
					<div className={styles.block}>
						<GiBigGear className={styles.navIcon} />
						<div className={styles.lables}><SmallText>Tool Kit</SmallText></div>
					</div>
					<div className={styles.block}>
						<PiGearFineBold className={styles.navIcon} />
						<div className={styles.lables}><SmallText>Admin</SmallText></div>
					</div>
					<div className={styles.block}>
						<div className={styles.profile} >
							<IoPerson className={styles.navIcon}/>
							<div className={styles.names}><SmallText>Hello{name}</SmallText></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
