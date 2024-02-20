import {Box, CardHeader, Input, InputLabel, NativeSelect, Select,MenuItem , useTheme } from "@mui/material";
import { tokens } from "../../themes/theme";
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from "../../components/Header";
import fetchGeos from "../../services/CommonServices";
import { useEffect, useState } from "react";


const AddUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [geos, setGeos] = useState([]);

  useEffect(() => {
    fetchGeos(setGeos).then(function(response){
      setGeos(response.data);
    })
  },[]);

  return (
    <Box  m='20px'>
      <Box display='flex' justifyContent='space-between'  alignItems='center'>
        <Header title='ADD USER' subtitle='Add users'/>
      </Box>
      <Card sx={{maxWidth: '100vh'}}>
        <CardContent>
          <form>
            <FormControl>
              <InputLabel htmlFor="firstName">FirstName</InputLabel>
              <Input id="firstName" aria-describedby="first-name"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="lastName">LastName</InputLabel>
              <Input id="lastName" aria-describedby="last-name"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="lastName">LastName</InputLabel>
              <Input id="lastName" aria-describedby="last-name"/>
            </FormControl>
            <FormControl>
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                label="Country"
              >
              <MenuItem>
                    <em>Choose a Model</em>
                </MenuItem>
              {geos ? geos.map(geo=> {
                return <MenuItem value={geo.geoId}>
                    <em>{geo.geoName}</em>
                </MenuItem>
                }) : null
               }
              </Select>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Box>
  );

}

export default AddUser;
