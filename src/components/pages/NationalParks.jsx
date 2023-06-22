import { Box, CircularProgress, Grid, Link, Typography } from "@mui/material";
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
      <Grid container>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          {park !== null ? (
            <Grid container sx={{
              margin: '1rem',
              textAlign: "center"

            }}>
              <Grid item xs={12}>
                <Typography variant="h6" color="gray">
                  {park.LocationName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h7" color="gray">
                {park.Address}, {park.City}, {park.State}, {park.ZipCode}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h7" color="gray">
                Phone: {park.Phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h7" color="gray">
                Fax: {park.Fax}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {(park.Visit)?
                  <Link href={park.Visit} target="_blank" rel="noreferrer">Visit website</Link>: null}
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}
