import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Avatar from '../../assets/user/avatar.png';
import Button from '../../components/elements/Button/Button';
import InputField from '../../components/elements/InputField/InputField';
import {Title, Description, Heading, SubHeading } from '../../components/elements/Typography/Typography';
import { loginUser } from '../../services/apiServices';
import { LOCALSTORAGE, LOGIN_TEXT } from '../../utils/constants';
import style from './Login.module.css';
import { fireLoginAuth } from '../../utils/helper';


const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	
	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		const [email, password] = e.target.elements;
		let payload = {
			email: email.value,
			password: password.value
		};
		try {
			const response = await loginUser(email.value, password.value);
			const fireResponse = await fireLoginAuth(payload);

			if (response.status === 200 && fireResponse.success) {
				toast.success("Login successful. Welcome to PlumLabs!");
				localStorage.setItem(LOCALSTORAGE.USER, JSON.stringify(response.data.user_data));
				localStorage.setItem(LOCALSTORAGE.FIREBASE_ID, JSON.stringify( fireResponse.user.uid));
				navigate('/dashboard');
			} else {
				toast.error("Something went wrong. Please try again.");
				if (fireResponse.errorCode) {
					toast.error(fireResponse.errorMessage)
				}
			}
		} catch (error) {
			toast.error(error?.response?.data?.error);
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
					<Heading textColor="grey" className={style.loginText}>Login</Heading>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='email' className={style.labelText}>{LOGIN_TEXT.EMAIL}</label>
							<div className={style.inputWrapper}>
								<FaUser className={style.inputIcon} />
								<InputField
									id="email"
									type="email"
									placeholder='Username...'
									required
								/>
							</div>
						</div>
						<div className={style.inputWrapper}>
							<label htmlFor='password' className={style.labelText}>{LOGIN_TEXT.PASSWORD}</label>
							<FaLock className={style.inputIcon} />
							<InputField
								id='password'
								type="password"
								placeholder='Password...'
								required
							/>
						</div>
						<Button text='Sign in' type='submit' loading={isLoading} />
						<SubHeading cursor textColor="grey">Forget your password?</SubHeading>
						<Description textColor="grey">
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
