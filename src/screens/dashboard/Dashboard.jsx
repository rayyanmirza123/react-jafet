import {Box, useTheme } from "@mui/material";
import { tokens } from "../../themes/theme";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between'  alignItems='center'>
        <Header title='DASHBOARD' subtitle='Start Here'/>
      </Box>
      {/* page content here */}
    </Box>
  );
}

export default Dashboard;
