import { Modal } from 'antd';
import React, { useState } from 'react';
import { BsSearch, BsFillChatDotsFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { HiDocument } from "react-icons/hi2";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiCalendarHeart, PiHeadCircuitLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutUser, shareReportFile } from '../../services/apiServices';
import { LOCALSTORAGE } from '../../utils/constants';
import NavbarButton from '../elements/NavbarButton/NavbarButton';
import { Heading, SmallText } from '../elements/Typography/Typography';
import styles from './BackTestNavbar.module.css';

export default function BackTestNavbar({codeValue, showDrawer, graphNm}) {

	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const logoutHandle = async () => {
		try {
			const response = await logoutUser();
			if (response.status === 200) {
				toast.success(response.data.msg);
				localStorage.removeItem(LOCALSTORAGE.USER);
				navigate('/');
			} else {
				toast.error('Something went wrong. Please try again.');
			}
		} catch (error) {
			console.error("error", error);
		}
	};

	const saveToFile = async() => {
		const res = await shareReportFile(graphNm)
		const blob = new Blob([res.data], { type: "text/plain" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		const filename = res.headers['content-disposition']
		? res.headers['content-disposition'].split('filename=')[1].replace(/"/g, '')
		: 'chart_script.py';
		link.download = filename;
		link.click();
	};

	const fileUrl = codeValue;
	const subject = "Check out this file!";
	const body = `I wanted to share this file with you: \n \n ${fileUrl} \n \n`;

	const mailtoLink = `mailto:?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;

	return (
		<div className={styles.mainContainer}>
			<div>
				<Heading textColor='black'>Back Testing</Heading>
			</div>
			<div className={styles.rightContainer}>
				<div className={styles.imgBlock}><BsFillChatDotsFill className={styles.img} onClick={showDrawer} /><SmallText><span className={styles.text}>Chat</span></SmallText></div>
				<div className={styles.imgBlock}><HiDocument className={styles.img} /><SmallText><span className={styles.text}>Python</span></SmallText></div>
				<div className={styles.imgBlock}><PiHeadCircuitLight className={styles.img} /><SmallText><span className={styles.text}>Linage</span></SmallText></div>
				<div className={styles.imgBlock}><BsSearch className={styles.img} /><SmallText ><span className={styles.text}>Insights</span></SmallText></div>
				<div className={styles.imgBlock}><MdOutlinePersonAddAlt className={styles.img} /></div>
				<div className={styles.imgBlock}><NavbarButton width={'110px'} text='Report' type='submit' /></div>
				<div className={styles.imgBlock}>
					<NavbarButton text='Share' type='submit' onClick={showModal} width={'110px'}/>
					<Modal
						title="Share My Results"
						open={isModalOpen}
						onCancel={handleCancel}
						footer={null}
						width={'30%'}
						style={{ top: 50, right: 10, position: 'absolute' }}>
						{/* <button onClick={saveToFile} style={{ marginTop: "10px" }}>Save to File</button> */}
						<hr></hr>
						<div className={styles.buttons} >
							<div className={styles.btnImageDiv} onClick={saveToFile}>
								<HiDownload className={styles.btnImage}/>
								<SmallText className={styles.textForImg}>Download</SmallText>
							</div>
							<a className={styles.btnImageDiv} href={mailtoLink}>
								<PiCalendarHeart className={styles.btnImage}/>
								<SmallText className={styles.textForImg}>Share on mail</SmallText>
							</a>
						</div>
					</Modal>
				</div>
				<div className={styles.imgBlock}>
					<NavbarButton width={'110px'} text='Logout' type='submit' onClick={logoutHandle} />
				</div>
			</div>
		</div>

	);
}
