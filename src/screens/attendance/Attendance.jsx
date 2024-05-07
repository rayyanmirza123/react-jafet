import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    teacherId: '',
    studentId: '',
    classroom: '',
    attendanceDateTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Attendance Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Teacher ID"
                  name="teacherId"
                  value={formData.teacherId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Student ID"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Classroom"
                  name="classroom"
                  value={formData.classroom}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Attendance Date-Time"
                  type="datetime-local"
                  name="attendanceDateTime"
                  value={formData.attendanceDateTime}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AttendanceForm;
