import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
	// eslint-disable-next-line react/react-in-jsx-scope
	<BrowserRouter>
		<StrictMode>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<App/>
		</StrictMode>
	</BrowserRouter>
);
