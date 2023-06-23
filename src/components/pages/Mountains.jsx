import React, { useContext, useState, useEffect } from 'react';
import { NPSContext } from '../../DataProvider';
import SearchBar from '../SearchBar';
import { Box, Grid } from '@mui/material';
import MountainCard from './../MountainCard';

export default function Mountains() {
  const { mountains } = useContext(NPSContext);
  const [filteredMountains, setFilteredMountains] = useState(mountains);

  useEffect(() => {
    setFilteredMountains(mountains);
  }, [mountains]);

  
  console.log('Mountains from context:', mountains);
  console.log('Filtered mountains:', filteredMountains);

  return (
    <Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start', 
				alignItems: 'center', 
        height: 'calc(100vh - 64px)',
    padding: '1rem',
    paddingTop: { xs: '64px', md: '80px' }
			}}
    >
     <SearchBar setFilteredOptions={setFilteredMountains} options={mountains} searchType='mountains' />
      <Grid container spacing={2}>
        {filteredMountains.map((mountain) => (
          <Grid item xs={12} sm={6} md={4} key={mountain.name}>
            <MountainCard mountain={mountain} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
