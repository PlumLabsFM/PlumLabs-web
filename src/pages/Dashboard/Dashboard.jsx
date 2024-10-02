import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import style from './Dashboard.module.css';

const Dashboard = () => {

	return (
		<div className={style.pageContainer}>
			<div className={style.titleContainer}>
				<h1 className={style.title}>INNOVATE <span className={style.pageSubTitle}>FASTER</span></h1>
			</div>
			<div className={style.profileContainer}>
				<h2 className={style.profileName}>
					Welcome Back Maria
				</h2>
			</div>
			<div className={style.cardContainer}>
				<div className={style.optionContainer}>
					<div className={style.appContainer}>
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
