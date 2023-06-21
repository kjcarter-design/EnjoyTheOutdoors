import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import parkimage from '../../assets/parks.png';
import NationalParksSearch from '../NationalParksSearch';
import MountainsSearch from '../MountainsSearch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NPSContext } from '../../DataProvider';
import useFetchNPS from '../../hooks/useFetchNPS';

export default function Home() {
	const [value, setValue] = useState('parks');
  const { state, dispatch, parks, setParks } = useContext(NPSContext);
  const { isLoading, error } = useFetchNPS();
	const handleChange = (event) => {
		setValue(event.target.value);
	};


	return (
		<Box sx={{ width: '100vw', height: '100vh', margin: '0' }}>
			<Box sx={{}}>
				{/* <img src={parkimage} alt='National Park' /> */}
			</Box>
			<Grid>
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
					<Grid item>
						<Card>
							<CardContent>
								<NationalParksSearch />
							</CardContent>
						</Card>
					</Grid>
				) : (
					<Grid item>
						<Card>
							<CardContent>
								<MountainsSearch />
							</CardContent>
						</Card>
					</Grid>
				)}
			</Grid>
		</Box>
	);
}
