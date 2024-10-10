import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AppStore from '../src/pages/AppStore/AppStore';
import './App.css';
import BackTestNavbar from './components/BackTestNavbar/BackTestNavbar';
import Navbar from './components/Navbar/Navbar';
import { PageLayout } from './layout/Pagelayout/Pagelayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Demo from './pages/Demo/Demo';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PlumVision from './pages/PlumVision/PlumVision';
import Signup from './pages/Signup/Signup';
import ToolKit from './pages/ToolKit/ToolKit';
import { isloggedIn } from './utils/helper';
import PlumDashboard from './pages/PlumDashboard/PlumDashboard';

function App() {
	const location = useLocation();

	function Protected({ children }) {
		if (!isloggedIn()) {
			return (
				<Navigate to="/login" replace />
			);
		}
		return children;
	}

	const navbarProps = {
		"/app-store": {title: "APP  STORE" },
		"/tool-kit": {title: "TOOL KIT" },
		"/plum-vision": {title: ""}
	};

	const selectedNavbarProps = navbarProps[location.pathname] || {};


	return (
		<>
			{navbarProps[location.pathname] && <Navbar {...selectedNavbarProps} />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
				<Route path="/app-store" element={<Protected><AppStore/></Protected>} />
				<Route path="/tool-kit" element={<Protected><ToolKit/></Protected>} />
				<Route path="/plum-vision" element={<Protected><PlumVision/></Protected>} />
				<Route path="/" element={<PageLayout/>}>
					<Route path="/demo" element={<Demo/>} />
					<Route path="/plum-dashboard" element={<Protected><PlumDashboard/></Protected>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;