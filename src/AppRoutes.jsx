import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAGE_PATHS } from './constants';
import { Home } from '@mui/icons-material';
import NationalParks from './components/pages/NationalParks';
import Mountains from './components/pages/Mountains';
import { Box } from '@mui/material';

export default function AppRoutes() {
	return (
		<Box>
			<Routes>
				<Route key={'Home'} path={PAGE_PATHS.HOME} element={<Home />} />
				<Route
					key={'NationalParks'}
					path={PAGE_PATHS.PARKS_SEARCH}
					element={<NationalParks />}
				/>
				<Route
					key={'Mountains'}
					path={PAGE_PATHS.MOUNTAINS}
					element={<Mountains />}
				/>
			</Routes>
		</Box>
	);
}
