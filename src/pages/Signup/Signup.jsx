import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Avatar from '../../assets/user/avatar.png';
import Button from '../../components/elements/Button/Button';
import InputField from '../../components/elements/InputField/InputField';
import { Description, Heading, Title } from '../../components/elements/Typography/Typography';
import { signinUser } from '../../services/apiServices';
import { SIGNUP } from '../../utils/constants';
import style from './Signup.module.css';
import { fireSighupAuth } from '../../utils/helper';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../Firebase';

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		const [firstname, lastname, email, password] = e.target.elements;

		const payload = {
			firstname: firstname.value,
			lastname: lastname.value,
			email: email.value,
			password: password.value
		};
		try {
			const response = await signinUser(payload);
			const fireResponse = await fireSighupAuth(payload);

			if (response.status === 200 && fireResponse.success) {
				await setDoc(doc(db, "users", fireResponse.user.uid), {
					firstname: payload.firstname,
					lastname: payload.lastname,
					email: payload.lastname,
					uid: fireResponse.user.uid,
				});
				await setDoc(doc(db, "userChats", fireResponse.user.uid), {});
				toast.success("User created successfully.");
				signinHandler();
			} else {
				toast.error("Something went wrong. Please try again.");
				if (fireResponse.errorCode) {
					toast.error(fireResponse.errorMessage);
				}
			}
		} catch (error) {
			toast.error("An error occurred while creating the account. Please try again later.");
		}
		setIsLoading(false);
	};

	const signinHandler = () => {
		navigate('/login');
	};

	return (
		<div className={style.signupPage}>
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
					<Heading textColor="grey">Sign up</Heading>
					<form onSubmit={handleSubmit}>
						<div className={style.nameContainer}>
							<label className={style.labelText}>{SIGNUP.FIRST_NAME}</label>
							<div className={style.inputWrapper}>
								<FaUser className={style.inputIcon} />
								<InputField
									type="text"
									placeholder='First name'
									required
								/>
							</div>
							<label className={style.labelText}>{SIGNUP.LAST_NAME}</label>
							<div className={style.inputWrapper}>
								<FaUser className={style.inputIcon} />
								<InputField
									type="text"
									placeholder='Last name'
									required
								/>
							</div>
						</div>
						<div>
							<label className={style.labelText}>{SIGNUP.EMAIL}</label>
							<div className={style.inputWrapper}>
								<TfiEmail className={style.inputIcon} />
								<InputField
									type="email"
									placeholder='Email'
									required
								/>
							</div>
						</div>
						<div className={style.inputWrapper}>
							<label className={style.labelText}>{SIGNUP.PASSWORD}</label>
							<FaLock className={style.inputIcon} />
							<InputField
								type="password"
								placeholder='Password'
								required
							/>
						</div>
						<Button text='Sign up' type='submit' loading={isLoading} />
						<div className={style.alreadyAccountContainer}>
							<Description textColor="grey">
								Already have account?
								<span className={style.signupContent} onClick={signinHandler}> Sign in</span>
							</Description>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
