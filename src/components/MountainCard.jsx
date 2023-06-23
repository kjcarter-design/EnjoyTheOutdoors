import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MountainCard({ mountain }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mountains/${mountain.name}`);
  };

  return (
    <Card onClick={handleClick}>
      <CardMedia
        image={process.env.PUBLIC_URL + `/images/mountains/${mountain.img}`}
        sx={{ height: '300px', position: 'relative' }}
      >
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            alignItems: 'end',
            backgroundImage: 'linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0) 35%)',
          }}
        >
          <Typography variant='h5' color='whitesmoke' sx={{ margin: '.5rem' }}>
            {mountain.name}
          </Typography>
        </Box>
      </CardMedia>
      <CardContent>
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Typography variant='h7' color='gray'>
              Coordinates: {mountain.coords.lat}, {mountain.coords.lng}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h7' color='gray'>
              Elevation: {mountain.elevation} ft
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h7' color='gray'>
              {mountain.desc}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
