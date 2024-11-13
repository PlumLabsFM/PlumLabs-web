import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Heading, Title, SmallText } from '../../components/elements/Typography/Typography';
import style from './Dashboard.module.css';
import { LOCALSTORAGE } from '../../utils/constants';
import { IoPerson } from "react-icons/io5";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
	const navigate = useNavigate();

	const appClickHandler = () => {
		navigate('/app-store');
	};

	return (
		<div className={style.pageContainer}>
			<div className={style.block}>
						<div className={style.profile} >
							<IoPerson className={style.navIcon}/>
							<div className={style.names}><SmallText>{`Hello ${user.firstname}`}</SmallText></div>
						</div>
					</div>
			<div className={style.titleContainer}>
				<Title className={style.title}>INNOVATE <span className={style.pageSubTitle}>FASTER</span></Title>
			</div>
			<div className={style.profileContainer}>
				<Heading className={style.profileName}>
					{`Welcome Back ${user.firstname}`}
				</Heading>
			</div>
			<div className={style.cardContainer}>
				<div className={style.optionContainer}>
					<div className={style.appContainer} onClick={appClickHandler}>
						<IoCartSharp className={style.icon}/>
					</div>
					<h4 className={style.option}>App <br /> Store</h4>
				</div>
				<div className={style.optionContainer}>
					<div className={style.appContainer}>
						<FaUserCircle className={style.icon}/>
					</div>
					<h4 className={style.option}>My Work<br />Space</h4>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
