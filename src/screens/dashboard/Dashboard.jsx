import {Box, Divider, useTheme } from "@mui/material";
import { tokens } from "../../themes/theme";
import Header from "../../components/Header";
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const cardsData = [
    { title: 'Total Students', value: 120 },
    { title: 'Present Today', value: 100 },
    { title: 'Absent Today', value: 20 },
    { title: 'New Faces', value: 5 }
  ];

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between'  alignItems='center'>
        <Header title='DASHBOARD' subtitle='Start Here'/>
      </Box>
      {/* page content here */}
      <Grid container spacing={3}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="h4" color="textSecondary">
                {card.value}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}

export default Dashboard;
