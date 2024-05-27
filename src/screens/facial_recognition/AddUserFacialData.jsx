import {Box,  Button , useTheme, Grid } from "@mui/material";
import { tokens } from "../../themes/theme";
import { useState } from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from "axios";

const AddUserFacialData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var [images, setImages] = useState([]);

  function handleTakePhoto (dataUri) {
   images = []; 
   images.push(dataUri);
   setImages(images);
   console.log(images);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    axios.post('http://localhost:8080/fr', {'images':images});
  };


  return (
   <Box  m='20px'>
     {/* <Box display='flex' justifyContent='space-between'  alignItems='center'>
       <Header title='Add Facial Data' subtitle='Add Facial Data'/>
     </Box> */}
     <Grid container spacing={2}>
      <Grid xs={4}>
       <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
       />
      </Grid>
      <Grid xs={4}>
       {
        images.map(image =>  {
          return (
          <Grid>
           <img src={image} height='200px' width='250px'/>
          </Grid>)
        })
       }
       <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Grid>
       </form>
      </Grid>
     </Grid>
   </Box>
 );

};


export default AddUserFacialData;