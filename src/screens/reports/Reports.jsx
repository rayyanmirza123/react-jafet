import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Typography, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CsvDownloadButton from 'react-json-to-csv'

const Reports = () => {

  const [reportData, setReportData] = useState([]);
  const [classValue, setClassValue] = useState('');
  const [semester, setSemester] = useState('');
  const [date, setDate] = useState(null);
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');

  const handleFetchReport = async () => {
    try {
      const response = await axios.get('http://localhost:8080/reports', {
        params: {
          class: classValue,
          semester,
          date: date ? date.toISOString().split('T')[0] : '',
          rollNo,
          name
        }
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching the report data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFetchReport();
  };

  return (
    <div>
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={24}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Reports
          </Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Class"
                fullWidth
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
                variant="outlined"
                required
              >
                <MenuItem value="Class A">Class A</MenuItem>
                <MenuItem value="Class B">Class B</MenuItem>
                {/* Add more classes as needed */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Semester"
                fullWidth
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                variant="outlined"
                required
              >
                <MenuItem value="Spring 2024">Spring 2024</MenuItem>
                <MenuItem value="Fall 2023">Fall 2023</MenuItem>
                {/* Add more semesters as needed */}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth required />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Fetch Report
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography variant="h4" gutterBottom>
          Attendance Report
        </Typography>
        <CsvDownloadButton data={reportData} />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell>Semester</TableCell>
                <TableCell>RollNo</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.class}</TableCell>
                  <TableCell>{row.semester}</TableCell>
                  <TableCell>{row.rollNo}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
};

export default Reports;
