import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ParkCard({ park }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/national_parks/${park.LocationID}`);
  };

  return (
    <Card onClick={handleClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          {park.LocationName}
        </Typography>
        <Typography variant="body2">
          {park.Address}, {park.City}, {park.State}, {park.ZipCode}
        </Typography>
        <Typography variant="body2">
          Phone: {park.Phone}
        </Typography>
        <Typography variant="body2">
          Fax: {park.Fax}
        </Typography>
        {park.Visit && (
          <Typography variant="body2">
            <a href={park.Visit} target="_blank" rel="noreferrer">Visit website</a>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
