import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import parkimage from "../../assets/parks.png";
import SearchBar from "../SearchBar";
import { CenterFocusStrong } from "@mui/icons-material";

export default function Home() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", margin: "0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "20vh",
          margin: "0",
          backgroundImage: `url(${parkimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Card
          sx={{
            height: "20vh",
            width: "100vw",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.0)",
          }}
          elevation={0}
        >
          <CardContent>
            <Typography variant="h5" color="whitesmoke">
              We Are The Summit Seekers
            </Typography>
            <Typography variant="body" color="whitesmoke">
              Explore National Parks | Discover Mountains
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Grid container component="box">
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item sx={{ margin: "1.5rem" }}>
          <Typography variant="h6" color="gray" sx={{ textAlign: "center" }}>
            Welcome to The Summit Seekers!
          </Typography>
          <Typography variant="body" color="gray">
            We are a community of adventurers, explorers, and nature lovers
            dedicated to the exploration and conservation of our planet's most
            majestic natural wonders. From the towering peaks of the world's
            highest mountains to the serene landscapes of our national parks, we
            believe in the power of nature to inspire, heal, and transform. At
            The Summit Seekers, we strive to provide you with the most
            comprehensive and up-to-date information about national parks and
            mountains across the globe. Our goal is to inspire you to embark on
            your own adventures and to foster a deeper appreciation for the
            natural world.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
