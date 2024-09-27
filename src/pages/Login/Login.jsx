import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Avatar from '../../assets/user/avatar.png';
import Button from '../../components/elements/Button/Button';
import InputField from '../../components/elements/InputField/InputField';
import {Title, Description, Heading, SubHeading } from '../../components/elements/Typography/Typography';
import { loginUser } from '../../services/apiServices';
import { LOGIN_TEXT } from '../../utils/constants';
import style from './Login.module.css';

const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		const [email, password] = e.target.elements;

		try {
			const response = await loginUser(email.value, password.value);
			if (response.status === 200) {
				navigate('/');
			}
		} catch (error) {
			console.error(error);
		}
		setIsLoading(false);
	};


	const signupHandler = () => {
		navigate('/signup');
	};

	return (
		<div className={style.loginPage}>
			<div className={style.titleContainer}>
				<Title>INVESTMENT RESEARCH
					<span className={style.pageSubTitle}>&nbsp; MADE EASY</span>
				</Title>
				<Description>
					Boost your analysis with streamlined <br />
					workflows and AI.
				</Description>
			</div>
			<div className={style.cardContainer}>
				<img src={Avatar} className={style.profileImg} alt='Avatar' />
				<div className={style.formContainer}>
					<Heading>Login</Heading>
					<form onSubmit={handleSubmit}>
						<div>
							<label className={style.labelText}>{LOGIN_TEXT.EMAIL}</label>
							<div className={style.inputWrapper}>
								<FaUser className={style.inputIcon} />
								<InputField
									type="email"
									placeholder='Username...'
									required
								/>
							</div>
						</div>
						<div className={style.inputWrapper}>
							<label className={style.labelText}>{LOGIN_TEXT.PASSWORD}</label>
							<FaLock className={style.inputIcon} />
							<InputField
								type="password"
								placeholder='Password...'
								required
							/>
						</div>
						<Button text='Sign in' type='submit' loading={isLoading} />
						<SubHeading cursor>Forget your password?</SubHeading>
						<Description>
							Don&apos;t have account?
							<span className={style.signupContent} onClick={signupHandler}> Sign up</span>
						</Description>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
