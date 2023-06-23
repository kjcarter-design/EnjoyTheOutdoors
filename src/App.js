import './App.css';
import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { NPSContextProvider } from './DataProvider';

function App() {
	return (
		<Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'whitesmoke'}}>
			<NPSContextProvider>
				<Router>
				<Header />
					<AppRoutes />
				<Footer />
				</Router>
			</NPSContextProvider>
			<Footer />
		</Box>
	);
}

export default App;
