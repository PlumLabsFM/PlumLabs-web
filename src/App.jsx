import React from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {

	const location = useLocation();
	const showNavbar = location.pathname == '/login' || location.pathname == '/signup';
	console.info(location, "location");

	return (
		<>
			{!showNavbar && <Navbar/>}
			<Outlet />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<Outlet />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
