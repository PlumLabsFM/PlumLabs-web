import React from 'react';
import styles from './NavbarButton.module.css';
export default function NavbarButton({ text, type, width, onClick }) {
	return (
		<button className={styles.loginBtn} type={type} style={{width}} onClick={onClick}>

			<div> {text} </div>

		</button>
	);
}
