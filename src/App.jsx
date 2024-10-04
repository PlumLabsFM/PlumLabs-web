import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AppStore from '../src/pages/AppStore/AppStore';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { PageLayout } from './layout/Pagelayout/Pagelayout';
import Chart from './pages/Chart/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PlumVision from './pages/PlumVision/PlumVision';
import Signup from './pages/Signup/Signup';
import ToolKit from './pages/ToolKit/ToolKit';
import { isloggedIn } from './utils/helper';

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
					<Route path="/chart" element={<Chart/>} />
					{/* <Route path="/demo" element={<Demo />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;