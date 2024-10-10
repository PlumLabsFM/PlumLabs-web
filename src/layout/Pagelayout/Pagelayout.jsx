import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/Sidebar';

export const PageLayout = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div style={{display: 'flex'}}>
			<SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
			<div style={{width: '100%', minWidth: '330px'}}>
				<Outlet/>
			</div>
		</div>
	);
};