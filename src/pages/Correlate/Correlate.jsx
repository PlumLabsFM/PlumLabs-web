import { MdOutlineCalendarMonth } from 'react-icons/md';
import { SubHeading } from '../../components/elements/Typography/Typography';
import styles from './Correlate.module.css';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'antd';

export default function Correlate() {
	const navigate = useNavigate();
	const { RangePicker } = DatePicker;

	const handleSubmit = () => {
		navigate('/stat-dashboard');
	}

	return (
		<div className={styles.rootContainer}>
			<div className={styles.appContainer}>
				<div className={styles.mainInputContainer}>
					<div className={styles.inputContainer}>
						<label className={styles.csvUploadLabel}>
							Import file 1
							<input
								type="file"
								accept=".xlsx"
								className={styles.hiddenFileInput}
							/>
						</label>
						<label className={styles.csvUploadLabel}>
							Import file 2
							<input
								type="file"
								accept=".xlsx"
								className={styles.hiddenFileInput}
							/>
						</label>
						<label className={styles.csvUploadLabel}>
							Import file 3
							<input
								type="file"
								accept=".xlsx"
								className={styles.hiddenFileInput}
							/>
						</label>
					</div>
					<div className={styles.parameterContainer}>
						<div>
							<SubHeading className={styles.textHeading}>Date Range</SubHeading>
							<div className={styles.parameterImageContainer}>
								<div className={styles.logoContainer}><MdOutlineCalendarMonth className={styles.signs} /></div>
								<div className={styles.inputContainer} >
									<RangePicker
										placeholder={['Start Date', 'End Date']}
										format={'YYYY/MM/DD'}
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
						<div className={styles.runButton}>
							<button className={styles.playBtn} onClick={handleSubmit}>Run</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
