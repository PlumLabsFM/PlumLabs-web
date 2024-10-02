import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppStore from '../src/pages/AppStore/AppStore';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Chart from './pages/Chart/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PlumVision from './pages/PlumVision/PlumVision';
import Signup from './pages/Signup/Signup';
import ToolKit from './pages/ToolKit/ToolKit';

function App() {
	const location = useLocation();

	const navbarProps = {
		"/app-store": {title: "APPSTORE" },
		"/tool-kit": {title: "TOOL KIT" },
		"/plum-vision": {title: ""},
		"/chart": {title: ""}
	};

	const selectedNavbarProps = navbarProps[location.pathname] || {};

	return (
		<>
			{navbarProps[location.pathname] && <Navbar {...selectedNavbarProps} />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/app-store" element={<AppStore/>} />
				<Route path="/tool-kit" element={<ToolKit/>} />
				<Route path="/plum-vision" element={<PlumVision/>} />
				<Route path="/chart" element={<Chart/>} />
			</Routes>
		</>
	);
}

export default App;
