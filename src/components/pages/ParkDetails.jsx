import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NPSContext } from '../../DataProvider';
import ParkCard from '../ParkCard';
import { Box } from '@mui/material';

export default function ParkDetails() {
	const { parks } = useContext(NPSContext);
	const { id } = useParams();
	const [park, setPark] = useState(null);

	useEffect(() => {
		const selectedPark = parks.find((park) => park.LocationID === id);
		setPark(selectedPark);
	}, [parks, id]);

	if (!park) {
		return <div>Loading...</div>;
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center', 
				alignItems: 'center', 
        height: '100vh',
        padding: '1rem'
			}}
		>
			<ParkCard park={park} />
		</Box>
	);
}
