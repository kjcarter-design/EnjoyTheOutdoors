import { Box, CircularProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import { useParams } from 'react-router-dom';
import { NPSContext } from '../../DataProvider';

export default function Mountains() {
  const { id } = useParams();
  const { mountains } = useContext(NPSContext);
  const [mountain, setMountain] = useState(null);

  useEffect(() => {
    const selectedMountain = mountains.find(mountain => mountain.name === id);
    setMountain(selectedMountain);
  }, [id, mountains]);
  
  useEffect(() => {
    console.log(mountain)
  }, [mountain]);

  if (!mountain) <CircularProgress/>;
  
  return (
    <Box sx={{width:"100vw",Height:"100vh"}}
    >
      <SearchBar />
    </Box>
  )
}
