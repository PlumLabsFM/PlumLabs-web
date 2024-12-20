import { DatePicker, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
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
import { uploadDocument, getUserTableData, enterPortfolioData } from '../../services/apiServices';
import { ItemsForDropdown, LOCALSTORAGE, options, rebalanceOptions } from '../../utils/constants';
import { MyContext } from '../../utils/ContextProvider';
import styles from './PlumVision.module.css';
import Table from '../../components/elements/Table/Table'
import CustomTable from '../../components/elements/CustomTable/CustomTable';

export default function PlumVision() {

	const { dateRange, setDateRange } = useContext(MyContext);
	const [userId, setUserId] = useState(null);
	const [isFileUploaded, setIsFileUploaded] = useState(false);
	const [selectedValue, setSelectedValue] = useState(options?.[0]?.value);
	const [tableData, setTableData] = useState([]);
	const [rebalanceValue, setRebalanceValue] = useState('')
	const [cash, setCash] = useState(null);
	const [showEmptyTable, setShowEmptyTable] = useState(false);
	const [istableDataFilled, setIsTableDataFilled] = useState(false);
	const [getTableData, setGetTableData] = useState([])
	const [enableFields, setEnableFields] = useState(false);
	const navigate = useNavigate();
	const [inputRange, setInputRange] = useState({
		startDate: '',
		endDate: ''
	});

	const fetchTableData = async() => {
		try {
			setShowEmptyTable(false);
			const res = await getUserTableData();
			if (res.data && res.data.Portfolio_Data) {
				setTableData(res.data.Portfolio_Data);
			} else {
				console.error(error);
			}
		} catch (error) {
			console.error('Error fetching table data:', error);
		}
	}
	
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem(LOCALSTORAGE.USER));
		setUserId(userData.id);
		if (!userData) {
			navigate('/login');
		}
	}, []);

	const handleFileChange = async (event) => {
		const file = event.target.files[0];

		if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
			const formData = new FormData();
			formData.append('file', file);

			try {
				await uploadDocument(formData);
				setIsFileUploaded(true);
				fetchTableData();
				setShowEmptyTable(false)
				toast.success("File uploaded sucessfully.");
			} catch (error) {
				toast.error('An error occurred while uploading the file. Please try again.');
				setIsFileUploaded(false);
			}
		} else {
			alert('Please upload a valid Excel (.xlsx) file.');
			setIsFileUploaded(false);
		}
	}

	const handlePlayButtonClick = () => {
		if (!inputRange.startDate && !inputRange.endDate) {
		  return toast.warning('Please select date range!');
		}
		if (selectedValue === 'allocation') {
		  if (!cash) {
			return toast.warning('Please enter cash');
		  }
		  if (!rebalanceValue) {
			return toast.warning('Please enter rebalance value');
		  }
		}
		const resultantData = {
			inputRange,
			cash,
			rebalanceValue
		}
	  	localStorage.setItem(LOCALSTORAGE.DATETIME, JSON.stringify(resultantData));
		navigate('/plum-dashboard');
	};

	const handleOptionChange = (value) => {
		setSelectedValue(value);
		setIsFileUploaded(false);
		setShowEmptyTable(false);
		setEnableFields(false);
	};

	const handleCreateTable = () => {
		setTableData([]);
		setShowEmptyTable(!showEmptyTable);
		setEnableFields(false);
	}

	const handleEnableFields = async() => {
		const filteredData = getTableData.filter(item => item.asset !== "");
		
		if(filteredData.length > 0){
			setIsTableDataFilled(true);
		}
		
		try {
			const res = await enterPortfolioData(filteredData);
			if(res.data.user_id && (filteredData && filteredData.length > 0)){
				setEnableFields(true);
			}
		} catch (error) {
			console.error('Error entering portfolio data:', error);
			toast.error(error.response.data.error)
			setEnableFields(false);
		}
	};

	useEffect(()=>{
		if(istableDataFilled || isFileUploaded){
			setEnableFields(true);
		}
	},[istableDataFilled, isFileUploaded]);

	return (
		<div className={styles.rootContainer}>
			<div className={styles.dropdown}>
				<Select
					style={{ width: 200, color: "black" }}
					options={options}
					onChange={handleOptionChange}
					defaultValue={options[0]?.label}
				/>
			</div>
			<div className={styles.appContainer}>
				{selectedValue && <div className={styles.appBox}>
					<div className={styles.loadData}>
						<div className={styles.logoDiv}>
							{/* <div className={styles.logoSubDiv}>
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
							</div> */}
							{/* <div>
								<img src={API} alt="API" />
							</div> */}
							<button className={`btn ${styles.optionSelectedValue}`} onClick={handleCreateTable}>Enter table Data</button>
							<label className={styles.csvUploadLabel}>
								Import csv
								<input
									type="file"
									accept=".xlsx"
									className={styles.hiddenFileInput}
									onChange={handleFileChange}
									multiple
								/>
								{/* <button className={styles.importBtn}>Import csv</button> */}
							</label>
						</div>
						{isFileUploaded && <Table tableData={tableData} showEmptyTable={showEmptyTable} selectedValue={selectedValue}/>}
						{showEmptyTable && <CustomTable setGetTableData={setGetTableData} selectedValue={selectedValue}/>}
						{showEmptyTable && <button className='btn' onClick={handleEnableFields}>Done</button>}
					</div>
					<div className={styles.setParameters}>
						<div className={styles.mainContainer}>
							{/* <Heading className={styles.headings}>SET PARAMETERS</Heading> */}
							<div className={enableFields ? styles.diskImgContainer : styles.diskImgContainerFaded}>
								{/* <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Instruments</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><GiPolarBear style={{ color: 'red', width: '40px', height: '40px' }} /></div>
										<div className={styles.inputContainer}>
											<div className={styles.textCard}>BTC</div>
											<div className={styles.textCard}>USDC</div>
											<div className={styles.textCard}>AAPL</div>
										</div>
									</div>
								</div> */}
								<div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Date Range</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><MdOutlineCalendarMonth className={styles.signs} /></div>
										<div className={styles.inputContainer} >
											<RangePicker
												placeholder={['Start Date', 'End Date']}
												format={'YYYY/MM/DD'}
												disabled={!enableFields}
												className={styles.datePicker}
												onChange={(value, dateString) => {
													setDateRange({
														'startDate': dateString[0],
														'endDate': dateString[1]
													});
													setInputRange({
														'startDate': dateString[0],
														'endDate': dateString[1]
													});
												}}
												required
											/>
										</div>
									</div>

								</div>
								{/* <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Valuation Currency</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><AiOutlineDollar className={styles.signs} /></div>
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
												disabled
											/>
										</div>
									</div>
								</div> */}
								{/* <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Revaluation Frequency</SubHeading> */}
								{selectedValue === 'allocation' && <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Rebalance</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><LuClock3 className={styles.signs} /></div>
										<div className={styles.inputContainer}>
											<Select
												style={{ width: 223, color: "black", marginLeft: "18px" }}
												options={rebalanceOptions}
												onChange={(e) => setRebalanceValue(e)}
												disabled={!enableFields}
											/>
										</div>
									</div>
								</div>}
								{/* <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Rebalance Frequency</SubHeading> */}
								{selectedValue === 'allocation' && <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Start cash</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><LuClock3 className={styles.signs} /></div>
										<div className={styles.inputContainer}>
											<input type="number" disabled={!enableFields} onChange={(e) => setCash(e.target.value)} className={styles.inputField}/>
										</div>
									</div>
								</div>}
								{/* <div className={styles.parameterContainer}><SubHeading className={styles.textHeading}>Market Feed</SubHeading>
									<div className={styles.parameterImageContainer}>
										<div className={styles.logoContainer}><GrLineChart className={styles.signs} /></div>
										<div className={styles.inputContainer}></div>
									</div>
								</div> */}
							</div>
							<button className={`btn ${(!enableFields) && styles.playBtnDivFaded}`} onClick={handlePlayButtonClick}>Run</button>
						</div>
					</div>
				</div>}
				{/* <div className={isFileUploaded ? styles.playBtnDiv : styles.playBtnDivFaded}>
					<FaRegPlayCircle className={styles.playBtn} onClick={handlePlayButtonClick} />
				</div> */}
			</div>
		</div>
	);
}
