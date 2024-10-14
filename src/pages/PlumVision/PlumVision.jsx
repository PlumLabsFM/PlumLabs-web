import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../assets/api.png';
import CSV from '../../assets/csv.png';
import Disk from '../../assets/disk.png';
import { Heading, SubHeading } from '../../components/elements/Typography/Typography';
import { uploadDocument } from '../../services/apiServices';
import styles from './PlumVision.module.css';

export default function PlumVision() {
	const [userId, setUserId] = useState(null);
	const [isFileUploaded, setIsFileUploaded] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const userData = JSON.parse(Cookies.get('user'));
		setUserId(userData.id);
	}, []);

	const handleFileChange = async (event) => {
		const file = event.target.files[0];

		if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
			const formData = new FormData();
			formData.append('files', file);

			try {
				await uploadDocument(userId, formData);
				setIsFileUploaded(true);
				toast.success("File uploaded sucessfully.");
			} catch (error) {
				console.error('Error uploading file:', error);
				setIsFileUploaded(false);
			}
		} else {
			alert('Please upload a valid Excel (.xlsx) file.');
			setIsFileUploaded(false);
		}
	};

	const handlePlayButtonClick = () => {
		if (isFileUploaded) {
			navigate('/plum-dashboard');
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className= {styles.container}>
				<div className={styles.mainDiv}>
					<div className={styles.loadData}>
						<div className={styles.logoDiv}>
							<div className={styles.logoSubDiv}>
								<Heading className={styles.headings}>LOAD DATA</Heading>
								<label className={styles.csvUploadLabel}>
									<img src={CSV} alt="xlsx" className={styles.csvImage} />
									<input
										type="file"
										accept=".xlsx"
										onChange={handleFileChange}
										className={styles.hiddenFileInput}
									/>
								</label>

								{/* <label className={styles.csvUploadLabel}>
									<Blocks
										width={"120px"}
										height={"114px"}
										isInfo={true}
										isLogo={PlumVisionData.logo}
										backgroundColor= {PlumVisionData.bgColor}
									/>
									<img src={CSV} alt="csv" className={styles.csvImage}/>
									<input
										type="file"
										accept=".csv"
										onChange={handleFileChange}
										className={styles.hiddenFileInput}
									/>
								</label> */}
							</div>
							<div>
								{/* <Blocks
									width={"120px"}
									height={"114px"}
									isInfo={true}
									isLogo={PlumVisionData.logo}
									backgroundColor= {PlumVisionData.bgColor}
								/> */}
								<img src={API} alt="API" />
							</div>
						</div>
					</div>
					<div className={styles.setParameters}>
						<div>
							<Heading className={styles.headings}>SET PARAMETERS</Heading>
							<div className={isFileUploaded ? styles.diskImgContainer : styles.diskImgContainerFaded}>
								<div className={styles.imgDiv}><SubHeading className={styles.textHeading}>Instruments</SubHeading><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><SubHeading className={styles.textHeading}>Data Range</SubHeading><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><SubHeading className={styles.textHeading}>Valuation Currency</SubHeading><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><SubHeading className={styles.textHeading}>Instruments</SubHeading><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><SubHeading className={styles.textHeading}>Instruments</SubHeading><img src={Disk} alt="disk" className={styles.diskImage}/></div>
							</div>
						</div>
					</div>
				</div>
				<div className={isFileUploaded ? styles.playBtnDiv : styles.playBtnDivFaded}>
					<FaRegPlayCircle className={styles.playBtn} onClick={handlePlayButtonClick} />
				</div>
			</div>
		</div>
	);
}
