import React, { useState } from 'react';
import { Grid, TextField, Button, Box , Typography, Paper} from '@mui/material';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios';

function AddStudent() {
  const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      mobileno: '',
      semester: '',
      course: '',
      images: [], // Store the captured photo here
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log(formData);
      axios.post('http://localhost:8080/add_student', formData);
  };

  const handleTakePhoto = (dataUri) => {
    if (images.length < 7) {
        setImages([...images, dataUri]);
        formData.images = images;
    } else {
        alert('You can only capture up to 7 images.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={24}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Add Student
          </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* First Part */}
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="First Name"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Last Name"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Mobile No"
                                        name="mobileno"
                                        value={formData.mobileno}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Semester"
                                        name="semester"
                                        value={formData.semester}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Right Part */}
                        <Grid item xs={12} md={6}>
                            <div>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt={`Captured ${index}`} style={{ width: '20%', marginBottom: '2px' }} />
                                ))}
                            </div>
                        </Grid>

                        {/* Camera */}
                        <Grid item xs={12} md={6}>
                            <Camera
                                onTakePhoto={handleTakePhoto}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
        </Box>
        </Paper>
    </Grid>
    </Grid>
  );
}

export default AddStudent;
