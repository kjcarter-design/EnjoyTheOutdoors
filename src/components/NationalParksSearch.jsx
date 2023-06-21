import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField, IconButton } from '@mui/material'
import React, {useContext, useEffect} from 'react'
import { NPSContext } from '../DataProvider'

export default function NationalParksSearch() {
  const {parks, parkTypes, locations} = useContext(NPSContext)

  useEffect(() => {
    
    console.log(`Parks:`)
    console.log(parks)
   
  }, [parks]);

  const parkOptions = parks.map(park => park.LocationName);
  return (
    <Box>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={10.5}>
          <Autocomplete options={parkOptions} renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='Park Search'
              placeholder='Ex: Yosemite...'
            />
          )}/>
        </Grid>
        <Grid item xs={1.5}>
          <IconButton aria-label='Search' onClick={null}>
            <Search/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
