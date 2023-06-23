import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import parkimage from '../../assets/parks.png';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/TheSummitSeekers.svg';

export default function Home() {
	const navigate = useNavigate();

	const handleNavigate = (path) => {
		navigate(path);
	};
	return (
		<Box sx={{ width: '100vw', height: '100vh', margin: '0' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
					width: '100vw',
					height: { xs: '40vh', md: '40vh' },
					margin: '0',
					backgroundImage: `url(${parkimage})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<Card
					sx={{
						height: { xs: '40vh', md: '60vh' },
						width: '100vw',
						textAlign: 'center',
						backgroundColor: 'rgba(0,0,0,0.0)',
					}}
					elevation={0}
				>
					<CardContent>
  <Box sx={{ height: { xs: '0', md: '30vh' } }} />
  <img
    src={Logo}
    alt='Logo'
    style={{ height: '20vh', marginBottom: '10px' }}
  />
  <Typography variant='h5' color='whitesmoke'>
    We Are The Summit Seekers
  </Typography>
  <Typography variant='body' color='whitesmoke'>
    Explore National Parks | Discover Mountains
  </Typography>
</CardContent>
				</Card>
			</Box>
			<Grid container>
				<Grid
					item
					xs={12}
					container
					justifyContent='center'
					spacing={2}
					margin={'1rem'}
				>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
								flexWrap: 'wrap',
							}}
						>
							<Button
								variant='contained'
								color='primary'
								onClick={() => handleNavigate('/national_parks')}
							>
								Search for National Parks
							</Button>
							<Button
								variant='contained'
								color='primary'
								onClick={() => handleNavigate('/mountains')}
							>
								Search for Mountains
							</Button>
						</Box>
					</Grid>
				</Grid>
				<Grid item sx={{ margin: '1.5rem' }}>
					<Typography variant='h6' color='gray' sx={{ textAlign: 'center' }}>
						Welcome to The Summit Seekers!
					</Typography>
					<Typography variant='body' color='gray'>
						We are a community of adventurers, explorers, and nature lovers
						dedicated to the exploration and conservation of our planet's most
						majestic natural wonders. From the towering peaks of the world's
						highest mountains to the serene landscapes of our national parks, we
						believe in the power of nature to inspire, heal, and transform. At
						The Summit Seekers, we strive to provide you with the most
						comprehensive and up-to-date information about national parks and
						mountains across the globe. Our goal is to inspire you to embark on
						your own adventures and to foster a deeper appreciation for the
						natural world.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
