import { DatePicker, Select} from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegPlayCircle } from 'react-icons/fa';
import { GiPolarBear } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../assets/api.png';
import CSV from '../../assets/csv.png';
import { Heading, SubHeading } from '../../components/elements/Typography/Typography';
const { RangePicker } = DatePicker;
import { uploadDocument } from '../../services/apiServices';
import {ItemsForDropdown} from '../../utils/constants';
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
		<div className={styles.rootContainer}>
			<div className= {styles.appContainer}>
				<div className={styles.appBox}>
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
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Instruments</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><GiPolarBear style={{color: 'red', width: '40px', height: '40px'}}/></div>
										<div className={styles.inputContainer}>
											<div className={styles.textCard}>BTC</div>
											<div className={styles.textCard}>USDC</div>
											<div className={styles.textCard}>AAPL</div>
										</div>
									</div>
								</div>
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Data Range</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><MdOutlineCalendarMonth className={styles.signs}/></div>
										<div className={styles.inputContainer} >
											<RangePicker
												placeholder={['Start Date', 'End Date']}
												format={'YYYY/MM/DD'}
												disabled={!isFileUploaded}
												className={styles.datePicker}
											/>
										</div>
									</div>

								</div>
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Valuation Currency</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><AiOutlineDollar className={styles.signs}/></div>
										<div className={styles.inputContainer}>
											<Select
												showSearch
												style={{ width: 200 }}
												placeholder="Select Currency"
												optionFilterProp="label"
												filterSort={(optionA, optionB) =>
													(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
												}
												options={ItemsForDropdown}
												disabled={!isFileUploaded}
											/>
										</div>
									</div>
								</div>
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Revaluation Frequency</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><LuClock3 className={styles.signs}/></div>
										<div className={styles.inputContainer}></div>
									</div>
								</div>
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Rebalance Frequency</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><LuClock3 className={styles.signs}/></div>
										<div className={styles.inputContainer}></div>
									</div>
								</div>
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Market Feed</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><GrLineChart className={styles.signs}/></div>
										<div className={styles.inputContainer}></div>
									</div>
								</div>
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
