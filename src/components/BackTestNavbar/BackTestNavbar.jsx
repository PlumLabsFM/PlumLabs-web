import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
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
	const [newData, setNewData] = useState('')

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
				localStorage.removeItem(LOCALSTORAGE.FIREBASE_ID);
				navigate('/');
			} else {
				toast.error('Something went wrong. Please try again.');
			}
		} catch (error) {
			console.error("error", error);
		}
	};

	const saveToFile = async () => {
		try {
			const res = await shareReportFile(graphNm);
			if (!res || !res.data) {
				throw new Error('Failed to fetch the report file.');
			}
			const blob = new Blob([res.data], { type: "text/plain" });
			setNewData(res.data)
			const link = document.createElement("a");
			const filename = res.headers['content-disposition']
				? res.headers['content-disposition'].split('filename=')[1].replace(/"/g, '')
				: 'chart_script.py';
			link.href = URL.createObjectURL(blob);
			link.download = filename;
			link.click();
			URL.revokeObjectURL(link.href);
		} catch (error) {
			console.error('Error saving the file:', error);
			toast.error('Failed to save the file. Please try again.');
		}
	};

	const fileUrl = codeValue;
	const subject = "Check out this file!";
	const body = `I wanted to share this file with you: \n \n ${fileUrl} \n \n`;

	const mailtoLink = `mailto:?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;
	
	useEffect(() => {
		console.log('new',newData)
	},[newData, setNewData])

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
							<a className={styles.btnImageDiv} href={mailtoLink} >
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
