import React, { useContext, useEffect, useState } from 'react';
import {
	Autocomplete,
	Box,
	Grid,
	TextField,
	IconButton,
	FormControl,
	FormLabel,
	FormControlLabel,
	Switch,
	List,
	ListItem,
	ListItemText,
	Button,
	Divider,
	Card,
	Checkbox,
	Typography,
} from '@mui/material';
import { NPSContext } from '../DataProvider';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
	const navigate = useNavigate();
	const [value, setValue] = useState('parks'); // Set initial value to 'parks'
	const [searchValue, setSearchValue] = useState(null);
	const [showAll, setShowAll] = useState(false);
	const [filteredOptions, setFilteredOptions] = useState([]);

	const { parks, parkTypes, locations, mountains } = useContext(NPSContext);

	const [locationFilter, setLocationFilter] = useState(null);
	const [parkTypeFilter, setParkTypeFilter] = useState(null);
	const [useLocationFilter, setUseLocationFilter] = useState(false);
	const [useParkTypeFilter, setUseParkTypeFilter] = useState(false);

	const locationOptions = locations.map((location) => location);
	const parkOptions = parks.map((park) => park.LocationName);
	const parkTypeOptions = parkTypes.map((parkType) => parkType);
  const mountainOptions = mountains.map((mountain) => mountain.name);
  
  

	useEffect(() => {
		let options = value === 'parks' ? parkOptions : mountainOptions;
		if (showAll) {
			setFilteredOptions(options);
		} else {
			let filteredOptions = options;
			if (searchValue) {
				filteredOptions = options.filter((option) =>
					option.toLowerCase().includes(searchValue.toLowerCase())
				);
			}
			filteredOptions = filteredOptions.filter((option) =>
				value === 'parks'
					? parks.find(
							(park) =>
								park.LocationName === option &&
								(!useLocationFilter || park.State === locationFilter) &&
								(!useParkTypeFilter || park.ParkType === parkTypeFilter)
					  )
					: mountains.find(
							(mountain) =>
								mountain.name === option &&
								(!useLocationFilter || mountain.State === locationFilter)
					  )
			);
			setFilteredOptions(filteredOptions);
		}
	}, [
		value,
		showAll,
		searchValue,
		useLocationFilter,
		locationFilter,
		useParkTypeFilter,
		parkTypeFilter,
	]);

	const handleChange = (event) => {
		setValue(event.target.checked ? 'parks' : 'mountains');
	};

	const handleListItemClick = (item) => {
		if (value === 'parks') {
			const park = parks.find((park) => park.LocationName === item);
			if (park) {
				navigate(`/national_parks/${park.LocationID}`);
			}
		} else {
			const mountain = mountains.find((mountain) => mountain.name === item);
			if (mountain) {
				navigate(`/mountains/${mountain.name}`);
			}
		}
	};

	const handleSearch = () => {
		if (value === 'parks') {
			const park = parks.find((park) => park.LocationName === searchValue);
			if (park) {
				navigate(`/national_parks/${park.LocationID}`);
			}
		} else {
			const mountain = mountains.find(
				(mountain) => mountain.name === searchValue
			);
			if (mountain) {
				navigate(`/mountains/${mountain.name}`);
			}
		}
	};

	return (
		<Box>
			<Card
				sx={{ margin: '1rem', padding: '1.5rem', backgroundColor: '#f5f5f5' }}
			>
				<Grid container direction='column' alignItems='center' spacing={2}>
					<Grid container alignItems='center'>
						<Grid item xs={6}>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Search for:</FormLabel>
								<Grid
									container
									alignItems='center'
                  justifyContent='center'
                  sx={{textAlign:'center'}}
                  spacing={8}
								>
									<Grid item xs={4}>
										<Typography>Mountains</Typography>
									</Grid>
									<Grid item xs={4}>
										<Switch
											checked={value === 'parks'}
											onChange={handleChange}
											name='searchSwitch'
										/>
									</Grid>
									<Grid item xs={4}>
										<Typography>Parks</Typography>
									</Grid>
								</Grid>
							</FormControl>
						</Grid>
						<Grid container>
							<Grid item xs={6} justifyContent='space-between'>
								<FormControlLabel
									control={
										<Checkbox
											checked={useLocationFilter}
											onChange={(event) =>
												setUseLocationFilter(event.target.checked)
											}
										/>
									}
									label='State'
								/>
							</Grid>
							<Grid item xs={6}>
								<FormControlLabel
									control={
										<Checkbox
											checked={useParkTypeFilter}
											onChange={(event) =>
												setUseParkTypeFilter(event.target.checked)
											}
										/>
									}
									label='Park Type'
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{useLocationFilter && (
					<Grid item xs={6}>
						<Autocomplete
							options={locationOptions}
							value={locationFilter}
							onChange={(event, newValue) => {
								setLocationFilter(newValue || '');
							}}
							onInputChange={(event, newInputValue) => {
								setLocationFilter(newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									variant='standard'
									label='Location Filter'
								/>
							)}
						/>
					</Grid>
				)}
				{useParkTypeFilter && (
					<Grid item xs={6}>
						<Autocomplete
							options={parkTypeOptions}
							value={parkTypeFilter}
							onChange={(event, newValue) => {
								setParkTypeFilter(newValue || '');
							}}
							onInputChange={(event, newInputValue) => {
								setParkTypeFilter(newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									variant='standard'
									label='Park Type Filter'
								/>
							)}
						/>
					</Grid>
				)}

				<Grid item xs={6}>
        <Autocomplete
  options={filteredOptions}
  value={searchValue}
  onChange={(event, newValue) => {
    setSearchValue(newValue || '');
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      variant='standard'
      label={value === 'parks' ? 'Park Search' : 'Mountain Search'}
      placeholder={
        value === 'parks' ? 'Ex: Yosemite...' : 'Ex: St. Helens...'
      }
    />
  )}
/>
					<IconButton aria-label='Search' onClick={handleSearch}>
						<Search />
					</IconButton>
					<Button
						onClick={() => {
							setShowAll(!showAll);
						}}
					>
						Show all {value}
					</Button>
				</Grid>
			</Card>
			{showAll && (
				<Card
					sx={{ margin: '1rem', padding: '1.5rem', backgroundColor: '#f5f5f5' }}
				>
					<List>
						{filteredOptions.map((item, index) => (
							<div key={index}>
								<ListItem button onClick={() => handleListItemClick(item)}>
									<ListItemText primary={item} />
								</ListItem>
								<Divider />
							</div>
						))}
					</List>
				</Card>
			)}
		</Box>
	);
}
