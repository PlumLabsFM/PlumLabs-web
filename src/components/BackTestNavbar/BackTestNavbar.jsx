import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { HiDocument } from "react-icons/hi2";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiHeadCircuitLight } from "react-icons/pi";
import NavbarButton from '../elements/NavbarButton/NavbarButton';
import { Heading, SmallText } from '../elements/Typography/Typography';
import styles from './BackTestNavbar.module.css';

export default function BackTestNavbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [codeValue, setCodeValue] = useState(`# Python Code\nprint("Hello, World!")`);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	useEffect(() => {
		// Fetch the Python file from the public directory
		fetch("./sample.py")
			.then((response) => response.text())
			.then((data) => {
				setCodeValue(data);
			})
			.catch((err) => console.error("Error loading file:", err));
	}, []);

	const saveToFile = () => {
		const blob = new Blob([codeValue], { type: "text/plain" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "code.py";
		link.click();
	};
	return (
		<div className={styles.mainContainer}>
			<div>
				<Heading textColor='black'> Maria Back Test  </Heading>
			</div>
			<div className={styles.rightContainer}>
				<div className={styles.imgBlock}><BsFillChatDotsFill className={styles.img} /><SmallText><span className={styles.text}>Chart</span></SmallText></div>
				<div className={styles.imgBlock}><HiDocument className={styles.img} /><SmallText><span className={styles.text}>Python</span></SmallText></div>
				<div className={styles.imgBlock}><PiHeadCircuitLight className={styles.img} /><SmallText><span className={styles.text}>Linage</span></SmallText></div>
				<div className={styles.imgBlock}><BsSearch className={styles.img} /><SmallText ><span className={styles.text}>Insights</span></SmallText></div>
				<div className={styles.imgBlock}><MdOutlinePersonAddAlt className={styles.img} /></div>
				<div className={styles.imgBlock}><NavbarButton text='Report' type='submit' /></div>
				<div className={styles.imgBlock}>
					<NavbarButton text='Share' type='submit' onClick={showModal} width={'150px'}/>
					<Modal title="Share My Results" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
						<button onClick={saveToFile} style={{ marginTop: "10px" }}>Save to File</button>
					</Modal>
				</div>
			</div>
		</div>

	);
}
