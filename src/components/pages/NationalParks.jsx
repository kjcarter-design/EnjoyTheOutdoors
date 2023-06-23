import React, { useContext, useState, useEffect } from 'react';
import { NPSContext } from '../../DataProvider';
import SearchBar from '../SearchBar';
import ParkCard from '../ParkCard';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function NationalParks() {
	const { parks } = useContext(NPSContext);
	const [filteredParks, setFilteredParks] = useState(parks);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setFilteredParks(parks.filter((park) => park.LocationID === id));
		} else {
			setFilteredParks(parks);
		}
	}, [parks, id]);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
        height: 'calc(100vh - 64px)',
        padding: '1rem',
        paddingTop: { xs: '64px', md: '80px' }
			}}
		>
			<SearchBar
				setFilteredOptions={setFilteredParks}
				options={parks}
				searchType='parks'
			/>

			<Grid container spacing={2}>
				{filteredParks.map((park) => (
					<Grid item xs={12} sm={6} md={4} key={park.LocationID}>
						<ParkCard park={park} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
