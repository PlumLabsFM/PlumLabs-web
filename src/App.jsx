import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { PageLayout } from './layout/Pagelayout/Pagelayout';
import { Dashboard, Home, Login, PlumDashboard, PlumVision, Signup, ToolKit, AppStore, Demo } from './pages';
import { isloggedIn } from './utils/helper';
import { toast } from 'react-toastify';

function App() {
	const location = useLocation();

	function Protected({ children }) {
		if (!isloggedIn()) {
			return <Navigate to="/login" replace />;
		}else{
			toast.warn('Please login!')
		}
		return children;
	}

	const navbarProps = {
		"/app-store": { title: "APP STORE" },
		"/tool-kit": { title: "TOOL KIT" },
		"/plum-vision": { title: "" },
	};

	const selectedNavbarProps = navbarProps[location.pathname] || {};

	return (
		<>
			{navbarProps[location.pathname] && <Navbar {...selectedNavbarProps} />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={isloggedIn() ? <Navigate to="/dashboard" /> : <Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
				<Route path="/app-store" element={<Protected><AppStore /></Protected>} />
				<Route path="/tool-kit" element={<Protected><ToolKit /></Protected>} />
				<Route path="/plum-vision" element={<Protected><PlumVision /></Protected>} />
				<Route path="/" element={<PageLayout />}>
					<Route path="/demo" element={<Demo />} />
					<Route path="/plum-dashboard" element={<Protected><PlumDashboard /></Protected>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
