import React, { useContext, useEffect, useState } from 'react';
import {
	Autocomplete,
	Box,
	Grid,
	TextField,
	IconButton,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Card,
	CardContent,
} from '@mui/material';
import { NPSContext } from '../DataProvider';
import { Search } from '@mui/icons-material';


export default function SearchBar() {
	const [value, setValue] = useState('parks');
	const { parks, parkTypes, locations, mountains } = useContext(NPSContext);
	const parkOptions = parks.map((park) => park.LocationName);
	const mountainOptions = mountains.map((mountain) => mountain.name);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Box>
			<Card sx={{margin: '1rem', padding: '1.5rem'}}>
				<FormControl>
					<FormLabel id='search-radio'>Search for:</FormLabel>
					<RadioGroup
						row
						aria-labelledby='search-radio'
						name='row-radio-buttons-group'
						value={value}
						onChange={handleChange}
					>
						<FormControlLabel value='parks' control={<Radio />} label='Parks' />
						<FormControlLabel
							value='mountains'
							control={<Radio />}
							label='Mountains'
						/>
					</RadioGroup>
				</FormControl>
				{value === 'parks' ? (
					<Grid
						container
						spacing={2}
						alignItems='center'
						justifyContent='center'
					>
						<Grid item xs={10.5}>
							<Autocomplete
								options={parkOptions}
								renderInput={(params) => (
									<TextField
										{...params}
										variant='standard'
										label='Park Search'
										placeholder='Ex: Yosemite...'
									/>
								)}
							/>
						</Grid>
						<Grid item xs={1.5}>
							<IconButton aria-label='Search' onClick={null}>
								<Search />
							</IconButton>
						</Grid>
					</Grid>
				) : (
					<Grid item>
						<Grid
							container
							spacing={2}
							alignItems='center'
							justfyContent='center'
						>
							<Grid item xs={10.5}>
								<Autocomplete
									options={mountainOptions}
									renderInput={(params) => (
										<TextField
											{...params}
											variant='standard'
											label='Mountain Search'
											placeholder='Ex: St. Helens...'
										/>
									)}
								/>
							</Grid>
							<Grid item xs={1.5}>
								<IconButton aria-label='Search' onClick={null}>
									<Search />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				)}
			</Card>
		</Box>
	);
}
