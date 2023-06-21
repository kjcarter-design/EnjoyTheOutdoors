import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import parkimage from '../../assets/parks.png';
import SearchBar from '../SearchBar';

export default function Home() {
	

	return (
		<Box sx={{ width: '100vw', height: '100vh', margin: '0' }}>
			<Box
				sx={{
					width: '100vw',
					height: '20vh',
					margin: '0',
					backgroundImage: `url(${parkimage})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			></Box>
			<Grid>
        <Grid item>
					<SearchBar />
				</Grid>
			</Grid>
		</Box>
	);
}
