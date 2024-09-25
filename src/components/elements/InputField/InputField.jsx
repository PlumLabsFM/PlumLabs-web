import React from 'react';
import style from './InputField.module.css';

const InputField = ({ type, placeholder, required = false }) => {
	return (
		<input
			className={style.inputField}
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default InputField;