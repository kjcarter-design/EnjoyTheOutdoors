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
	Checkbox,
  Divider,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Accordion,
} from '@mui/material';
import { NPSContext } from '../DataProvider';
import { ExpandMore, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const { parks, parkTypes, locations, mountains } = useContext(NPSContext);
  
  const [locationFilter, setLocationFilter] = useState(null);
  const [parkTypeFilter, setParkTypeFilter] = useState(null);
  const [useLocationFilter, setUseLocationFilter] = useState(false);
  const [useParkTypeFilter, setUseParkTypeFilter] = useState(false);

  const locationOptions = locations.map((location) => location);
  const parkOptions = parks.map((park) => park.LocationName);
  const parkTypeOptions = parkTypes.map((parkType) => parkType);
  const mountainOptions = mountains.map((mountain) => mountain.name);
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
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
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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
        <Grid container direction='row' alignItems='center' spacing={2}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <Accordion
              sx={{
                boxShadow: 'none',
                backgroundColor: 'inherit',
                border: 'none',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Filter by:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
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
                </FormControl>
                <Divider />
                <Grid item xs={10.5}>
                  {useLocationFilter && (
                    <Autocomplete
                      options={locationOptions}
                      value={locationFilter}
                      onChange={(event, newValue) => {
                        setLocationFilter(newValue || '');
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant='standard'
                          label='Location Filter'
                        />
                      )}
                    />
                  )}
                  {useParkTypeFilter && (
                    <Autocomplete
                      options={parkTypeOptions}
                      value={parkTypeFilter}
                      onChange={(event, newValue) => {
                        setParkTypeFilter(newValue || '');
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant='standard'
                          label='Park Type Filter'
                        />
                      )}
                    />
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={10.5}>
            <Autocomplete
              filterOptions={filterOptions}
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
                  placeholder={
                    value === 'parks' ? 'Ex: Yosemite...' : 'Ex: St. Helens...'
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={1.5}>
            <IconButton aria-label='Search' onClick={handleSearch}>
              <Search />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}    