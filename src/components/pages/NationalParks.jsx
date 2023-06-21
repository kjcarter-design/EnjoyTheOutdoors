import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import NationalParksSearch from '../NationalParksSearch';


export default function NationalParks() {
  const [value, setValue] = useState('park-name');
  //const { state, dispatch, parks, setParks } = useContext(NPSContext);
  //const { isLoading, error } = useFetchNPS();
	const handleChange = (event) => {
		setValue(event.target.value);
	};

  return (
    <Box sx={{ width: '100vw', height: '100vh', margin: '0' }}>
      <Grid>
      <FormControl>
					<FormLabel id='park-type-radio'>Search for:</FormLabel>
					<RadioGroup
						row
						aria-labelledby='park-type-radio'
						name='row-radio-buttons-group'
						value={value}
						onChange={handleChange}
					>
						<FormControlLabel
							value='park-name'
							control={<Radio />}
							label='Park name'
						/>
            <FormControlLabel 
              value='locations' 
              control={<Radio />} 
              label='Locations' 
            />
					</RadioGroup>
				</FormControl>
        <Grid item>
          <Card>
            <CardContent>
              <NationalParksSearch />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
