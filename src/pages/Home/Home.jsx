import React from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { Description, SubHeading, Title } from '../../components/elements/Typography/Typography';
import style from './Home.module.css';

const Home = () => {
	const navigate = useNavigate();

	const onSearchClickHandler = () => {
		navigate('/login');
	};

	return (
		<div className={style.homePage}>
			<div className={style.glassContainer}>
				<GiMagnifyingGlass
					className={style.glass}
					onClick={onSearchClickHandler}
				/>
			</div>
			<SubHeading>PLUM Data Labs, Inc.</SubHeading>
			<div className={style.pageTitle}>
				<Title>
					We Build Data Science <br />
					Tools For Humans.
				</Title>
			</div>
			<div className={style.pageDescription}>
				<Description>
					Your Backend Is Ready | Build Apps | Deploy Models | <br />
					Explore Any Market
				</Description>
			</div>
		</div>
	);
};

export default Home;
