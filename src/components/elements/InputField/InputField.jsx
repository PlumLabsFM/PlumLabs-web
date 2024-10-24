import React from 'react';
import style from './InputField.module.css';

const InputField = ({ id, type, placeholder, required = false }) => {
	return (
		<input
			id={id}
			className={style.inputField}
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default InputField;