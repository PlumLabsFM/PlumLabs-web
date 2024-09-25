import React from 'react';
import style from './Button.module.css';

const Button = ({ text, type, loading = false }) => {
	return (
		<button className={style.loginBtn} type={type}>
			{loading ? (
				<span className={style.loader}></span>
			) : (
				<> {text} </>
			)}
		</button>
	);
};

export default Button;