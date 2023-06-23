import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NPSContext } from '../../DataProvider';
import { Box, Typography } from '@mui/material';
import { sunTimes } from '../../helpers/sunshine'
import { getState } from '../../helpers/getState';

export default function MountainDetails() {
	const { mountains } = useContext(NPSContext);
	const { id } = useParams();
	const [mountain, setMountain] = useState(null);

	useEffect(() => {
		const selectedMountain = mountains.find((mountain) => mountain.name === id);
		setMountain(selectedMountain);
	}, [mountains, id]);

	if (!mountain) {
		return <div>Loading...</div>;
	}

  const [sunrise, sunset] = sunTimes(mountain.coords.lat, mountain.coords.lng);

	useEffect(() => {
		getState(mountain.coords)
	
		return cleanUp = () => {
			
		}
	}, []);

	return (
		
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '30vh',
				}}
			>
				<Box sx={{ width: '100%', marginTop: '2rem', position: 'relative' }}>
					<img src={process.env.PUBLIC_URL + `/images/mountains/${mountain.img}`} alt={mountain.name} style={{ width: '100%' }} />
					<Box
						sx={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							backgroundImage: 'linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0) 35%)',
						}}
					>
						<Typography variant='h3' color='whitesmoke' sx={{ margin: '.5rem' }}>
							{mountain.name}
						</Typography>
					</Box>
				</Box>
			<Box sx={{ width: '98%', margin: '2rem' }}>
					<Typography variant='h6' color='textSecondary' gutterBottom>
						Coordinates: {mountain.coords.lat}, {mountain.coords.lng}
					</Typography>
					<Typography variant='h6' color='textSecondary' gutterBottom>
						Elevation: {mountain.elevation} ft
					</Typography>
          <Typography variant='h6' color='textSecondary' gutterBottom>
						Sunrise: {sunrise ? new Date(sunrise * 3600000).toLocaleTimeString() : 'Sun never rises'}
					</Typography>
          <Typography variant='h6' color='textSecondary' gutterBottom>
						Sunset: {sunset ? new Date(sunset * 3600000).toLocaleTimeString() : 'Sun never sets'}
					</Typography>
					<Typography variant='body1' color='textSecondary' paragraph>
						{mountain.desc}
					</Typography>
				</Box>
			</Box>

	);
}
