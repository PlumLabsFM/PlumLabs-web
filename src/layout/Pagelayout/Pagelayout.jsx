import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/Sidebar';

export const PageLayout = () => {
	return (
		<>
			<div>
				<div style={{display: 'flex'}}>
					<SideBar />
					<div style={{width: '100%', minWidth: '330px'}}>
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	);
};