import { Box, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NPSContext } from '../DataProvider';

export default function SearchTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const navigate = useNavigate();

  const { parks, parkTypes, locations, mountains } = useContext(NPSContext);
  const locationOptions = locations.map((location) => location);
  const parkOptions = parks.map((park) => park.LocationName);
  const parkTypeOptions = parkTypes.map((parkType) => parkType);
  const mountainOptions = mountains.map((mountain) => mountain.name);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'locationName', headerName: 'Location Name', width: 130 },
    // Add more columns as needed
  ];

  const rows = parks.map((park, index) => ({
    id: index,
    locationName: park.LocationName,
  }));

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleCellClick = (params, event) => {
    // params contains information about the clicked cell
    // You can use params.row to access the data of the row that was clicked
    // Navigate to the details page of the clicked item
    navigate(`/national_parks/${params.row.id}`);
  };
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={handleCellClick}
      />
    </Box>
  );
}
