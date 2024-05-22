import {Box, CardHeader, Input, InputLabel, NativeSelect, Select,MenuItem , useTheme, Grid } from "@mui/material";
import { tokens } from "../../themes/theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Camera from 'react-html5-camera-photo';
import Paper from '@mui/material/Paper';
import 'react-html5-camera-photo/build/css/index.css';

const AddUserFacialData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

   const [images, setImages] = useState([]);

  function handleTakePhoto (dataUri) {
   images.push(dataUri);
   setImages(images);
   console.log(images);
  }
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
      </Grid>
     </Grid>
   </Box>
 );

};


export default AddUserFacialData;