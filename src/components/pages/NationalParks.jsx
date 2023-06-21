import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './../SearchBar';



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
        <Grid item>
          <SearchBar />
        </Grid>
      </Grid>
    </Box>
  )
}
