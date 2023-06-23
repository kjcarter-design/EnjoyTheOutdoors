import React, { useContext, useEffect, useState } from 'react';
import {
	Autocomplete,
	Box,
	Grid,
	TextField,
	FormControlLabel,
	Card,
	Checkbox,
} from '@mui/material';
import { NPSContext } from '../DataProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchBar({ setFilteredOptions, options, searchType }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState(null);

	const { parkTypes, locations } = useContext(NPSContext);

	const [locationFilter, setLocationFilter] = useState(null);
	const [parkTypeFilter, setParkTypeFilter] = useState(null);
	const [useLocationFilter, setUseLocationFilter] = useState(false);
	const [useParkTypeFilter, setUseParkTypeFilter] = useState(false);

	const locationOptions = locations.map((location) => location);
	const parkTypeOptions = parkTypes.map((parkType) => parkType);

	useEffect(() => {
		if (!options) {
			return;
		}
	
		let filteredOptions = options;
		if (searchValue) {
			filteredOptions = options.filter((option) =>
				(option.name && option.name.toLowerCase().includes(searchValue.toLowerCase())) ||
				(option.LocationName && option.LocationName.toLowerCase().includes(searchValue.toLowerCase()))
			);
		}
		filteredOptions = filteredOptions.filter(
			(option) =>
				(!useLocationFilter || option.State === locationFilter) &&
				(!useParkTypeFilter || (option.LocationName && option.LocationName.includes(parkTypeFilter)))
		);
		setFilteredOptions(filteredOptions);
	}, [
		searchValue,
		useLocationFilter,
		locationFilter,
		useParkTypeFilter,
		parkTypeFilter,
		options,
		setFilteredOptions,
	]);
	
	return (
		<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}
  >
   <Card
      sx={{ 
        margin: '1rem', 
        padding: '1.5rem', 
        backgroundColor: '#f5f5f5',
        width: { xs: '100%', md: '100%' }
      }}
    >
				<Grid container direction='column' alignItems='center' spacing={2}>
					<Grid container alignItems='center'>
						<Grid item xs={12}>
							<Autocomplete
								options={options}
								getOptionLabel={(option) => option.name || option.LocationName}
								value={searchValue}
								onChange={(event, newValue) => {
									if (newValue) {
										if (newValue.LocationName) {
											setSearchValue(newValue.LocationName);
											navigate(`/national_parks/${newValue.LocationID}`);
										} else if (newValue.name) {
											setSearchValue(newValue.name);
											navigate(`/mountains/${newValue.name}`);
										}
									} else {
										setSearchValue(null);
									}
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										variant='standard'
										label={
											location.pathname.includes('parks')
												? 'Park Search'
												: 'Mountain Search'
										}
										placeholder={
											location.pathname.includes('parks')
												? 'Ex: Yosemite...'
												: 'Ex: St. Helens...'
										}
									/>
								)}
							/>
						</Grid>
						{location.pathname.includes('parks') && (
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
						)}
						{location.pathname.includes('parks') && (
							<Grid item xs={6}>
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
							</Grid>)}
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
						{useParkTypeFilter && location.pathname.includes('parks') && (
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
					</Grid>
					<Grid container spacing={2}></Grid>
				</Grid>
			</Card>
		</Box>
	);
}
