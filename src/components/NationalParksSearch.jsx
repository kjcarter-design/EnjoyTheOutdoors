import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField, IconButton } from '@mui/material'
import React, {useContext} from 'react'
import { NPSContext } from '../DataProvider'

export default function NationalParksSearch() {
  const {parks, parkTypes, locations} = useContext(NPSContext)

  console.log(parks)

  return (
    <Box>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={10.5}>
          <Autocomplete options={parks} renderInput={(params) => (
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
