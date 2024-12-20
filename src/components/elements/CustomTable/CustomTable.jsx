import React, { useEffect, useState } from 'react';
import styles from './CustomTable.module.css';
import { Select } from 'antd';
import { AssetValues } from '../../../utils/constants';

export default function CustomTable({setGetTableData, selectedValue}) {
    const [updatedAssetOptions, setUpdatedAssetOptions] = useState(AssetValues);
    
    const [userFilledData, setUserFilledData] = useState(Array(6).fill({
        asset: "",
        amount: null,
        percent: 0,
    }));

    const handleOptionChange = (e, rowIndex) => {        
        let updatedObject = userFilledData[rowIndex];

        updatedObject = {
            ...updatedObject,
            asset : e
        }
        const updatedArray = [...userFilledData];
        updatedArray[rowIndex] = updatedObject
        setUserFilledData(updatedArray);
        const updatedOptions = updatedAssetOptions.map(asset => {
            if (asset.value === e) {
                return { ...asset, selected: true }; 
            } else {
                return { ...asset, selected: false };
            }
        });
        setUpdatedAssetOptions(updatedOptions);

    }

    const getAvailableOptions = (rowIndex) => {
        const selected = new Set();
        userFilledData.forEach((row, index) => {
            if (index !== rowIndex && row.asset) {
                selected.add(row.asset);
            }
        });

        return updatedAssetOptions.filter(asset => !selected.has(asset.value));
    };

    const handleInputChange = (e, key, index) => {
        let updatedObject = userFilledData[index];
        updatedObject = {
            ...updatedObject,
            [key] : Number(e.target.value)
        }
        const updatedArray = [...userFilledData];
        updatedArray[index] = updatedObject
        setUserFilledData(updatedArray);
    }

    useEffect(() => {
        setGetTableData(userFilledData)
    }, [userFilledData]);

	return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHead}>Asset Name</th>
                    <th className={styles.tableHead}>Fixed Amount</th>
                    {!(selectedValue==='position') && <th className={styles.tableHead}>Fixed Percentage</th>}
                </tr>
            </thead>
            <tbody>
                {userFilledData.map((_, rowIndex) => (
                    <tr className={styles.tableRow} key={rowIndex}>
                        <td className={styles.tableData}>
                            <Select
                                style={{ width: 200, color: "black" }}
                                options={
                                    getAvailableOptions(rowIndex).map(asset => ({ label: asset.label, value: asset.value }))
                                }
                                onChange={(e) => handleOptionChange(e,rowIndex)}
                                value={userFilledData[rowIndex].asset}
                            />
                        </td>
                        <td className={styles.tableData}>
                            <input className='inputField' value={userFilledData[rowIndex].Amount} type="number" onChange={(e) => handleInputChange(e ,'amount',rowIndex)}/>
                        </td>
                        {!(selectedValue==='position') && <td className={styles.tableData}>
                            <input className='inputField' value={userFilledData[rowIndex].Percent}  type="number" onChange={(e) => handleInputChange(e ,'percent',rowIndex)}/>
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
