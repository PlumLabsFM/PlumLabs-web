import React, { useState } from 'react';
import API from '../../assets/api.png';
import CSV from '../../assets/csv.png';
import Disk from '../../assets/disk.png';
import Blocks from '../../components/Block/Block';
import { SmallText, SubHeading } from '../../components/elements/Typography/Typography';
import { PlumVisionData } from '../../utils/constants';
import styles from './PlumVision.module.css';

export default function PlumVision() {
	const [isCSVUploaded, setIsCSVUploaded] = useState(false);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file && file.type === 'text/csv') {
			console.info('CSV file uploaded:', file);
			setIsCSVUploaded(true);
		} else {
			alert('Please upload a valid CSV file.');
			setIsCSVUploaded(false);
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className= {styles.container}>
				<div className={styles.mainDiv}>
					<div className={styles.loadData}>
						<div className={styles.logoDiv}>
							<div className={styles.logoSubDiv}>
								<SubHeading className={styles.headings}>LOAD DATA</SubHeading>

								<label className={styles.csvUploadLabel}>
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
								</label>
							</div>
							<div>
								<Blocks
									width={"120px"}
									height={"114px"}
									isInfo={true}
									isLogo={PlumVisionData.logo}
									backgroundColor= {PlumVisionData.bgColor}
								/>
								<img src={API} alt="API" />
							</div>
						</div>
					</div>
					<div className={styles.setParameters}>
						<div>
							<SubHeading className={styles.headings}>SET PARAMETERS</SubHeading>
							<div className={isCSVUploaded ? styles.diskImgContainer : styles.diskImgContainerFaded}>
								<div className={styles.imgDiv}><SmallText className={styles.textHeading}>Instruments</SmallText><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><h6 className={styles.textHeading}>Data Range</h6><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><h6 className={styles.textHeading}>Valuation Currency</h6><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><h6 className={styles.textHeading}>Instruments</h6><img src={Disk} alt="disk" className={styles.diskImage}/></div>
								<div className={styles.imgDiv}><h6 className={styles.textHeading}>Instruments</h6><img src={Disk} alt="disk" className={styles.diskImage}/></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
