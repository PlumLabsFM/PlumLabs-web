import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import ContextProvider from './utils/ContextProvider';

createRoot(document.getElementById('root')).render(
	// eslint-disable-next-line react/react-in-jsx-scope
	<BrowserRouter>
		<StrictMode>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<ContextProvider>
			<App/>
			</ContextProvider>
			<ToastContainer />
		</StrictMode>
	</BrowserRouter>
);
