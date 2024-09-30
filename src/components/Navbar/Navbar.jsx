import React from 'react';
import { BsGearWide } from "react-icons/bs";
import { GiBigGear } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { PiGearFineBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { NavbarConst } from '../../utils/constants';
import { Heading, SmallText } from '../elements/Typography/Typography';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
	const navigate = useNavigate();
	const handleToolkitClick = () => {
		navigate('/tool-kit');
	};
	return (
		<div className={styles.navbar}>
			<div className={styles.MainContainer}>
				<Heading textColor='black'> {title} </Heading>
				<div className={styles.blockContainer}>
					<div className={styles.block}>
						<BsGearWide className={styles.navIcon}/>
						<div className={styles.lables}><SmallText>{NavbarConst.DEV}</SmallText></div>
					</div>
					<div className={styles.block}>
						<GiBigGear className={styles.navIcon} onClick={handleToolkitClick} />
						<div className={styles.lables}><SmallText>{NavbarConst.TOOL_KIT}</SmallText></div>
					</div>
					<div className={styles.block}>
						<PiGearFineBold className={styles.navIcon} />
						<div className={styles.lables}><SmallText>{NavbarConst.ADMIN}</SmallText></div>
					</div>
					<div className={styles.block}>
						<div className={styles.profile} >
							<IoPerson className={styles.navIcon}/>
							<div className={styles.names}><SmallText>{NavbarConst.HELLO}</SmallText></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
