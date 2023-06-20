import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import parks from "../../assets/parks.png";
import NationalParksSearch from "../NationalParksSearch";
import MountainsSearch from "../MountainsSearch";

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", margin: "0" }}>
      <Box sx={{}}>
        <img src={parks} alt="National Park" />
      </Box>
      <Grid>
        <Grid item>
          <Card>
            <CardContent>
              <NationalParksSearch />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <MountainsSearch />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
