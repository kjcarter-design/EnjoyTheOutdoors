import {
	Box,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import { useParams } from 'react-router-dom';
import { NPSContext } from '../../DataProvider';
export default function Mountains() {
	const { id } = useParams();
	const { mountains } = useContext(NPSContext);
	const [mountain, setMountain] = useState(null);

	useEffect(() => {
		const selectedMountain = mountains.find((mountain) => mountain.name === id);
		setMountain(selectedMountain);
	}, [id, mountains]);

	useEffect(() => {
		console.log(mountain);
	}, [mountain]);

	if (!mountain) <CircularProgress />;

	return (
		<Box
			sx={{
				margin: '0',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
      <Grid container sx={{ display: 'flex', alignItems: 'center', margin:'0'}}>
				<Grid item xs={12}>
					<SearchBar />
				</Grid>
				<Grid item xs={12}>
					{mountain !== null ? (
            <Card sx={{ width: '90%', }}>
							<CardMedia
								image={
									process.env.PUBLIC_URL + `/images/mountains/${mountain.img}`
								}
							>
								<Box
									sx={{
										display: 'flex',
										height: 'inherit',
										width: 'inherit',
                    alignItems: 'end',
										backgroundImage:
											'linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0) 35%)',
									}}
								>
									<Typography
										variant='h5'
										color='whitesmoke'
										sx={{ margin: '.5rem' }}
									>
										{mountain.name}
									</Typography>
								</Box>
							</CardMedia>
							<CardContent>
								<Grid container spacing={0.5}>
									<Grid item xs={12}>
										<Typography variant='h7' color='gray'>
											Coordinates: {mountain.coords.lat}, {mountain.coords.lng}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant='h7' color='gray'>
											Elevation: {mountain.elevation} ft
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant='h7' color='gray'>
											{mountain.desc}
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					) : null}
				</Grid>
			</Grid>
		</Box>
	);
}
