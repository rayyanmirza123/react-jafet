import {Box, CardHeader, Input, InputLabel, NativeSelect, Select,MenuItem , useTheme } from "@mui/material";
import { tokens } from "../../themes/theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const AddUserFacialData = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 //  const [geos, setGeos] = useState([]);


 //  useEffect(() => {
 //   fetchGeos(setGeos).then(function(response){
 //     setGeos(response.data);
 //   })
 // },[]);

  function handleTakePhoto (dataUri) {
   // Do stuff with the photo...
   console.log(dataUri);
  }
  return (
   <Box  m='20px'>
     <Box display='flex' justifyContent='space-between'  alignItems='center'>
       <Header title='Add Facial Data' subtitle='Add Facial Data'/>
     </Box>
     <Card sx={{maxWidth: '100vh'}}>
       <CardContent>
       <Camera
       onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
     />
       </CardContent>
     </Card>
   </Box>
 );

};


export default AddUserFacialData;