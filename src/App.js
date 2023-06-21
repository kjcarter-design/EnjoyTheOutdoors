import './App.css';
import React, {useContext, useEffect} from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { NPSContextProvider, NPSContext } from './DataProvider';

function App() {

	const { parks, locations, parkTypes, mountains } = useContext(NPSContext);

	useEffect(() => {
		console.log(parks)
		console.log(locations)
		console.log(parkTypes)
		console.log(mountains)
	  },[parks, locations, parkTypes, mountains])

	return (
		<Box sx={{ width: '100vw', height: '100vh' }}>
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
