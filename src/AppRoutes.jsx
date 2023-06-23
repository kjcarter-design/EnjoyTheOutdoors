import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAGE_PATHS } from './constants';
import Home from './components/pages/Home';
import NationalParks from './components/pages/NationalParks';
import Mountains from './components/pages/Mountains';
import { Box } from '@mui/material';
import ParkDetails from './components/pages/ParkDetails';
import MountainDetails from './components/pages/MountainDetails';

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
				<Route
  key={'NationalPark'}
  path={PAGE_PATHS.PARKS_SEARCH + '/:id'}
  element={<ParkDetails />}
/>
<Route
  key={'Mountain'}
  path={PAGE_PATHS.MOUNTAINS + '/:id'}
  element={<MountainDetails />}
/>
			</Routes>
		</Box>
	);
}
