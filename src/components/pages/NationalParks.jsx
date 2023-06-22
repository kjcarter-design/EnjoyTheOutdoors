import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./../SearchBar";
import { NPSContext } from "../../DataProvider";
import { useParams } from "react-router-dom";

export default function NationalParks() {
  const { id } = useParams();
  const { parks } = useContext(NPSContext);
  const [park, setPark] = useState(null);

  useEffect(() => {
    const selectedPark = parks.find((park) => park.LocationID === id);
    setPark(selectedPark);
  }, [id, parks]);

  useEffect(() => {
    console.log(park);
  }, [park]);

  if (!park) <CircularProgress />;

  return (
    <Box sx={{ width: "100vw", height: "100vh", margin: "0" }}>
      <Grid>
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          {park !== null ? (
            <Typography variant="h6" color="gray" sx={{ textAlign: "center" }}>
              {park.LocationName}
            </Typography>
             <Typography variant="h7" color="gray" sx={{ textAlign: "center" }}>
             {park.Address}{', '}{park.City}{', '}{park.State}{', '}{park.Zipcode}
           </Typography>
            <Typography variant="h7" color="gray" sx={{ textAlign: "center" }}>
            {park.Phone}{', '}{park.Fax}{', '}
          </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}
