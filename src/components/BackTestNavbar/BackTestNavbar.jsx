import { Modal } from 'antd';
import React, { useState } from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { HiDocument } from "react-icons/hi2";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiHeadCircuitLight } from "react-icons/pi";
import Button from '../elements/Button/Button';
import { Heading } from '../elements/Typography/Typography';
import styles from './BackTestNavbar.module.css';

export default function BackTestNavbar() {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={styles.mainContainer}>
			<div>
				<Heading textColor='black'> Maria Back Test  </Heading>
			</div>
			<div className={styles.rightContainer}>
				<div><BsFillChatDotsFill className={styles.img}/></div>
				<div><HiDocument className={styles.img} /></div>
				<div><PiHeadCircuitLight className={styles.img}/></div>
				<div><BsSearch className={styles.img}/></div>
				<div><MdOutlinePersonAddAlt className={styles.img}/></div>
				<div><Button text='Report' type='submit' /></div>
				<div><Button text='Share' type='submit' onClick={showModal}/></div>

			</div>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<div>hi</div>

			</Modal>
		</div>

	);
}
