{/* <Grid item xl={4}>
  <InputLabel style={{ fontWeight: 600 }}>Spl</InputLabel>
  <Select value={filters.spl} onChange={(e) => handleFilterChange('spl', e.target.value)} fullWidth>
    {Array.from(new Set(data.map((item) => item.Spl))).map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
</Grid>
<Grid item xl={4}>
  <InputLabel style={{ fontWeight: 600 }}>Class</InputLabel>
  <Select value={filters.spl} onChange={(e) => handleFilterChange('cls', e.target.value)} fullWidth>
    {Array.from(new Set(data.map((item) => item.Class))).map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
</Grid>
<Grid item xl={4}>
  <InputLabel style={{ fontWeight: 600 }}>Status 2k</InputLabel>
  <Select value={filters.spl} onChange={(e) => handleFilterChange('status2k', e.target.value)} fullWidth>
    {Array.from(new Set(data.map((item) => item['Status 2k']))).map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
</Grid>
<Grid item xl={4}>
  <InputLabel style={{ fontWeight: 600 }}>Status 5k</InputLabel>
  <Select value={filters.spl} onChange={(e) => handleFilterChange('status5k', e.target.value)} fullWidth>
    {Array.from(new Set(data.map((item) => item['Status 5k']))).map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
</Grid> */}


// const deleteAllData = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/data/delete", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

{/* <Grid container gap={2} mt={2}>
<Grid item container gap={2}>
  <Grid item xl={4}>
    <InputLabel style={{ fontWeight: 600 }}>Select Filter</InputLabel>
    <Select
      labelId="filter-label"
      id="filter-select"
      value={selectedFilter}
      label="Select Filter"
      onChange={handleChangeFilter}
    >
      {Object.keys(data[0] || {}).map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </Grid>
  <Grid item xl={3}>
    <input type="file" accept=".xlsx" onChange={handleFileChange} />
    <Button variant="contained" onClick={uploadFile}>
      Upload
    </Button>
  </Grid>
</Grid>

</Grid> */}