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
import { useNavigate } from 'react-router-dom';


export default function SearchBar() {
  const navigate = useNavigate()
  const [value, setValue] = useState('parks');
  const [searchValue, setSearchValue] = useState(null)
	const { parks, parkTypes, locations, mountains } = useContext(NPSContext);
	const parkOptions = parks.map((park) => park.LocationName);
  const mountainOptions = mountains.map((mountain) => mountain.name);
  
	const handleChange = (event) => {
		setValue(event.target.value);
  };
  
  const handleSearch = () => {
    if (value === 'parks') {
      const park = parks.find(park => park.LocationName === searchValue);
      if (park) {
        navigate(`/national_parks/${park.LocationID}`);
      }
    } else {
      const mountain = mountains.find(mountain => mountain.name === searchValue);
      if (mountain) {
        navigate(`/mountains/${mountain.name}`);
      }
    }
  };


  useEffect(() => {
    console.log(parks)
    console.log(mountains)
  }, [parks, mountains])


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
        <Grid item xs={10.5}>
      <Autocomplete
        options={value === 'parks' ? parkOptions : mountainOptions}
        value={searchValue}
        onChange={(event, newValue) => {
          setSearchValue(newValue || '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='standard'
            label={value === 'parks' ? 'Park Search' : 'Mountain Search'}
            placeholder={value === 'parks' ? 'Ex: Yosemite...' : 'Ex: St. Helens...'}
          />
        )}
      />
    </Grid>
    <Grid item xs={1.5}>
      <IconButton aria-label='Search' onClick={handleSearch}>
        <Search />
      </IconButton>
    </Grid>
			</Card>
		</Box>
	);
}
