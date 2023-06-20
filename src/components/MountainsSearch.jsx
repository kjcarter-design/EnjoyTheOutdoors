import { Search } from '@mui/icons-material'
import { Autocomplete, Box, Grid, TextField, IconButton } from '@mui/material'
import React from 'react'

export default function MountainsSearch() {
  return (
    <Box>
      <Grid container spacing={2} alignItems='center' justfyContent='center'>
        <Grid item xs={10.5}>
          <Autocomplete renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='Mountain Search'
              placeholder='Ex: St. Helens...'
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
